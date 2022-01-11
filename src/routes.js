import AboutUs from "pages/aboutUs/AboutUs"
import Blog from "pages/blog/Blog"
import PostPage from "pages/blog/PostPage"
import CancellationPolicies from "pages/cancellationPolicies/CancellationPolicies"
import Contac from "pages/contact/Contact"
import CookiePolicies from "pages/cookiePolicies/CookiePolicies"
import Gallery from "pages/gallery/Gallery"
import Home from "pages/home/Home"
import PrivacyPolicyPage from "pages/privacyPolicies/PrivacyPolicies"
import Reservation from "pages/reservation/Reservation"
import Room from "pages/room/Room"
import Rooms from "pages/rooms/Rooms"
import TermsConditionsPage from "pages/termsConditions/TermsConditions"

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
    cookiesPolicy: { name: "cookies_policy", path: "/cookies-policy", Component: CookiePolicies },
    cancellationPolicies: { name: "cancellation_policies", path: "/cancellation-policies", Component: CancellationPolicies },
    reservation: { name: "reservation", path: "/reservation", Component: Reservation },
    //reservation:{ navbar: "white", path: "/reservation", Component: ProviderReservation },
    //{ navbar: "white", path: "/*", Component: NoFoundPage },
}

export default routes
