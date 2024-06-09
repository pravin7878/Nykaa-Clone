const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isErr, setisErr] = useState(false)
    const [totelpage, settotelpage] = useState(null)
    const [page, setpage] = useState(1)

    // console.log("products",products);
    // console.log('totelpage',totelpage);
    const getProduct = async () => {
        setisLoading(true)
        try {
            let res = await axios({
                method: 'get',
                url: `https://dummyjson.com/products?limit=100&skip=0`
            })
            let data = res?.data?.products
            setproducts(data)
            settotelpage(res?.data?.total)
            setisLoading(false)
            // console.log(res.data);
        } catch (error) {
            setisErr(true)
            setisLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])