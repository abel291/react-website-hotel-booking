import { Redirect, Route } from "react-router-dom"

import { useStore } from "../context/StoreContext"


export default function PublicRoute(props) {
    const { isLogged } = useStore()   

    return isLogged ? <Redirect to="/reservation" /> : <Route {...props} />
}
