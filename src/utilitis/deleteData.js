import { toast } from "react-toastify"

const deleteData = (id, url, products, setProducts) => {
    const confirmation = window.confirm("Do you want to Delete your item")
    if (confirmation) {
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'appliction/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    toast("Deleted One Collection")
                }
            })

    }
}

export default deleteData;