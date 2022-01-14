import { useEffect, useRef, useState } from "react"

import Isotope from "isotope-layout"
import imagesLoaded from "imagesloaded"
import FsLightbox from "fslightbox-react"
import BannerTitle from "components/BannerTitle"
import GalleriesPageLoading from "pages/gallery/GalleriesPageLoading"
import usePage from "hooks/usePage"
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"

const Gallery = () => {
    const { data, error } = usePage("page/gallery")
    const textLoadedRef = useRef()

    useEffect(() => {
        if (data) {
            const galleryIso = document.getElementById("gallery-img")
            textLoadedRef.current.innerText = "Cargandooo..."
            imagesLoaded(galleryIso, function () {
                const iso = new Isotope(galleryIso, {
                    percentPosition: true,
                    itemSelector: ".img-item",
                    horizontalOrder: true,
                })
                const btn_filter = document.querySelector(".filter-images")
                if (btn_filter) {
                    btn_filter.addEventListener("click", function (e) {
                        if (!e.target.matches(".img-filter")) {
                            return
                        }
                        let filter_data = e.target.getAttribute("data-filter")
                        iso.arrange({ filter: filter_data })
                        //refreshFsLightbox()
                    })
                }
            }).on("done", function (instance) {
                textLoadedRef.current.innerText = ""
            })
        }
    }, [data])

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0,
    })

    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number + 1,
        })
    }

    if (error) return <NotificationError errors={formatErrors(error)} />
    if (!data) return <LoadingPage />

    return (
        <>
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />
            <div className="container mx-auto max-w-screen-xl space-y-8 pb-content">
                <div>
                    <p className="w-full md:w-2/4 text-gray-600">
                        Hotel cartagena tiene mucho que ofrecer a los amantes de la naturaleza, los deportes, la historia, el ocio en la
                        playa soleada y las aventuras activas.
                    </p>
                </div>

                <>
                    <div className="filter-images  flex flex-col sm:flex-row  text-lg space-x-0 sm:space-x-6">
                        <button className="img-filter font-bold py-2 focus:outline-none capitalize" data-filter="*">
                            Todas
                        </button>
                        {data.galleries.map((gallery, index) => (
                            <button
                                key={index}
                                data-filter={".data-" + gallery.slug}
                                className="filter-images hover:cursor-pointer img-filter font-bold py-2  focus:outline-none capitalize"
                            >
                                {gallery.slug}
                            </button>
                        ))}
                    </div>
                    <div>
                        <div ref={textLoadedRef}></div>
                        <div id="gallery-img">
                            {data.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={"img-item w-full md:w-2/4 lg:w-1/3 p-2 data-" + image.slug}
                                    onClick={() => openLightboxOnSlide(index)}
                                >
                                    <div className="overflow-hidden">
                                        <img src={image.image} className=" cursor-pointer rounded-md w-full" alt={image.image} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={data.images.map((image) => image.image)}
                        slide={lightboxController.slide}
                    />
                </>
            </div>
        </>
    )
}

export default Gallery
