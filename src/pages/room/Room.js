import { useParams } from "react-router-dom"
import RoomSelectDescription from "./RoomSelectDescription"
import RoomSelectComplements from "./RoomSelectComplements"
import RoomSelectForm from "./RoomSelectForm"
import RoomSelectPrice from "./RoomSelectPrice"
import RoomSelectQuantity from "./RoomSelectQuantity"
import CarouselGallery from "../../components/CarouselGallery"
import BannerTitle from "../../components/BannerTitle"
import usePage from "../../hooks/usePage"
import Head from "../../components/Head"
const Room = () => {
    const { slug } = useParams()
    const { data } = usePage("room/" + slug)
    if (!data) return <div>loading...</div>

    return (
        //<Compoenent />
        <>
            <Head title={data.room.name} description={data.room.description_min} />
            <BannerTitle title={data.room.name} subTitle={"Habitacion"} img={"/storage/rooms/" + data.room.thumbnail} />
            <div className="container mx-auto max-w-screen-xl bg-white rounded-t-2xl   md:rounded-none py-content">
                <div className="flex flex-col lg:flex-row ">
                    <div className="w-full lg:w-2/3 space-y-8 lg:mr-4 mb-8 lg-mb-0">
                        {data.room.images && <CarouselGallery images={data.room.images} path={"/storage/images/"} />}

                        <RoomSelectQuantity room={data.room} />

                        <RoomSelectDescription room={data.room} />

                        <RoomSelectComplements room={data.room} />
                    </div>

                    <div className="w-full lg:w-1/3 space-y-8 ">
                        <RoomSelectPrice room={data.room} />

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

export default Room
