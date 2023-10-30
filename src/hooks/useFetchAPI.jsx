import { useEffect, useState } from "react";
import { fetchAPI } from "../services/fetchAPI";


export  const useFetchAPI = (url, page) => {
    const [starships, setStarships] = useState({
        data: [],
        loading: true,
        error: false,
    });

    const setData = (data) => 
        setStarships({
            data, 
            loading: false,
            error: false,
        });
    

    const setError = (message) => 
        setStarships({
            data: [],
            loading: false,
            error: message,
        });
    
        useEffect(() => {
            const controller = new AbortController();
            fetchAPI(url, page, setData, setError, controller.signal);
            return () => controller.abort();
        }, [url, page]);

        return{
            data: starships.data.results,
            next: starships.data.next,
            loading: starships.loading,
            error: starships.error,
        };


}