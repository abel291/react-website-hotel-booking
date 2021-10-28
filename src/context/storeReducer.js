const initialStore = {
    user: null,
    isLogged: false,
    isLoading: true,
    blog: false,
    rooms: [],
    navbar: "img", // img - white
    pages: null,
    galleries: null,
    reservation: {},
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            let user = action.value
            let isLogged = user ? true : false
            return { ...state, user: user, isLogged: isLogged }

        case "UPDATE_DATA":
            return { ...state, [action.key]: action.value }
        case "CHANGE_NAVBAR":
            return { ...state, navbar: action.value }
        case "SET_ROOMS":
            return { ...state, rooms: action.value }
        case "SET_PAGES":
            return { ...state, pages: action.value }
        case "SET_LOADING":
            return { ...state, isLoading: action.value }
        case "SET_GALLERIES":
            return { ...state, galleries: action.value }
        case "SET_BLOG":
            return { ...state, blog: action.value }
        default:
            throw new Error()
    }
}

export { initialStore }
export default storeReducer
