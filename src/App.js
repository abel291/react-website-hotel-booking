import { Route, Switch } from "react-router"
//import Login from "./auth/Login"
import PrivateRoute from "./auth/PrivateRoute"
import PublicRoute from "./auth/PublicRoute"
//import Register from "./auth/Register"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { ProviderReservation } from "./context/ReservationContext"
import AboutUsPage from "./pages/AboutUs/AboutUsPage"
import BlogPage from "./pages/Blog/BlogPage"
import PostPage from "./pages/Blog/PostPage"
import CancellationPoliciesPage from "./pages/CancellationPoliciesPage"
import ContactPage from "./pages/Contact/ContactPage"
import CookiesPolicyPage from "./pages/CookiesPolicyPage"
import GalleryPage from "./pages/Gallery/GalleryPage"
import HomePage from "./pages/HomePage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import RoomSelectPage from "./pages/RoomSelect/RoomSelectPage"
import RoomsPage from "./pages/RoomsPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"

const routes = [
    { header: "img", path: "/", name: "Home", Component: HomePage },
    { header: "white", path: "/rooms", Component: RoomsPage },
    { header: "white", path: "/about-us", Component: AboutUsPage },
    { header: "white", path: "/contact-us", Component: ContactPage },
    { header: "white", path: "/blog", Component: BlogPage },
    { header: "white", path: "/post/:slug", Component: PostPage },
    { header: "white", path: "/gallery", Component: GalleryPage },

    //{ header: "white", path: "/login", Component: Login, routeType: "public" },
    //{ header: "white", path: "/register", Component: Register, routeType: "public" },

    { header: "img", path: "/room/:slug", Component: RoomSelectPage },
    { header: "white", path: "/terms_conditions", Component: TermsConditionsPage },
    { header: "white", path: "/privacy_policy", Component: PrivacyPolicyPage },
    { header: "white", path: "/cancellation_policies", Component: CancellationPoliciesPage },
    { header: "white", path: "/cookies_policy", Component: CookiesPolicyPage },
    { header: "white", path: "/reservation", Component: ProviderReservation },
    //{ header: "white", path: "/*", Component: NoFoundPage },
]
const App = () => {
    const componetTypeRoute = (routeType, path, Component) => {
        switch (routeType) {
            case "private":
                return <PrivateRoute key={path} path={path} component={Component} />

            case "public":
                return <PublicRoute key={path} path={path} component={Component} />

            default:
                return <Route key={path} exact path={path} component={Component} />
        }
    }
    return (
        <>
            <Header routes={routes} />
            <Switch>
            {routes.map(({ path, Component, routeType }) => componetTypeRoute(routeType, path, Component))}
            </Switch>
            <Footer />
        </>
    )
}

export default App
