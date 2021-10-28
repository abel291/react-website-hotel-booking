import apiClient from "../auth/apiClient"

const useAuth = (dispatch) => {
    const login = async (email, password, remember) => {
        const response = await apiClient
            .post("/login", {
                email,
                password,
                remember,
            })
            .then((response) => {
                dispatch({ type: "SET_USER", value: response.data.user })
            })
            

        return response
    }

    const register = async (registerData, callbackError, callbackSuccess) => {
        const response = await apiClient
            .post("/register", {
                ...registerData,
            })
            .then((response) => {
                dispatch({ type: "SET_USER", value: response.data.user })
            })
        return response
    }

    const logout = async (callbackRedirect) => {
        dispatch({ type: "SET_LOADING", value: true })
        const response = await apiClient
            .post("/logout")
            .then((response) => {
                dispatch({ type: "SET_USER", value: null })
            })
            .catch(() => {})
            .then(() => {
                dispatch({ type: "SET_LOADING", value: false })
            })
        return response
    }

    const verifyAuthenticationError = (error) => {
        if (error.response && error.response.status === 401) {
            dispatch({ type: "SET_USER", value: null })
            console.log("desautenticado")
        }
    }
    return {
        login,
        register,
        logout,
        verifyAuthenticationError,
    }
}

export default useAuth
