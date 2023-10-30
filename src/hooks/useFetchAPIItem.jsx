import { useState, useEffect } from "react";
import { fetchAPIItem, fetchAPIImg } from "../services/fetchAPIItem";

export const useFetchAPIItem = (itemUrl, imgUrl) => {
    const [ item, setItem ] = useState({
       data: [],
       loading: true,
       error: false,
    })

    const [img, setImg] = useState({
        src: "", 
        loading: true, 
        error: false,
    })

    const setDataItem = (data) =>
        setItem({
            data,
            loading: false, 
            error: false,
        });
    
        const setErrorDataItem = (error) =>
        setItem({
          data: [],
          loading: false,
          error: error.message,
        });

        const setImgItem = (src) =>
        setImg({
          src,
          loading: false,
          error: false,
        });
      
    
        const setErrorImgItem = (srcNoImage) =>
        setImg({
          src: srcNoImage,
          loading: false,
          error: true,
        });
      

    useEffect(() => {
        const controller = new AbortController();
        fetchAPIItem(itemUrl, setDataItem, setErrorDataItem, controller.signal);
        return () => controller.abort();
      }, [itemUrl]);
    
        useEffect(() => {
        const controller = new AbortController();
        fetchAPIImg(imgUrl, setImgItem, setErrorImgItem, controller.signal);
        return () => controller.abort();
      }, [imgUrl]);
    
      return {
        dataItem: item.data,
        loadingItem: item.loading,
        errorItem: item.error,
        imgItem: img.src,
        loadingImg: img.loading,
        errorImg: img.error,
        
      };
}