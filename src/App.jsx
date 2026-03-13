import './App.css'
import React from 'react';
import { AppProvider } from './providers'
import ProductFinder from './pages/ProductFinder';
import { BrowserRouter } from "react-router-dom";

function App({ PFShopId, PFShopDomain }) {

  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <ProductFinder />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
