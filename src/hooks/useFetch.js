import axios from "axios";
import {useEffect, useState, useCallback} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useFetch = url => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    const [token] = useLocalStorage('token')

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    }, [])

    useEffect(() => {
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ''
                }
            }
        }
        if (!isLoading) {
            return
        }

        axios(baseUrl + url, requestOptions)
            .then(res => {
                setIsLoading(false)
                setResponse(res.data)
            }).catch(err => {
            setIsLoading(false)
            setError(err.response.data)
        })
    }, [isLoading, options, token, url])

    return [{isLoading, response, error}, doFetch]
}

export default useFetch