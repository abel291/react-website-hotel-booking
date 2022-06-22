import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import BannerTitle from "components/BannerTitle";

import usePage from "hooks/usePage";
import LoadingPage from "components/LoadingPage";
import NotificationError from "components/NotificationError";
import { formatErrors } from "helpers/helpers";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Transition } from "@headlessui/react";

const Gallery = () => {
    const { data, error } = usePage("page/gallery");

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (data?.images) {
            setImages(data.images);
        }
    }, [data]);

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0,
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number + 1,
        });
    }

    const handleButtonFilter = (slug) => {
        let newImages = data.images.filter(
            (item, key) => item.imageable.slug === slug
        );
        //console.log(newImages);
        setImages(newImages);
    };

    if (error) return <NotificationError errors={formatErrors(error)} />;
    if (!data) return <LoadingPage />;

    return (
        <>
            <BannerTitle
                title={data.page.title}
                subTitle={data.page.sub_title}
                img={null}
            />
            <div className="container mx-auto space-y-8 pb-content ">
                <p className="w-full md:w-2/4 text-gray-600">
                    Hotel cartagena tiene mucho que ofrecer a los amantes de la
                    naturaleza, los deportes, la historia, el ocio en la playa
                    soleada y las aventuras activas.
                </p>

                <div className="flex flex-col sm:flex-row  text-lg space-x-0 sm:space-x-6">
                    <button
                        onClick={() => setImages(data.images)}
                        className="img-filter font-bold py-2 focus:outline-none capitalize"
                    >
                        Todas
                    </button>
                    {data.galleries.map((gallery, index) => (
                        <button
                            onClick={() => handleButtonFilter(gallery.slug)}
                            key={gallery.slug}
                            className="font-bold py-2  focus:outline-none capitalize"
                        >
                            {gallery.slug}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
                    >
                        <Masonry gutter="20px">
                            {images.map((item, key) => (
                                <div
                                    key={key}
                                    onClick={() => openLightboxOnSlide(key)}
                                    className="cursor-pointer overflow-hidden"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        title={item.title}
                                        className="w-full  rounded-md object-cover transform  duration-200 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={images.map((image) => image.image)}
                slide={lightboxController.slide}
            />
        </>
    );
};

export default Gallery;
