import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pagas/landinPagas/HomePage'
import ProductDetail from '../pagas/ProductDetail'
import {Cart} from '../pagas/Cart'

export default function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/productview/:product_id' element={<ProductDetail/>}/>

    <Route path='/cart' element={<Cart/>}/>
   </Routes>
  )
}
