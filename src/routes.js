import AboutUs from "./pages/aboutUs/AboutUs"
import Blog from "./pages/blog/Blog"
import PostPage from "./pages/blog/PostPage"
import CancellationPoliciesPage from "./pages/CancellationPoliciesPage"
import Contac from "./pages/contact/Contact"
import CookiesPolicyPage from "./pages/CookiesPolicyPage"
import Gallery from "./pages/gallery/Gallery"
import Home from "./pages/home/Home"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import Room from "./pages/room/Room"
import Rooms from "./pages/rooms/Rooms"
import TermsConditionsPage from "./pages/TermsConditionsPage"

const routes = {
    home: { name: "home", path: "/", Component: Home },
    rooms: { name: "rooms", path: "/rooms", Component: Rooms },
    about: { name: "about-us", path: "/about-us", Component: AboutUs },
    contact: { name: "contact", path: "/contact", Component: Contac },
    blog: { name: "blog", path: "/blog", Component: Blog },
    post: { name: "post", path: "/post/:slug", Component: PostPage },
    gallery: { name: "gallery", path: "/gallery", Component: Gallery },
    room: { name: "room", path: "/room/:slug", Component: Room },
    termsConditions: { name: "terms_conditions", path: "/terms-conditions", Component: TermsConditionsPage },
    privacyPolicy: { name: "privacy_policy", path: "/privacy-policy", Component: PrivacyPolicyPage },
    cookiesPolicy: { name: "cookies_policy", path: "/cookies-policy", Component: CookiesPolicyPage },
    cancellationPolicies: { name: "cancellation_policies", path: "/cancellation-policies", Component: CancellationPoliciesPage },
    //{ navbar: "white", path: "/reservation", Component: ProviderReservation },
    //{ navbar: "white", path: "/*", Component: NoFoundPage },
}

export default routes
