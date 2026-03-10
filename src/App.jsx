import './App.css'
import React from 'react';
import { AppProvider } from './providers'
import ProductFinder from './pages/ProductFinder';

function App({ PFShopId, PFShopDomain }) {

  console.log("call")
  return (
    <>
      <AppProvider>
        <ProductFinder />
      </AppProvider>
    </>
  )
}

export default App
