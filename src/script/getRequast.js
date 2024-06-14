import axios from "axios"
import { useState } from "react"

export const getData = async (Url)=>{
try {
   const res =await axios({
    method:'get',
    url:Url
   }) 
 return res.data
} catch (error) {
    console.log(error)
}
}

export const hendelLinks =async (e)=>{
  // const [quary, setquary] = useState(e.target.innerText)
// const [Product, setProduct] = useState([])
const quary = e.target.innerText
console.log(quary);
try {
  let res = await axios({
    method:'get',
    url: `https://dummyjson.com/products/search?q=${"phone"}`
  })

// setProduct(res.data)
console.log(res.data);
} catch (error) {
  console.log(error);
}

}


// const getProductTitle = async (catagory) => {
//   let res = await getData(`https://dummyjson.com/products/category/${catagory}`)

//   let products = res?.products
//   const titles = products.map((product) => product.title)
//   // setproducts(res?.products)
//   console.log(titles);
// setcontaint(titles)
// }

// useEffect(() => {
//   getCategory()
// }, [])

// useEffect(() => {
//   catagorys?.forEach((catagory, ind) => {
//       if (ind < 11) {
//           getProductTitle(catagory)
//           // console.log(' from useEffact',catagory);
          
//       }
//   })
// }, [catagorys])
