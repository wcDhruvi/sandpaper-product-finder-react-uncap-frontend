import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import ProductFinderProgress from "./sections/ProductFinderProgress";
import FilterSideBar from "./sections/FilterSideBar";
import FilterBar from "./sections/FilterBar";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

import { useAppContext } from "../hooks/useAppContext";
import { apiService, PFShopDomain } from "../utils/Constent";
import { defaultSelectedFilter } from "../utils/Common";
import Pagination from "../components/ui/Pagination";
import NotFoundLarge from "../utils/icons/NotFoundLarge";

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
  const [filteredProductCount, setFilteredProductCount] = useState(0);
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
        setFilteredProductCount(res?.data?.pagination?.filtered_total || 0);
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


  /* ---------------- UI ---------------- */

  const isHaveProduct = products?.length > 0;

  useEffect(() => {
    let timer;

    if ((filtersLoading || loading) && !isHaveProduct) {
      setShowInlitalLoader(true);
    } else {
      timer = setTimeout(() => {
        setShowInlitalLoader(false);
      }, 10);
    }

    return () => clearTimeout(timer);
  }, [filtersLoading, loading]);

  const NotFoundContainer = () => <div className="pf-flex pf-justify-center pf-flex-col pf-items-center pf-gap-[30px] pf-p-[10vh]">
    <NotFoundLarge />
    <span className="pf-text-xl">No products found</span>
  </div>

  return (
    <>
      <ProductFinderProgress />
      <div className="pf-product-result pf-relative pf-min-h-[250px]">
        {showInlitalLoader ? (
          <Loading/>
        ) : shopifyProductIds?.length === 0 ? (
          <NotFoundContainer />
        ) : (
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
                      filteredProductCount={filteredProductCount}
                      loading={isHaveProduct && loading}
                    />

                    <div className="pf-w-full pf-relative">
                      {/* Sub-loading overlay for subsequent filter updates */}
                      {loading && isHaveProduct && (
                        <Loading className="pf-items-start pf-product-loading" />
                      )}

                      {/* Product Grid or No Products Found */}
                      {!isHaveProduct && !loading ? (
                        <NotFoundContainer />
                      ) : (
                        <ul className="pf-w-full pf-grid pf-grid-cols-2 md:pf-grid-cols-3 lg:pf-grid-cols-4 pf-gap-[10px] md:pf-gap-[15px] lg:pf-gap-[20px] pf-list-none pf-ml-0">
                          {products?.map((product) => (
                            <ProductCard key={product.shopify_product_id} product={product} />
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Pagination */}
                  {!loading && totalPages > 1 && (
                    <Pagination
                      page={page}
                      totalPages={totalPages}
                      onPageChange={(newPage) => {
                        setPage(newPage);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductListing;