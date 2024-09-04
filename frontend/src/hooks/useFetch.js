import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res.ok){
                    setError('failed to fetch');
                    alert('Failed to fetch');
                }
                const result = await res.json()
                setData(result.data);
                setLoading(false);
                
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData();
    },[url])
    return {
        data,
        loading,
        error
    }
}
export default useFetch;