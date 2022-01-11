import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { BookmarkIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import routes from "routes"
import useSWRImmutable from "swr/immutable"
const routeNavBar = [
    { ...routes.rooms, title: "Habitaciones" },
    { ...routes.gallery, title: "Galeria" },
    { ...routes.about, title: "Nosotros" },
    { ...routes.blog, title: "Blog" },
    { ...routes.contact, title: "Contacto" },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const { data: navbar } = useSWRImmutable("navbar", () => "white")

    return (
        // <nav className="bg-orange-500 lg:bg-transparent text-white lg:text-gray-600 z-50">
        <nav
            className={
                (open ? "bg-white " : "") +
                " lg:px-10 xl:px-12 lg:py-5 mx-auto z-50 flex flex-col lg:flex-row lg:justify-between  lg:text-base font-medium lg:font-bold  w-full  tracking-wide  " +
                (navbar === "img" ? "lg:bg-transparent text-white absolute inset-x-0" : "bg-white text-gray-600 border-b border-gray-100")
            }
        >
            <div className={(open ? "text-gray-600" : "") + " px-5 py-4 text-lg flex items-center justify-between lg:hidden"}>
                <NavLink onClick={() => setOpen(false)} exact to={routes.home.path} className=" text-xl lg:text-2xl font-bold ">
                    <div className=" leading-6">
                        Hotel <br /> Cartagena
                    </div>
                </NavLink>

                <button className=" focus:outline-none  lg:hidden " onClick={() => setOpen(!open)}>
                    {open ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                </button>
            </div>

            <div className={(!open ? "hidden" : "text-gray-600") + " lg:block w-full"}>
                <div
                    className={
                        "px-5 py-3 z-20 flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-b-xl lg:rounded-none shadow-xl lg:shadow-none " +
                        (navbar === "white" && "absolute inset-x-0 lg:static bg-white lg:bg-transparent")
                    }
                >
                    <NavLink
                        onClick={() => setOpen(false)}
                        exact
                        to={routes.home.path}
                        className="text-xl lg:text-2xl font-bold hidden lg:block"
                    >
                        <div className="leading-6">
                            Hotel <br /> Cartagena
                        </div>
                    </NavLink>
                    <div className=" flex flex-col space-y-1 lg:space-y-0 lg:flex-row flex-grow justify-center lg:items-center lg:space-x-4 ">
                        {routeNavBar.map((route, index) => (
                            <NavLink
                                key={index}
                                activeClassName="bg-gray-200 lg:bg-transparent lg:border-b-2 border-gray-600"
                                onClick={() => setOpen(false)}
                                to={route.path}
                                className="px-3 lg:px-0 py-2 lg:py-1 rounded-md lg:rounded-none"
                            >
                                {route.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="mt-1 lg:mt-0 ">
                        <NavLink
                            onClick={() => setOpen(false)}
                            activeClassName="bg-gray-200 "
                            to="/reservation"
                            className="px-3  py-2 lg:px-4 lg:py-2 lg:text-sm rounded-md lg:rounded-full lg:bg-orange-500 lg:text-white inline-flex space-x-1 items-center font-bold focus:outline-none focus:shadow-outline"
                        >
                            <BookmarkIcon className="h-4 w-4"></BookmarkIcon>
                            <span>Reservaciónes</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
