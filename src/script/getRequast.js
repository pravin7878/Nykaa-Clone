import axios from "axios"

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

export const hendelLinks = (e)=>{
console.log(e.target.innerText)
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
