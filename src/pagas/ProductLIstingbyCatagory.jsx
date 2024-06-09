
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import LodingIdicator from './LodingIdicator'


export default function ProductLIstingbyCatagory() {
    const [products, setproducts] = useState({
        skincare: [],
        fragrances: [],
        womensbags: [],
        beauty: [],
        tops: [],
        womenswatches: [],
        womensdresses: [],
        womensjewellery: [],
        womensshoes: [],

    })
    const [Url, setUrl] = useState('https://dummyjson.com/products/category')
    const [isLoading, setisLoading] = useState(false)
    const [isErr, setisErr] = useState(false)

    console.log('products', products);

    const categories = [
        { state: "skincare", name: 'skin-care' },
        { state: "fragrances", name: "fragrances" },
        { state: "beauty", name: 'beauty' },
        { state: "womenswatches", name: 'womens-watches' },
        { state: "tops", name: 'tops' },
        { state: "womensbags", name: 'womens-bags' },

        { state: "womensdresses", name: 'womens-dresses' },

        { state: "womensjewellery", name: 'womens-jewellery' },

        { state: "womensshoes", name: 'womens-shoes' },
    ];


    const getProduct = async ({ state, name }) => {
        setisLoading(true)
        try {
            let res = await axios({
                method: 'get',
                url: `${Url}/${name}`
            })
            // console.log(res.data);
            setproducts(prevProducts => ({
                ...prevProducts,
                [state]: res?.data?.products
            }));
            setisLoading(false)
        } catch (error) {
            setisErr(true)
            setisLoading(false)
            console.log(error);
        }
    }



    useEffect(() => {
        categories.forEach(catagory => {
            getProduct({ ...catagory })
        });
    }, [])


// if(isLoading){
//     return <LodingIdicator/>
// }
    
    return  <Product products={products} isLoading={isLoading}/>
}
