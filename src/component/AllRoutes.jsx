import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pagas/landinPagas/HomePage'
import ProductDetail from '../pagas/ProductDetail'
import {Cart} from '../pagas/Cart'
import OrderSuccessPage from '../pagas/OrderSuccessPage'
import { Login } from '../pagas/Login'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/productview/:product_id' element={<ProductDetail/>}/>

    <Route path='/cart' element={<Cart/>}/>

    <Route path='/order' element={<OrderSuccessPage/>
      }/>

   </Routes>


  )
}
