import { useEffect } from "react"
import TitleSection from "../../components/TitleSection"
import { useStore } from "../../context/StoreContext"
import CarouselGallery from "../../components/CarouselGallery"
import BannerTitle from "../../components/BannerTitle"
import { Link } from "react-router-dom"
import Head from "../../components/Head"
import usePage from "../../hooks/usePage"
import LoadingPage from "../../components/LoadingPage"
const AboutUs = () => {
    const { data } = usePage("page/about-us")
    if (!data) return <LoadingPage/>
    const images = [
        {
            image: "about-1.jpg",
        },
        {
            image: "about-2.jpg",
        },
        {
            image: "about-3.jpg",
        },
        {
            image: "about-4.jpg",
        },
        {
            image: "about-5.jpg",
        },
    ]
    const theme = [
        {
            img: "/img/home/team-1.jpg",
            name: "Robert Fox",
            position: "CEO, HEAD OF COMMUNITY",
        },
        {
            img: "/img/home/team-2.jpg",
            name: "Kristin Mccoy",
            position: "CO-FOUNDER & CPO",
        },
        {
            img: "/img/home/team-3.jpg",
            name: "Shane Watson",
            position: "CHIEF OPERATING OFFICER",
        },
        {
            img: "/img/home/team-4.jpg",
            name: "Francisco Pena",
            position: "CHIEF FINANCIAL OFFICER",
        },
        {
            img: "/img/home/team-5.jpg",
            name: "Calvin Flore",
            position: "ASSET MANAGEMENT",
        },
        {
            img: "/img/home/team-6.jpg",
            name: "Kathryn Cooper",
            position: "ANIMATOR",
        },
    ]

    return (
        <>
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />
            <div className="container mx-auto max-w-screen-xl">
                <div className="pb-content">
                    <div className=" max-w-md flex flex-col md:flex-row md:items-center justify-between pb-14 space-y-4 md:space-y-0 md:space-x-5">
                        <div>
                            <div className="font-bold mb-1 ">Got a questions?</div>
                            <div className="text-gray-400">hello@hotelhotelcartagena.com</div>
                        </div>
                        <div>
                            <div className="font-bold mb-1 ">For partners</div>
                            <div className="text-gray-400">partners@hotelhotelcartagena.com</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                        <div className="md:w-1/2 md:pr-5">
                            <TitleSection title="NUESTRA HISTORIA" subTitle="Una breve historia del Hotel Cartagena." />
                        </div>

                        <div className="md:w-1/2 space-y-5  md:pt-8">
                            <p>
                                El clima subtropical húmedo, las altas montañas, la vegetación exótica, las interminables playas, los
                                parques nacionales, la arquitectura histórica, los atractivos lugares de interés, los festivales de arte y
                                el animado entorno multicultural hacen de Hotel Cartagena un destino turístico destacado.
                            </p>

                            <p>
                                Hotel Cartagena tiene mucho que ofrecer a los amantes de la naturaleza, los deportes, la historia, el ocio
                                en la playa soleada y las aventuras activas. Hay mucho que hacer y muchas cosas que ver en Hotel Cartagena,
                                por lo que nunca se aburrirá
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" py-content overflow-hidden">
                    <CarouselGallery images={images} path="/img/home/" height="100%" />
                </div>
                <div className="py-content">
                    <div className="w-full mb-8 md:mb-12">
                        <TitleSection title="QUÉ OFRECEMOS" subTitle="Nuestro enfoque." />
                    </div>
                    <div className=" space-y-8 md:space-y-12">
                        <div className="grid grid-cols-2 gap-x-5">
                            <div className="col-span-2 md:col-span-1 mb-5 md:mb-0">
                                <h3 className="text-3xl md:text-4xl font-bold ">Calidad de servicio</h3>
                            </div>
                            <div className="col-span-2 md:col-span-1   space-y-4 leading-relaxed">
                                <p>
                                    La calidad del servicio en la industria hotelera se convierte en uno de los factores más importantes
                                    para obtener una ventaja competitiva sostenible y la confianza de los clientes en un mercado altamente
                                    competitivo y, por lo tanto, la calidad del servicio puede brindar a la industria hotelera una gran
                                    oportunidad de crear una diferenciación competitiva para las organizaciones.
                                </p>
                                <p>
                                    Un hotel exitoso ofrece un servicio de excelente calidad a los clientes, y la calidad del servicio se
                                    considera la vida del hotel.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-5">
                            <div className="col-span-2 md:col-span-1 mb-5 md:mb-0">
                                <h3 className="text-3xl md:text-4xl font-bold ">Personal amigable</h3>
                            </div>

                            <div className="col-span-2 md:col-span-1   space-y-4 leading-relaxed">
                                <p>
                                    Los clientes felices son clientes leales. No solo es importante para nosotros brindar un servicio
                                    estelar, sino también productos increíbles.
                                </p>
                                <p>
                                    El concepto más importante de satisfacción del cliente aceptado en todo el mundo es la teoría de la
                                    desconfirmación de expectativas. Esta teoría fue presentada por Oliver, dijo que la etapa de
                                    satisfacción es el resultado de la distinción entre actuación anticipada y supuesta.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-5">
                            <div className="col-span-2 md:col-span-1 mb-5 md:mb-0">
                                <h3 className="text-3xl md:text-4xl font-bold ">La satisfacción del cliente</h3>
                            </div>

                            <div className="col-span-2 md:col-span-1  space-y-4 leading-relaxed">
                                <p>
                                    La satisfacción del cliente es un concepto psicológico que involucra la sensación de bienestar y placer
                                    que resulta de obtener lo que uno espera y espera de un producto y / o servicio atractivo. La definición
                                    de satisfacción del cliente se basa en el punto de vista de la desconfirmación de las expectativas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-content">
                    <div className="w-full mb-8 md:mb-12">
                        <TitleSection title="CONOCE AL EQUIPO" subTitle="Personal del hotel." />
                    </div>
                    <div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            {theme.map((p) => (
                                <div key={p.name} className="">
                                    <div className="rounded-lg h-96 overflow-hidden">
                                        <img src={p.img} alt="Robert Fo" className=" object-cover w-full" />
                                    </div>
                                    <div className="px-2 py-3">
                                        <div className="text-xl font-title font-bold  mb-1">{p.name}</div>
                                        <div className="text-gray-400 uppercase">{p.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-xl text-center py-content">
                    <div className=" ">
                        <div className=" text-5xl md:text-6xl mb-5 font-bold font-title">Haz espacio para la aventura.</div>
                        <div className="text-gray-600 mb-5">
                            Reserve su habitación ahora mismo y comience su increíble aventura llena de descubrimientos y experiencias con
                            Hotel Cartagena.
                        </div>
                        <div>
                            <Link
                                to="/reservation"
                                className="px-4 py-2 justify-center  md:px-6 rounded-full text-white bg-orange-500 flex md:inline-flex items-center  space-x-2 "
                            >
                                <span className="font-bold ">Reservacion</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
