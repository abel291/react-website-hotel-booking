const item = [1, 2, 3, 4, 5, 6, 7, 8]
const GalleriesPageLoading = () => {
    return (
        <>
            <div className="  flex flex-col sm:flex-row  text-lg space-x-0 sm:space-x-3 space-y-2 sm:space-y-0">
                {item.map((i) => (
                    <div key={i} className="py-2 px-10 bg-gray-200 rounded"></div>
                ))}
            </div>
            <div className=" grid  grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 animate-pulse">
                {item.map((i) => (
                    <div key={i} className="h-40 bg-gray-200 rounded-md"></div>
                ))}
            </div>
        </>
    )
}

export default GalleriesPageLoading
