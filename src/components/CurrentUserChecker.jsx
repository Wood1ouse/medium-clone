import {useContext, useEffect} from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import {CurrentUserContext} from "../contexts/currentUser";


const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user')
    const [, setCurrentUserState] = useContext(CurrentUserContext)
    const [token] = useLocalStorage('token')
    useEffect(() => {
        doFetch()
        if (!token) {
            setCurrentUserState(state => ({
                ...state,
                isLoggedIn: false,
            }))
            return
        }


    }, [token, setCurrentUserState, doFetch])

    useEffect(() => {

        if (!response) {
            return
        }
        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: false,
            currentUser: response.user
        }))

    }, [response, setCurrentUserState])
    return children
}

export default CurrentUserChecker