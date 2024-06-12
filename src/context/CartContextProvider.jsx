import { Button, useToast } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import { AlertDialogExample } from '../helperComponent/AlertDilog'


export const cartContext = createContext()
export default function CartContextProvider({ children }) {
    const [cartData, setcartData] = useState([])
    const [quantity, setquantity] = useState(1)

    const toast = useToast()


    console.log('cartData', cartData);

    // initilising Cart Array
    let cartProduct = JSON.parse(localStorage.getItem('CartProduct')) || []

    const addToCart = (product) => {
        // setcartData([...cartData,product])
        const productExists = cartProduct.some(item => item.id === product.id);

    if(!productExists){
        let updateproduct = {...product,minimumOrderQuantity:1,bagprice:product.price}
        cartProduct.push(updateproduct)

        // set Data to local storange
        localStorage.setItem("CartProduct", JSON.stringify(cartProduct))

        console.log('cartProduct after update', cartProduct);
        setcartData(cartProduct)
    }
    else{
        hendelQuantity(product.id,"+")
    }
    }

    const deleteToCart = (id) => {
       setquantity((prev)=>prev+1)
        const updatedData = cartProduct.filter((product, ind) => {
            if (product.id !== id) {
                return product
            }
        })
        localStorage.setItem("CartProduct", JSON.stringify(updatedData))
        setcartData(updatedData)
        console.log('updatedData', updatedData);
        toast({
            status: 'info',
            position: 'top',
            title: 'Item Removed From Card',
            duration: 2000
        })
    }

    const hendelQuantity = (id,oprator) => {
        const updatedData = cartData.map((product) => {
            const {minimumOrderQuantity,stock,price} = product
            if (product.id === id) {
                
        if(oprator === "+" && minimumOrderQuantity < stock)
            {
                const quntity = minimumOrderQuantity+1;
                    const updetedPrice = quntity*price
                    console.log('updetedPrice',updetedPrice);
                setquantity((prev)=>prev+1)
             
                return {
                    ...product,
                    minimumOrderQuantity : ++product.minimumOrderQuantity,
                    bagprice:updetedPrice
                }
            }
        else if(oprator === "-" && minimumOrderQuantity > 1){
            setquantity((prev)=>prev-1)
            const quntity = minimumOrderQuantity-1;
            const updetedPrice = quntity*price
            console.log('updetedPrice',updetedPrice);
            return {
                ...product,
                minimumOrderQuantity : --product.minimumOrderQuantity,
                bagprice:updetedPrice
            }
        }
        }
            return product
        })
        
        console.log('updated data',updatedData);
        localStorage.setItem("CartProduct", JSON.stringify(updatedData))
        console.log('cartProduct after update', cartProduct);
        setcartData(updatedData)
    }


    useEffect(() => {
        setcartData(cartProduct)
        console.log(cartData);
    }, [])
    return (
        <cartContext.Provider value={{ cartData, addToCart, deleteToCart, hendelQuantity,quantity }}>
            {children}
        </cartContext.Provider>
    )
}
