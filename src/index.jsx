import React from "react"
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

document.addEventListener("DOMContentLoaded", async () => {
  const PFShopId = window.PFStoreDetails.shopId;
  const PFShopDomain = window.PFStoreDetails.shopDomain;
  try {

    document.querySelectorAll(".productFinderFilter").forEach((thisSection) => {
      const loadSection = createRoot(thisSection);
      loadSection.render(
        <App PFShopId={PFShopId} PFShopDomain={PFShopDomain} />
      )
    })
  } catch (error) {
    console.log("API error:", error);
  }
});
