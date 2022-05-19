import { useEffect, useState } from 'react'
import { BASE_URL } from '../Constants/Urls'
import axios from 'axios'

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${BASE_URL}${url}`)
            .then((response) => {
                setLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [url])

    return [data, setData, loading]
}
export default useRequestData
