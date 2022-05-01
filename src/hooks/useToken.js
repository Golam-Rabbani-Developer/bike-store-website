import axios from "axios"
import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const getToken = async () => {
            const email = user?.use?.email
            const url = `https://bikes-server-side.herokuapp.com/login`
            const { data } = await axios.post(url, { email })
            setToken(data.accessToken)
            localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
        }
        getToken()
    }, [user])
    return [token];
}

export default useToken;