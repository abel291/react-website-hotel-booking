import { Link,useHistory } from "react-router-dom"

import { useStore } from "../context/StoreContext"
import BannerTitle from "../components/BannerTitle"

const RoomsPage = () => {
    const { pages,rooms} = useStore()
    const page = pages.rooms
    const history=useHistory()

    const hanldeSumbit=(e)=>{
        e.preventDefault()
        history.push('/reservation');
    }
    
    return (
        <>
            <div className="border-b border-gray-100">
                <div className="container mx-auto max-w-screen-xl">
                    <form action="" onSubmit={hanldeSumbit} className="py-4  flex space-y-3 xl:space-y-0 flex-wrap ">
                        <div className="w-full xl:w-5/12 xl:pr-4 ">
                            <div className="flex flex-wrap  border border-gray-300 rounded-lg md:divide-x h-full">
                                <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center  ">
                                    <div className="flex items-center">
                                        <span className="block md:hidden w-20 text-sm">Entrada:</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 hidden md:inline "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        id="start_date"
                                        className=" text-sm w-32 md:w-full focus:outline-none border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Fecha Entrada"
                                    />
                                </div>

                                <div className="w-full md:w-1/2  py-0 px-4 inline-flex space-x-2 items-center  ">
                                    <div className="flex items-center">
                                        <span className="block md:hidden w-20 font-bold text-sm ">Salida:</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 hidden md:inline "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        id="end_date"
                                        className="text-sm w-32 md:w-full focus:outline-none border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent"
                                        type="text"
                                        placeholder="Fecha Salida"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 xl:w-4/12 md:pr-4">
                            <div className="flex flex-wrap  border border-gray-300 rounded-lg md:divide-x h-full">
                                <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center">
                                    <span className="font-bold text-sm w-20 md:w-auto">Adultos:</span>

                                    <select
                                        className="focus:outline-none w-full rounded-md  border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent "
                                        name="adults"
                                        id="adults"
                                    >
                                        <option value="1">1 </option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                                <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center">
                                    <span className="font-bold text-sm w-20 md:w-auto">Niños:</span>

                                    <select
                                        className="focus:outline-none w-full rounded-md  border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent "
                                        name="kids"
                                        id="kids"
                                    >
                                        <option value="0">0 </option>
                                        <option value="1">1 </option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="w-full md:w-1/2 xl:w-3/12  focus:outline-none text-sm h-full py-3 px-5 bg-orange-500 rounded-full text-white font-bold">
                            Chekear Disponibilidad
                        </button>
                    </form>
                </div>
            </div>
            <BannerTitle title={page.title} subTitle={page.sub_title} img={null} />
            
            <div className="container mx-auto pb-content ">
                <div className="grid grid-cols-6 gap-5">
                    {rooms.map((room, index) => (
                        <div
                            key={room.id}
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
                                            <span className="text-2xl font-semibold">${room.price}.00</span>
                                            <span className="text-base font-light">/ noche</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap py-6 px-4 text-sm border-gray-200 md:border-none border space-x-4 overflow-hidden">
                                    <div className="inline-flex items-center space-x-1 font-semibold">
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
                                    <div className="inline-flex items-center space-x-1 font-semibold">
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
                                    <div className="inline-flex items-center space-x-1 font-semibold">
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

export default RoomsPage
