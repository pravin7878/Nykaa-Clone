import { Button, useToast } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'


export const cartContext = createContext()
export default function CartContextProvider({ children }) {
    const [cartData, setcartData] = useState([])
    const toast = useToast()


    console.log('cartData', cartData);

    // initilising Cart Array
    let cartProduct = JSON.parse(localStorage.getItem('CartProduct')) || []
    console.log('cartProduct initiale', cartProduct);

    const addToCart = (product) => {
        // setcartData([...cartData,product])
        cartProduct.push(product)

        // set Data to local storange
        localStorage.setItem("CartProduct", JSON.stringify(cartProduct))

        console.log('cartProduct after update', cartProduct);
        setcartData(cartProduct)


    }

    const deleteToCart = (id) => {
        console.log(id);
        const updatedData = cartProduct.map((product, ind) => {
            if (product.id !== id) {
                return product
            }
        })
        localStorage.setItem("CartProduct", JSON.stringify(updatedData))

        console.log('updatedData', updatedData);
        toast({
            status:'info',
            position:'top',
            title:'Item Removed From Card',
            duration:2000
        })
    }

    useEffect(() => {
        setcartData(cartProduct)
        console.log(cartData);
    }, [])
    return (
        <cartContext.Provider value={{ cartData, addToCart, deleteToCart }}>
            {children}
        </cartContext.Provider>
    )
}
