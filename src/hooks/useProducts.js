import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(6)
    useEffect(() => {
        fetch(`http://localhost:5000/bikes?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])
    return [products, setProducts, page, setPage, size, setSize]

}
export default useProducts;