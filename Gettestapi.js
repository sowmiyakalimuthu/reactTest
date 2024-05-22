import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getApiError, getApiResponse } from './Tes100Reducer';

function Gettestapi() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const products= async ()=> {
            try {
                let {data} = await axios.get ("https://fakestoreapi.com/products")
                console.log(data)
                dispatch(getApiResponse(data))
            } catch (err) {
                dispatch(getApiError(err))
                console.log(err)
            }
        }
        products();
    }, [dispatch])
  return (
    <div>

    </div>
  )
}

export default Gettestapi