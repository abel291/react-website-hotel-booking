import { Route, Redirect, useLocation } from "react-router-dom"

import { useStore } from "../context/StoreContext"
//import { useEffect, useState } from "react"

const PrivateRoute = (props) => {
    const { isLogged } = useStore()
    const location = useLocation()
    return isLogged ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/login",
                state: { from: location },
            }}
        />
    )
}
export default PrivateRoute
