import { useState } from "react"
import { useParams } from "react-router-dom"

import { useStore } from "../../context/StoreContext"

import RoomSelectDescription from "./RoomSelectDescription"
import RoomSelectComplements from "./RoomSelectComplements"
import RoomSelectForm from "./RoomSelectForm"
import RoomSelectPrice from "./RoomSelectPrice"
import RoomSelectQuantity from "./RoomSelectQuantity"
import { useEffect } from "react"
import CarouselGallery from "../../components/CarouselGallery"

import BannerTitle from "../../components/BannerTitle"

const RoomSelectPage = () => {
    const { slug } = useParams()
    const { rooms ,dispatch} = useStore()
    const [room, setRoom] = useState(null)

    useEffect(() => {
        setRoom(rooms.find((room) => room.slug === slug))
    }, [rooms,slug])

    useEffect(() => {
        dispatch({type:'CHANGE_NAVBAR',value:'img'}) 
    }, [dispatch])


    return !room ? (
        "CARGANDO...."
        //<Compoenent />
    ) : (
        <>
            <BannerTitle title={room.name} subTitle={"Habitacion"} img={"/storage/rooms/" + room.thumbnail} />
            <div className="container mx-auto max-w-screen-xl bg-white rounded-t-2xl   md:rounded-none py-content">
                <div className="flex flex-col lg:flex-row ">
                    <div className="w-full lg:w-2/3 space-y-8 lg:mr-4 mb-8 lg-mb-0">
                        {room.images && <CarouselGallery images={room.images} path={"/storage/images/"} />}

                        <RoomSelectQuantity room={room} />

                        <RoomSelectDescription room={room} />

                        <RoomSelectComplements room={room} />
                    </div>

                    <div className="w-full lg:w-1/3 space-y-8 ">
                        <RoomSelectPrice room={room} />

                        <div className="px-2">
                            <div className="font-bold text-2xl font-title mb-3">Buscar Habitacion</div>
                            <div>
                                <RoomSelectForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomSelectPage
