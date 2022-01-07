import { useEffect, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import TextLoadingSpinner from "../components/TextLoadingSpinner"
//import Input from "../components/Input"
import NotificationError from "../components/NotificationError"
import ValidaterErrors from "../components/ValidaterErrors"
import { useStore } from "../context/StoreContext"

const Login = () => {
    const { isLogged, auth } = useStore()
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const location = history.location
    const { from } = location.state || { from: { pathname: "/" } }

    useEffect(() => {
        console.log(from.pathname)
        if (isLogged === false && from.pathname === "/reservation") {
            setErrors("Para hacer una reservacion debes iniciar session primero")
        }
        if (isLogged) {
            history.replace(from)
        }
    }, [isLogged, from, history])

    const [email, setEmail] = useState("ad@ad.com")
    const [password, setPassword] = useState("123123")
    const [remember, setRemember] = useState(false)

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        setErrors([])
        setIsLoading(true)
        await auth
            .login(email, password, remember)
            .catch((error) => {
                let errorsMsg = ValidaterErrors(error)
                setErrors(errorsMsg)
            })
            .then(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold">Iniciar sesión en tu cuenta</h2>
                    <p className="mt-2 text-center">
                        <span>O tambien puedes </span>
                        <NavLink to="/register" className="font-bold text-orange-600 hover:text-orange-500">
                            Registrarte
                        </NavLink>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmitLogin}>
                    <NotificationError errors={errors} setErrors={setErrors} />
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="form-input-label">
                                Email
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal"
                                name="email"
                                autoComplete="email"
                                require="true"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-input-label">
                                Contraseña
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal"
                                name="password"
                                autoComplete="current-password"
                                require="true"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm">
                                Recordarme
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="/" className="font-medium text-orange-600 hover:text-orange-500">
                                Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full font-medium text-sm flex justify-center py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            <TextLoadingSpinner isLoading={isLoading} text="Iniciar sesión" textLoading={"Iniciando..."} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
