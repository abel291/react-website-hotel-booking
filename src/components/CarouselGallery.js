import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Autoplay])
const CarouselGallery = ({images,path ,height='500px'}) => {
    return (
        <div className="relative bg-gray-50">
                <div className="z-10 absolute top-0 left-0  flex justify-center ">
                    <button className="button-next py-4 px-5 bg-white focus:outline-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="button-prev py-4 px-5 bg-white focus:outline-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                    }}
                >
                    <div>
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <img 
                                    //className="object-cover w-full mx-auto"
                                    className=" h-full mx-auto object-cover w-full"
                                    src={path+image.image}
                                    alt={image.image}
                                    style={{ height: height }}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
    )
}

export default CarouselGallery
