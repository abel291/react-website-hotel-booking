import { Link } from "react-router-dom"

import BannerTitle from "components/BannerTitle"
import Head from "components/Head"
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"
import usePage from "hooks/usePage"
import FormReservation from "pages/rooms/FormReservation"

const Rooms = () => {
    const { data,error } = usePage("page/rooms")
    

    if (error) return <NotificationError errors={formatErrors(error)} />
    if (!data) return <LoadingPage />
    

    return (
        <>
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <FormReservation />
            
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />

            <div className="container mx-auto pb-content ">
                <div className="grid grid-cols-6 gap-5">
                    {data.rooms.map((room, index) => (
                        <div
                            key={index}
                            className="col-span-6 md:col-span-3 lg:col-span-2 shadow hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden "
                        >
                            <Link to={"room/" + room.slug}>
                                <div className="relative overflow-hidden ">
                                    <img
                                        src={"/storage/rooms/thumbnail/" + room.thumbnail}
                                        className="object-cover w-full h-64 transition duration-500 transform hover:scale-110 filter brightness-75"
                                        alt={room.name}
                                    />
                                    <div
                                        className="text-white leading-tight space-y-1 py-4 px-4 absolute bottom-0 left-0"
                                        alt={room.name + "-img"}
                                    >
                                        <h3 className=" text-xl font-title capitalize ">{room.name}</h3>
                                        <p>
                                            <span className="text-2xl font-medium">${room.price}.00</span>
                                            <span className="text-base font-light">/ noche</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap py-6 px-4 text-sm border-gray-200 md:border-none border space-x-4 overflow-hidden">
                                    <div className="inline-flex items-center space-x-1 font-medium">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span>{room.beds} Camas</span>
                                    </div>
                                    <div className="inline-flex items-center space-x-1 font-medium">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>

                                        <span>{room.adults} Adultos</span>
                                    </div>
                                    <div className="inline-flex items-center space-x-1 font-medium">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>

                                        <span>{room.adults} Niños</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Rooms
