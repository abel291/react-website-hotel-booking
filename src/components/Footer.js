import { Link } from "react-router-dom"
import routes from "../routes"

export default function Footer() {
    return (
        <footer className=" border-t border-gray-100  ">
            <div className="container py-content mx-auto max-w-screen-xl">
                <div className=" flex flex-col  justify-between space-y-6 md:space-y-8">
                    <div className="flex items-center justify-center space-x-5">
                        <img src="/img/facebook-icon.png" alt="facebook" />
                        <img src="/img/instragam-icon.png" alt="instragam" />
                        <img src="/img/twt-icon.png" alt="tw" />
                        <img src="/img/ws-icon.png" alt="ws" />
                    </div>

                    <div className="space-y-1 flex flex-col  md:flex-row md:space-x-6 md:space-y-0 md:justify-center text-sm lg:text-base">
                        <Link to={routes.termsConditions.path}>Termino y condiciones</Link>
                        <Link to={routes.privacyPolicy.path}>Politicas de Privacidad</Link>
                        <Link to={routes.cookiesPolicy.path}>Política de Cookies</Link>
                        <Link to={routes.cancellationPolicies.path}>Politicas de cancelacion</Link>
                        {/* <Link to="/">Cancelacion de reserva</Link> */}
                    </div>

                    <div className="text-center">
                        <span className="font-bold">© 2021 Hotel Cartagena</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
