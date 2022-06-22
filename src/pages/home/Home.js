import TitleSection from "components/TitleSection"

import { ChevronLeftIcon, ChevronRightIcon,ArrowNarrowRightIcon } from "@heroicons/react/outline"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import "swiper/swiper-bundle.css"
import BannerTitle from "components/BannerTitle"
import { Link } from "react-router-dom"
import InputReservation from "pages/home/InputReservation"
import usePage from "hooks/usePage"
import Head from "components/Head"
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"
const testimonals = [
    {
        title: "¡El mejor hotel! ",
        text: "El hotel tiene todo lo necesario. En la planta baja hay un lobby bar, en el segundo piso hay una zona con piscina interior y sauna, en el séptimo piso hay un restaurante y spa-salón. Las habitaciones se limpian todos los días.",
        name: "Jacob Lane from USA",
    },
    {
        title: "Hotel confortable",
        text: "- Bueno, qué puedo decir, cada año, día y hora, este lugar se está transformando para mejor. El personal es completamente competente y amigable, todo a su alrededor está floreciendo, es agradable, nutritivo y hace que las vacaciones sean brillantes.",
        name: "Victoria Wilson",
    },
    {
        title: " El moderno",
        text: "- El moderno Hotel Cartagena de 5 * es una solución ideal para combinar negocios y placer. El diseño elegante y el servicio excepcional satisfarán los deseos de cualquier huésped. 150 habitaciones con balcón (para no fumadores), vista al mar, restaurante de moda.",
        name: "Max Edwart",
    },
    {
        title: "¡El mejor hotel! ",
        text: "El hotel tiene todo lo necesario. En la planta baja hay un lobby bar, en el segundo piso hay una zona con piscina interior y sauna, en el séptimo piso hay un restaurante y spa-salón. Las habitaciones se limpian todos los días.",
        name: "Jacob Lane from USA",
    },
    {
        title: "Hotel confortable",
        text: "- Bueno, qué puedo decir, cada año, día y hora, este lugar se está transformando para mejor. El personal es completamente competente y amigable, todo a su alrededor está floreciendo, es agradable, nutritivo y hace que las vacaciones sean brillantes.",
        name: "Victoria Wilson",
    },
    {
        title: " El moderno",
        text: "- El moderno Hotel Cartagena de 5 * es una solución ideal para combinar negocios y placer. El diseño elegante y el servicio excepcional satisfarán los deseos de cualquier huésped. 150 habitaciones con balcón (para no fumadores), vista al mar, restaurante de moda.",
        name: "Max Edwart",
    },
]

SwiperCore.use([Navigation, Autoplay])
const Home = () => {
    const { data,error} = usePage("page/home")
    if (error) return <NotificationError errors={formatErrors(error)} />
    if (!data) return <LoadingPage/>
    return (
        <>  
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={data.page.img} />
            <InputReservation />
            <div className="container mx-auto  py-content space-y-8">
                <div className=" md:w-1/2">
                    <TitleSection title="Acerca de Nosotros" subTitle="Comienza tu asombrosa Aventura"></TitleSection>
                </div>
                <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-5 font-medium leading-relaxed">
                    <p>
                        El clima subtropical húmedo, las altas montañas, la vegetación exótica, las interminables playas, los parques
                        nacionales, la arquitectura histórica, los atractivos lugares de interés, los festivales de arte y el animado
                        entorno multicultural hacen de Hotel Cartagena un destino turístico destacado.{" "}
                    </p>

                    <p>
                        El clima subtropical húmedo, las altas montañas, la vegetación exótica, las interminables playas, los parques
                        nacionales, la arquitectura histórica, los atractivos lugares de interés, los festivales de arte y el animado
                        entorno multicultural hacen de Hotel Cartagena un destino turístico destacado.{" "}
                    </p>
                </div>

                <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-5">
                    <div>
                        <img className="rounded-md " src="/img/home/img-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-md " src="/img/home/img-2.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto  py-content space-y-8">
                <div className="flex justify-between">
                    <div>
                        <TitleSection title="Habitaciones" subTitle="Habitaciones"></TitleSection>
                    </div>
                    <div className="flex items-end space-x-2 ">
                        <a className="text-sm md:text-base " href="/">
                            Ver toda
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid-cols-1 grid md:grid-cols-3 gap-2 md:gap-5 ">
                    {data.rooms.map((room, index) => (
                        <div key={index} className={(index === 0 ? "md:col-span-2" : "") + " rounded-md overflow-hidden "}>
                            <Link to={"/room/" + room.slug}>
                                <div className="relative">
                                    <img
                                        src={"/storage/rooms/thumbnail/" + room.thumbnail}
                                        className="object-cover h-64 w-full transition duration-500 transform hover:scale-110 filter brightness-75"
                                        title={room.name + "-img"}
                                        alt={room.name + "-img"}
                                    />

                                    <div className="text-white leading-tight space-y-1 py-4 px-4 absolute bottom-0 left-0">
                                        <h3 className="font-medium text-2xl font-title capitalize">{room.name}</h3>
                                        <p className="text-xl font-light">
                                            <span className="text-2xl font-medium">${room.price}</span> /noche
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-100 py-content py-12">
                <div className="container mx-auto  ">
                    <div className="flex flex-col ">
                        <div className="w-full z-10 space-y-8 pb-8 lg:pb-8">
                            <div className="text-center lg:text-left">
                                <TitleSection title="TESTIMONIOS" subTitle="Que dicen los clientes"></TitleSection>
                                <span className="mt-1 block text-4xl md:text-5xl font-bold text-orange-600 leading-tight font-title">
                                    sobre nosotros.
                                </span>
                            </div>
                            <div className="flex justify-center lg:justify-start relative">
                                <button className="button-next py-4 px-5 bg-white focus:outline-none ">
                                    <ChevronLeftIcon className="h-5 w-5" />
                                </button>
                                <button className="button-prev py-4 px-5 bg-white focus:outline-none ">
                                    <ChevronRightIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                centeredSlides={true}
                                autoHeight={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".button-next",
                                    prevEl: ".button-prev",
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {testimonals.map((testimony, index) => (
                                    <SwiperSlide key={index}>
                                        <div key={index} className="w-full h-full  p-8 rounded-md  bg-white space-y-2 text-gray-500">
                                            <h4 className=" text-2xl font-medium font-title text-gray-500">{testimony.title}</h4>
                                            <p >- {testimony.text}</p>
                                            <div>
                                                <span className=" font-medium">{testimony.name}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-content  py-24 mx-auto max-w-screen-md text-center space-y-8">
                <h3 className="text-2xl md:text-5xl md:leading-tight font-bold font-title ">Haz espacio para la aventura.</h3>
                <p className="font-light">
                    Reserva tu habitación ahora mismo y comienza tu increíble aventura llena de descubrimientos. Y experiencias con el Hotel
                    Cartagena.
                </p>
                <Link
                    to="/reservation"
                    className="btn btn-primary"
                >
                    Reservación
                    <ArrowNarrowRightIcon className="ml-2 h-5 w-5"/>
                </Link>
            </div>
        </>
    )
}

export default Home
