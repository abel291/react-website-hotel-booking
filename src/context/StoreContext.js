import { useReducer } from "react"
import { createContext, useContext, useEffect } from "react"

import Loading from "../components/Loading.js"

import apiRooms from "../dataJson/rooms"
import apiPages from "../dataJson/pages"

import storeReducer, { initialStore } from "./storeReducer.js"
//import apiClient from "../auth/apiClient.js"
import useAuth from "../hooks/useAuth"
const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialStore)

    const auth = useAuth(dispatch)

    const fakeApi = async (fc) => {
        //dispatch({ type: "SET_LOADING", value: true })
        return new Promise(function (resolve) {
            setTimeout(async () => {
                resolve(fc())
                //dispatch({ type: "SET_LOADING", value: false })
            }, 2000)
        })
    }
    const currencyFormat = Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const formatNumber = (n) => {
        n = n ? n : 0 // number NaN = 0
        return "$ " + currencyFormat.format(parseFloat(n))
    }

    useEffect(() => {
        dispatch({ type: "SET_LOADING", value: true })
        fakeApi(() => {
            dispatch({ type: "SET_ROOMS", value: apiRooms })
            dispatch({ type: "SET_PAGES", value: apiPages })
            dispatch({ type: "SET_LOADING", value: false })
        })
    }, [dispatch])
    // useEffect(() => {
    //     const init = async () => {
    //         dispatch({ type: "SET_LOADING", value: true })
    //         await apiClient.get("/sanctum/csrf-cookie")
    //         await apiClient
    //             .get("api/init")
    //             .then((response) => {
    //                 dispatch({ type: "SET_PAGES", value: response.data.pages })
    //                 dispatch({ type: "SET_ROOMS", value: response.data.rooms })
    //                 if (response.data.user) {
    //                     dispatch({ type: "SET_USER", value: response.data.user })
    //                 }
    //             })
    //             .catch((error) => {
    //                 //verifyAuthenticationError(error)
    //             })
    //             .then(() => {
    //                 dispatch({ type: "SET_LOADING", value: false })
    //             })
    //     }
    //     init()
    // }, [])

    const store = {
        dispatch,
        fakeApi,
        formatNumber,

        //auth
        auth, //login - register - logout - verifyAuthenticationError
    }

    return (
        <StoreContext.Provider value={{ ...state, ...store }}>
            <div className="relative">
                <Loading isLoading={state.isLoading} />
                {state.pages && children}
            </div>
        </StoreContext.Provider>
    )
}

export const useStore = () => {
    return useContext(StoreContext)
}
export default StoreProvider
