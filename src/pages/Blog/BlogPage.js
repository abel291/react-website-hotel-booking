import { useState } from "react"
import { useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
//import apiClient from "../../auth/apiClient"
import BannerTitle from "../../components/BannerTitle"
import Pagination from "../../components/Pagination"
import { useStore } from "../../context/StoreContext"

import BlogPageLoading from "./BlogPageLoading"
import blogJson from "../../dataJson/blog.json"
const BlogPage = () => {
    const { pages, blog, dispatch, fakeApi } = useStore()
    const page = pages.blog
    const history = useHistory()
    const location = history.location
    const [isLoading, /*setIsLoading*/] = useState(false)
    // useEffect(() => {
    //     const getBlog = async (pagination = 1) => {
    //         setIsLoading(true)
    //         await apiClient
    //             .get("/api/blog?page=" + pagination)
    //             .then((response) => {
    //                 dispatch({ type: "SET_BLOG", value: response.data.blog })
    //             })
    //             .catch((response) => {})
    //             .then(() => {
    //                 setIsLoading(false)
    //             })
    //     }

    //     let pagination = new URLSearchParams(location.search).get("page") || 1
    //     if (!blog || pagination !== blog.current_page) {
    //         getBlog(pagination)
    //     }
    // }, [location.search, dispatch])

    useEffect(() => {
        const getBlog = async (pagination = 1) => {
            fakeApi(() => {
                dispatch({ type: "SET_BLOG", value: blogJson })
            })
        }

        let pagination = new URLSearchParams(location.search).get("page") || 1
        if (!blog || pagination !== blog.current_page) {
            getBlog(pagination)
        }
    }, [dispatch, fakeApi, location.search,blog])

    return (
        <>
            <BannerTitle title={page.title} subTitle={page.sub_title} img={null} />
            <div className="container mx-auto max-w-screen-xl pb-content">
                {isLoading || !blog ? (
                    <BlogPageLoading />
                ) : (
                    <div>
                        <div id="gallery-img" className=" flex flex-wrap">
                            {blog.data.map((post) => (
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
                                                    <span className="text-gray-600 font-semibold">ADVENTURE</span> -{" "}
                                                    {post.updated_at.slice(0, 10)}
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
                        <Pagination paginator={blog} />
                    </div>
                )}
            </div>
        </>
    )
}

export default BlogPage
