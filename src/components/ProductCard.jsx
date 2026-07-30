import React from "react";
import { Link } from "react-router-dom";

/**
 * ProductCard Component
 * Displays individual product details in a grid format with image, title, SKU, and actions.
 */
const ProductCard = ({ product }) => {
    // Helper function to safely parse JSON
    const parseJsonSafely = (data) => {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch (e) {
                return [];
            }
        }
        return Array.isArray(data) ? data : [];
    };

    const images = parseJsonSafely(product.images_json);
    const variants = parseJsonSafely(product.variants_json);

    // Check if product is sold out
    const isSoldOut = (() => {
      
        if (!Array.isArray(variants) || variants.length === 0) {
            return false;
        }

        return variants.every((v) => {
            if (!v) return true;

            const availableForSale = v.availableForSale === true || v.availableForSale === 'true';
            const qty = typeof v.sellableOnlineQuantity === 'number'
                ? v.sellableOnlineQuantity
                : Number(v.sellableOnlineQuantity || v.inventory_quantity || 0);
            const policy = v.inventoryPolicy;

            if (typeof v.availableForSale !== 'undefined') {
                if (availableForSale) return false;
                if (policy === 'CONTINUE') return false;
                return true;
            }

            if (policy === 'CONTINUE') return false;
            return qty <= 0;
        });
    })();

    // Extract primary image, SKU, and target URL
    const firstImage = images.find((img) => img?.src)?.src;
    const firstAvailableSkuVariant = variants.find((variant) => variant?.sku);
    const firstSKU = firstAvailableSkuVariant?.sku || null;
    const handleUrl = `/products/${product.handle}`;

    const notFoundImage = 'https://cdn.shopify.com/s/files/1/0662/5424/1948/files/uneeda_colored_-_no_image.png?v=1784729803';

    return (
        <li key={product.shopify_product_id} className="pf-h-full pf-group">
            <div className="pf-flex pf-flex-col pf-h-full pf-bg-white pf-p-[15px] pf-border pf-border-[#eee] pf-gap-[15px]">
                {/* IMAGE */}
                <div className="pf-relative">
                    {isSoldOut && (
                        <span className="pf-product-card--badges pf-top pf-left">
                            <span className="pf-badge pf-out-of-stock">Sold out</span>
                        </span>
                    )}
                    <a className="pf-block pf-relative pf-w-full pf-pt-[100%] pf-overflow-hidden" href={handleUrl}>
                        {firstImage ? (
                            <img
                                src={firstImage}
                                alt={product.title}
                                className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-object-contain"
                            />
                        ) : (
                            <img
                                src={notFoundImage}
                                alt={`${product.title} - Image Not Available`}
                                className="pf-absolute pf-top-0 pf-left-0 pf-w-full pf-h-full pf-object-contain"
                            />
                        )}
                    </a>
                    {/* <div className="pf-absolute pf-bottom-[10px] md:pf-bottom-[5px] pf-left-[10px] md:pf-left-auto md:pf-right-0 pf-cursor-pointer pf-flex pf-justify-center pf-items-center pf-gap-[5px] pf-self-stretch pf-rounded-[3px] pf-bg-white pf-shadow-[0_4px_6px_0_rgba(0,0,0,0.08)] pf-py-[6px] pf-px-[12px] pf-text-black pf-text-center pf-font-sans pf-text-[12px] pf-font-bold pf-leading-[18px] pf-opacity-0 pf-transition-opacity pf-duration-300 group-hover:pf-opacity-100">
                        Quick view
                    </div> */}
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
