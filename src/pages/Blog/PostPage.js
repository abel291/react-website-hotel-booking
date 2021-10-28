import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
//import apiClient from "../../auth/apiClient"
import { useStore } from "../../context/StoreContext"
import moment from "moment"
import "moment/locale/es"
import blogJson from "../../dataJson/blog.json"
const PostPage = () => {
    const { dispatch, blog,fakeApi } = useStore()

    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        dispatch({ type: "CHANGE_NAVBAR", value: "white" })
    }, [dispatch])

    useEffect(() => {
        if (!blog) {
            getPost(slug)
        } else {
            console.log(blog)
            setPost(blog.data.find((post) => post.slug === slug))
        }
    }, [blog, slug])

    // const getPost = async (slug) => {
    //     await apiClient
    //         .get("/api/post/" + slug)
    //         .then((response) => {
    //             setPost(response.data.post)
    //         })
    //         .catch((response) => {
    //             setPost("fail")
    //         })
    // }

    const getPost = async (slug) => {  
        fakeApi(() => {
            setPost(blogJson.data.find((post) => post.slug === slug))
        })      
        
    }

    
    return (
        <div className="container mx-auto max-w-screen-xl py-content">
            {!post ? (
                "CARGANDO...."
            ) : (
                <div className="space-y-8 md:space-y-24">
                    <div className="text-center space-y-3 md:space-y-6">
                        <span className="tracking-widest uppercase text-gray-400 text-sm md:text-base ">
                            {moment(post.updated_at.slice(0, 10), "YYYY-MM-DD").locale("es").format("MMMM  DD , YYYY")} - By Admin
                            {/** */}
                        </span>
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight font-title">{post.title}</h1>
                    </div>
                    <div>
                        <img src={"/storage/posts/thumbnail/" + post.img} alt={post.title} className="w-full" />
                    </div>
                    <div
                        className="md:px-12 leading-relaxed space-y-4 post-content"
                        dangerouslySetInnerHTML={{ __html: post.description_max }}
                    ></div>
                </div>
            )}
        </div>
    )
}

export default PostPage
