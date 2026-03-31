import './App.css'
import React from 'react';
import { AppProvider } from './providers'
import ProductFinder from './pages/ProductFinder';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductListing from './pages/ProductListing';
import { baseUrl, resultPageUrl } from './utils/Constants';

function App() {

  return (
    <div className='product-finder-section'>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            {/* ── Full path routes — no basename needed ── */}
            <Route path={baseUrl} element={<ProductFinder />} />
            <Route path={resultPageUrl} element={<ProductListing />} />

            {/* ── Fallback ── */}
            <Route path="*" element={<Navigate to={baseUrl} replace />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
