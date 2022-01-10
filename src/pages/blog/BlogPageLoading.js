const BlogPageLoading = () => {
    return (
        <div id="gallery-img" className=" grid grid-cols-1 md:grid-cols-2 gap-2 animate-pulse">
            {[1, 2, 3].map((post, index) => (
                <div key={post} className="">
                    <div className=" h-36 md:h-72 w-full bg-gray-200 rounded-lg"></div>
                    <div className="sm:px-2 py-4">
                        <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogPageLoading
