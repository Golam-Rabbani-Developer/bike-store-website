import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebaseinit";

const useInventory = (user) => {
    const navigate = useNavigate()
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        const getInventory = async () => {
            const email = user?.email;
            const url = `https://plum-comfortable-meerkat.cyclic.app/addedCollection?email=${email}`
            try {
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setInventorys(data))
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate("/home")
                }
                console.log(error)
            }
        }
        getInventory()
    }, [user])
    return [inventorys, setInventorys]
}

export default useInventory;