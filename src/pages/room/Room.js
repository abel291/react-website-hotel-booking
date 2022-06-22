import { useParams } from "react-router-dom"
import SelectDescription from "pages/room/SelectDescription"
import SelectComplements from "pages/room/SelectComplements"
import SelectForm from "pages/room/SelectForm"
import SelectPrice from "pages/room/SelectPrice"
import SelectQuantity from "pages/room/SelectQuantity"
import CarouselGallery from "components/CarouselGallery"
import BannerTitle from "components/BannerTitle"
import usePage from "hooks/usePage"
import Head from "components/Head"
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"
const Room = () => {
    const { slug } = useParams()
    const { data,error } = usePage("room/" + slug)
    
    if (error) return <NotificationError errors={formatErrors(error)} />
    
    if (!data) return <LoadingPage/>

    return (
        //<Compoenent />
        <>
            <Head title={data.room.name} description={data.room.description_min} />
            <BannerTitle title={data.room.name} subTitle={"Habitacion"} img={"/storage/rooms/" + data.room.thumbnail} />
            <div className="container mx-auto  bg-white rounded-t-2xl   md:rounded-none py-content">
                <div className="flex flex-col lg:flex-row ">
                    <div className="w-full lg:w-2/3 space-y-8 lg:mr-4 mb-8 lg-mb-0">
                        {data.room.images && <CarouselGallery images={data.room.images} path={"/storage/images/"} />}

                        <SelectQuantity room={data.room} />

                        <SelectDescription room={data.room} />

                        <SelectComplements room={data.room} />
                    </div>

                    <div className="w-full lg:w-1/3 space-y-8 ">
                        <SelectPrice room={data.room} />

                        <div className="px-2">
                            <div className="font-bold text-2xl font-title mb-3">Buscar Habitacion</div>
                            <div>
                                <SelectForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Room
