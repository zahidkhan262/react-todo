import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = ({ url }) => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
    const fetchAPI = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(true)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, []);

    return {
        data,
        error,
        loading,
        fetchAPI,
        setError
    }
}

