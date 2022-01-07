import { Link } from "react-router-dom"

const PostsList = ({ posts }) => {
    return (
        <div id="gallery-img" className=" flex flex-wrap">
            {posts.data.map((post) => (
                <div key={post.id} className="img-item w-full md:w-1/2 py-3 md:p-3 ">
                    <Link to={"/post/" + post.slug}>
                        <div>
                            <div className="relative overflow-hidden">
                                <img
                                    src={"/storage/posts/thumbnail/" + post.img}
                                    className="w-full transition duration-500 transform hover:scale-110"
                                    alt={post.title}
                                />
                                <div className=" px-4 py-3 md:py-5 md:px-6 text-gray-400 font-medium text-sm bg-white  absolute bottom-0 left-0 uppercase">
                                    <span className="text-gray-600 font-medium">ADVENTURE</span> - {post.updated_at.slice(0, 10)}
                                </div>
                            </div>
                            <div className="sm:px-2 py-4 md:p-6">
                                <h3 className="text-xl sm:text-2xl font-title">{post.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PostsList
