import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import ProductFinderProgress from "./sections/ProductFinderProgress";
import FilterSideBar from "./sections/FilterSideBar";
import FilterBar from "./sections/FilterBar";
import Loading from "../components/Loading";

import { useAppContext } from "../hooks/useAppContext";
import { apiService, PFShopDomain } from "../utils/Constent";
import { defaultSelectedFilter } from "../utils/Common";

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ---------------- Helpers ---------------- */

  const getFiltersFromURL = () => {
    const params = Object.fromEntries(searchParams.entries());
    const filters = { ...defaultSelectedFilter };

    Object.keys(filters).forEach((key) => {
      if (params[key]) {
        if (Array.isArray(filters[key])) {
          filters[key] = params[key].split(",");
        } else if (typeof filters[key] === "boolean") {
          filters[key] = params[key] === "true";
        }
      }
    });

    return filters;
  };

  const getPageFromURL = () => {
    return Number(searchParams.get("page")) || 1;
  };

  /* ---------------- State ---------------- */

  const [selectedFilters, setSelectedFilters] = useState(() => getFiltersFromURL());
  const [page, setPage] = useState(() => getPageFromURL());

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showInlitalLoader, setShowInlitalLoader] = useState(true);

  const abortRef = useRef(null);
  const isFirstLoad = useRef(true);

  const { shopifyProductIds, filtersLoading } = useAppContext();

  /* ---------------- API Call ---------------- */

  const getProductListing = async () => {
    if (!shopifyProductIds || shopifyProductIds.length === 0) return;

    if (abortRef.current) abortRef.current.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      setLoading(true);

      const payload = {
        shop: PFShopDomain,
        shopify_product_ids: shopifyProductIds,
        ...selectedFilters,
        store_availability: selectedFilters?.inStock ? 1 : 0,
        page,
        per_page: 10,
      };

      const res = await apiService.getProducts(payload, {
        signal: controller.signal,
      });

      if (res?.data) {
        setProducts(res?.data?.products || []);
        setTotalPages(res?.data?.pagination?.last_page || 1);
        setTotalProduct(res?.data?.pagination?.total || 0);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("API Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Effects ---------------- */

  // ✅ FIX: Wait for filtersLoading before API call
  useEffect(() => {
    if (filtersLoading) return;
    getProductListing();
  }, [selectedFilters, page, shopifyProductIds, filtersLoading]);

  // Sync state → URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (page > 1) {
      params.set("page", page);
    } else {
      params.delete("page");
    }

    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      } else if (typeof value === "boolean" && value) {
        params.set(key, "true");
      } else {
        params.delete(key);
      }
    });

    setSearchParams(params);
  }, [selectedFilters, page]);

  useEffect(() => {
    if (!isFirstLoad.current) {
      setPage(1);
    } else {
      isFirstLoad.current = false;
    }
  }, [selectedFilters]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  /* ---------------- Pagination ---------------- */

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  /* ---------------- UI ---------------- */

  const isHaveProduct = products?.length > 0;

  useEffect(() => {
    let timer;

    if ((filtersLoading || loading ) && !isHaveProduct) {
      setShowInlitalLoader(true);
    } else {
      timer = setTimeout(() => {
        setShowInlitalLoader(false);
      }, 10);
    }

    return () => clearTimeout(timer);
  }, [filtersLoading, loading]);


  return (
    <>
      <ProductFinderProgress />

      <div className="pf-product-result pf-relative">
        {showInlitalLoader && <Loading />}

        <div className="pf-row">
          <div className="pf-w-full">

            <div className="pf-grid pf-gap-[clamp(20px,4%,40px)] lg:pf-grid-cols-[clamp(200px,22%,291px)_1fr]">

              {/* Sidebar */}
              <FilterSideBar
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />

              {/* Main Content */}
              <div className="pf-flex pf-flex-col sm:pf-gap-[40px]">

                <div className="pf-flex pf-flex-col pf-items-start pf-gap-[15px] lg:pf-gap-[10px]">

                  <FilterBar
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    productCount={totalProduct}
                    loading={isHaveProduct && loading}
                  />

                  <ul className="pf-w-full pf-grid pf-grid-cols-2 md:pf-grid-cols-3 lg:pf-grid-cols-4 pf-gap-[10px] md:pf-gap-[15px] lg:pf-gap-[20px] pf-list-none pf-ml-0 pf-relative">

                    {(isHaveProduct && loading) && (
                      <Loading className="pf-items-start pf-product-loading" />
                    )}

                    {products?.map((product, i) => {
                      const firstImage = product.images_json?.find((img) => img?.src)?.src;

                      const firstAvailableSkuVariant =
                        product.variants_json?.find((variant) => variant?.sku);

                      const firstSKU = firstAvailableSkuVariant?.sku || null;

                      const handleUrl = `/products/${product.handle}`

                      return (
                        <li key={product.shopify_product_id} className="pf-h-full pf-group" >
                          <div className="pf-flex pf-flex-col pf-h-full pf-bg-white pf-p-[15px] pf-border pf-border-[#eee] pf-gap-[15px]">

                            {/* IMAGE */}
                            <div className="pf-relative">
                              <a className=" pf-block pf-relative pf-w-full pf-pt-[100%] pf-overflow-hidden" href={handleUrl}>
                                {firstImage ? (
                                  <img
                                    src={firstImage}
                                    alt={product.title}
                                    className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-object-contain"
                                  />
                                ) : (
                                  <div className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-flex pf-items-center pf-justify-center ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 525.5 525.5"
                                      className="pf-w-[60%] pf-h-[60%] pf-fill-[#a3a1a1]"
                                    >
                                      <path d="M324.5 212.7H203c-1.6 0-2.8 1.3-2.8 2.8V308c0 1.6 1.3 2.8 2.8 2.8h121.6c1.6 0 2.8-1.3 2.8-2.8v-92.5c0-1.6-1.3-2.8-2.9-2.8zm1.1 95.3c0 .6-.5 1.1-1.1 1.1H203c-.6 0-1.1-.5-1.1-1.1v-92.5c0-.6.5-1.1 1.1-1.1h121.6c.6 0 1.1.5 1.1 1.1V308z"></path>
                                      <path d="M210.4 299.5H240v.1s.1 0 .2-.1h75.2v-76.2h-105v76.2zm1.8-7.2l20-20c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l1.5 1.5 16.8 16.8c-12.9 3.3-20.7 6.3-22.8 7.2h-27.7v-5.5zm101.5-10.1c-20.1 1.7-36.7 4.8-49.1 7.9l-16.9-16.9 26.3-26.3c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l27.5 27.5v7.8zm-68.9 15.5c9.7-3.5 33.9-10.9 68.9-13.8v13.8h-68.9zm68.9-72.7v46.8l-26.2-26.2c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-26.3 26.3-.9-.9c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-18.8 18.8V225h101.4z"></path>
                                      <path d="M232.8 254c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.7 8.3 8.3 8.3zm0-14.9c3.6 0 6.6 2.9 6.6 6.6s-2.9 6.6-6.6 6.6-6.6-2.9-6.6-6.6 3-6.6 6.6-6.6z"></path>
                                    </svg>
                                  </div>
                                )}
                              </a>
                              <div className="pf-absolute pf-bottom-[10px] md:pf-bottom-[5px] pf-left-[10px] md:pf-left-auto md:pf-right-0 pf-cursor-pointer
                              pf-flex pf-justify-center pf-items-center pf-gap-[5px] pf-self-stretch pf-rounded-[3px] pf-bg-white pf-shadow-[0_4px_6px_0_rgba(0,0,0,0.08)] pf-py-[6px] pf-px-[12px]
                              pf-text-black pf-text-center pf-font-sans pf-text-[12px] pf-font-bold pf-leading-[18px] pf-opacity-0 pf-transition-opacity pf-duration-300 
                              group-hover:pf-opacity-100">
                                Quick view
                              </div>
                            </div>

                            <div className="pf-flex pf-flex-col pf-flex-1 pf-gap-[8px]">

                              <div className="pf-flex pf-flex-col pf-gap-[2px]">

                                {/* SKU */}
                                <div className="pf-flex pf-gap-[5px] pf-text-[#666365] pf-text-[12px]">
                                  <span className="pf-font-bold">CODE #</span>
                                  <span>{firstSKU || ""}</span>
                                  {/* {firstSKU ? <><span className="pf-font-bold">CODE #</span>
                                  <span>{firstSKU}</span> </> : <span className="pf-invisible"> CODE #</span>} */}
                                </div>


                                {/* TITLE */}
                                <a className="pf-text-[14px] pf-font-bold pf-leading-[20px]" href={handleUrl}>
                                  {product.title}
                                </a>
                              </div>

                              {/* BUTTON */}
                              <a
                                href={`/products/${product.handle}`}
                                className="pf-mt-auto pf-h-[36px] pf-flex pf-items-center pf-justify-center pf-rounded-[3px] pf-bg-uneeda-primary pf-text-black pf-text-[14px] pf-font-bold hover:pf-bg-uneeda-hover-primary"
                              >
                                Show Product
                              </a>

                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                  <div className="pf-flex pf-items-center pf-justify-center">
                    <div className="pf-rounded-[6px] pf-border pf-border-[#D8D8D8] pf-flex pf-items-center pf-justify-center pf-border-solid pf-gap-[15px] pf-py-[1px] pf-px-[9px]">
                      {/* PREV BUTTON */}
                      <button
                        onClick={handlePrev}
                        disabled={page === 1}
                        className={`pf-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-rounded-[6px] pf-border
                          ${page === 1 ? "pf-border-[#D8D8D8] pf-opacity-50 pf-cursor-not-allowed" : "pf-border-[#D8D8D8] hover:pf-bg-gray-100"}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                          <path d="M5.65 0.65L0.65 5.65L5.65 10.65" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* PAGE NUMBERS */}
                      <div className="pf-flex pf-items-center pf-gap-[3px] ">
                        {Array.from({ length: totalPages }, (_, i) => {
                          const pageNumber = i + 1;
                          const isActive = pageNumber === page;

                          return (
                            <button
                              key={pageNumber}
                              onClick={() => setPage(pageNumber)}
                              className={`pf-min-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-rounded-[4px] pf-text-[12px] pf-leading-[18px]
                              ${isActive ? "pf-text-[#004890] pf-font-bold" : "pf-text-black hover:pf-bg-gray-100" }`}>
                              {pageNumber}
                            </button>
                          );
                        })}
                      </div>

                      {/* NEXT BUTTON */}
                      <button
                        onClick={handleNext}
                        disabled={page === totalPages}
                        className={`pf-w-[28px] pf-h-[28px] pf-flex pf-items-center pf-justify-center pf-rounded-[6px] pf-border
                        ${page === totalPages ? "pf-border-[#D8D8D8] pf-opacity-50 pf-cursor-not-allowed" : "pf-border-[#D8D8D8] hover:pf-bg-gray-100"}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                          <path d="M1.35 0.65L6.35 5.65L1.35 10.65" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                    </div>
                  </div>)}

              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default ProductListing;