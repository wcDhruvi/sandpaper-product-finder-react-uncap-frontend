import React from "react";
import { Link } from "react-router-dom";

/**
 * ProductCard Component
 * Displays individual product details in a grid format with image, title, SKU, and actions.
 */
const ProductCard = ({ product }) => {
    // Extract primary image, SKU, and target URL
    const firstImage = product.images_json?.find((img) => img?.src)?.src;
    const firstAvailableSkuVariant = product.variants_json?.find((variant) => variant?.sku);
    const firstSKU = firstAvailableSkuVariant?.sku || null;
    const handleUrl = `/products/${product.handle}`;

    return (
        <li key={product.shopify_product_id} className="pf-h-full pf-group">
            <div className="pf-flex pf-flex-col pf-h-full pf-bg-white pf-p-[15px] pf-border pf-border-[#eee] pf-gap-[15px]">
                {/* IMAGE */}
                <div className="pf-relative">
                    <a className="pf-block pf-relative pf-w-full pf-pt-[100%] pf-overflow-hidden" href={handleUrl}>
                        {firstImage ? (
                            <img
                                src={firstImage}
                                alt={product.title}
                                className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-object-contain"
                            />
                        ) : (
                            <div className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-flex pf-items-center pf-justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5" className="pf-w-[60%] pf-h-[60%] pf-fill-[#a3a1a1]">
                                    <path d="M324.5 212.7H203c-1.6 0-2.8 1.3-2.8 2.8V308c0 1.6 1.3 2.8 2.8 2.8h121.6c1.6 0 2.8-1.3 2.8-2.8v-92.5c0-1.6-1.3-2.8-2.9-2.8zm1.1 95.3c0 .6-.5 1.1-1.1 1.1H203c-.6 0-1.1-.5-1.1-1.1v-92.5c0-.6.5-1.1 1.1-1.1h121.6c.6 0 1.1-.5 1.1-1.1V308z"></path>
                                    <path d="M210.4 299.5H240v.1s.1 0 .2-.1h75.2v-76.2h-105v76.2zm1.8-7.2l20-20c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l1.5 1.5 16.8 16.8c-12.9 3.3-20.7 6.3-22.8 7.2h-27.7v-5.5zm101.5-10.1c-20.1 1.7-36.7 4.8-49.1 7.9l-16.9-16.9 26.3-26.3c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l27.5 27.5v7.8zm-68.9 15.5c9.7-3.5 33.9-10.9 68.9-13.8v13.8h-68.9zm68.9-72.7v46.8l-26.2-26.2c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-26.3 26.3-.9-.9c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-18.8 18.8V225h101.4z"></path>
                                    <path d="M232.8 254c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.7 8.3 8.3 8.3zm0-14.9c3.6 0 6.6 2.9 6.6 6.6s-2.9 6.6-6.6 6.6-6.6-2.9-6.6-6.6 3-6.6 6.6-6.6z"></path>
                                </svg>
                            </div>
                        )}
                    </a>
                    <div className="pf-absolute pf-bottom-[10px] md:pf-bottom-[5px] pf-left-[10px] md:pf-left-auto md:pf-right-0 pf-cursor-pointer pf-flex pf-justify-center pf-items-center pf-gap-[5px] pf-self-stretch pf-rounded-[3px] pf-bg-white pf-shadow-[0_4px_6px_0_rgba(0,0,0,0.08)] pf-py-[6px] pf-px-[12px] pf-text-black pf-text-center pf-font-sans pf-text-[12px] pf-font-bold pf-leading-[18px] pf-opacity-0 pf-transition-opacity pf-duration-300 group-hover:pf-opacity-100">
                        Quick view
                    </div>
                </div>

                <div className="pf-flex pf-flex-col pf-flex-1 pf-gap-[8px]">
                    <div className="pf-flex pf-flex-col pf-gap-[2px]">
                        {/* SKU */}
                        <div className="pf-flex pf-gap-[5px] pf-text-[#666365] pf-text-[12px] pf-leading-[16px] md:pf-leading-[18px]">
                            <span className="pf-font-bold">CODE #</span>
                            <span>{firstSKU || ""}</span>
                        </div>

                        {/* TITLE */}
                        <a className="pf-text-[12px] pf-leading-[16px] md:pf-text-[14px] md:pf-leading-[20px] pf-font-bold" href={handleUrl}>
                            {product.title}
                        </a>
                    </div>

                    {/* BUTTON */}
                    <a
                        href={`/products/${product.handle}`}
                        className="pf-mt-auto pf-h-[36px] pf-flex pf-items-center pf-justify-center pf-rounded-[3px] pf-bg-uneeda-primary pf-text-black pf-text-[12px] pf-leading-[18px] md:pf-text-[14px] md:pf-leading-[20px] pf-font-bold hover:pf-bg-uneeda-hover-primary"
                    >
                        Show Product
                    </a>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;
