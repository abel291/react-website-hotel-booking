import { useEffect } from "react"
import { useSWRConfig } from "swr"

const BannerTitle = ({ title, subTitle, img }) => {
    const { mutate } = useSWRConfig()
    useEffect(() => {
        mutate("navbar", img ? "img" : "white",false)
    }, [img])
    return (
        <>
            {img ? (
                <div className="min-h-screen flex items-center  relative " style={{ zIndex: "-1" }}>
                    <img className="w-full h-full absolute object-cover filter brightness-75 z-0 bg-gray-200 " src={img} alt={title} />
                    <div className="container md:mx-auto z-10">
                        <div className="md:w-4/5 lg:w-8/12 text-white ">
                            <span className="text-base uppercase">{subTitle}</span>

                            <h1 className="font-title font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">{title}</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="py-12 sm:py-16 md:py-20 lg:py-28 flex items-center">
                    <div className="container md:mx-auto">
                        <div className="md:w-4/5 lg:w-8/12 ">
                            <span className="text-base uppercase text-gray-400">{subTitle}</span>
                            <h1 className="font-title font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">{title}</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BannerTitle
