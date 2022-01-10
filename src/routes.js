import AboutUs from "./pages/aboutUs/AboutUs"
//import Blog from "./pages/blog/Blog"
//import PostPage from "./pages/blog/PostPage"
import CancellationPolicies from "./pages/cancellationPolicies/CancellationPolicies"
import Contac from "./pages/cancellationPolicies/CancellationPolicies"
import CookiePolicies from "./pages/cancellationPolicies/CancellationPolicies"
import Gallery from "./pages/cancellationPolicies/CancellationPolicies"
import Home from "./pages/cancellationPolicies/CancellationPolicies"
import PrivacyPolicyPage from "./pages/cancellationPolicies/CancellationPolicies"
import Reservation from "./pages/cancellationPolicies/CancellationPolicies"
import Room from "./pages/cancellationPolicies/CancellationPolicies"
import Rooms from "./pages/cancellationPolicies/CancellationPolicies"
import TermsConditionsPage from "./pages/cancellationPolicies/CancellationPolicies"

const routes = {
    home: { name: "home", path: "/", Component: Home },
    rooms: { name: "rooms", path: "/rooms", Component: Rooms },
    about: { name: "about-us", path: "/about-us", Component: AboutUs },
    contact: { name: "contact", path: "/contact", Component: Contac },
    //blog: { name: "blog", path: "/blog", Component: Blog },
    //post: { name: "post", path: "/post/:slug", Component: PostPage },
    gallery: { name: "gallery", path: "/gallery", Component: Gallery },
    room: { name: "room", path: "/room/:slug", Component: Room },
    termsConditions: { name: "terms_conditions", path: "/terms-conditions", Component: TermsConditionsPage },
    privacyPolicy: { name: "privacy_policy", path: "/privacy-policy", Component: PrivacyPolicyPage },
    cookiesPolicy: { name: "cookies_policy", path: "/cookies-policy", Component: CookiePolicies },
    cancellationPolicies: { name: "cancellation_policies", path: "/cancellation-policies", Component: CancellationPolicies },
    reservation: { name: "reservation", path: "/reservation", Component: Reservation },
    //reservation:{ navbar: "white", path: "/reservation", Component: ProviderReservation },
    //{ navbar: "white", path: "/*", Component: NoFoundPage },
}

export default routes
