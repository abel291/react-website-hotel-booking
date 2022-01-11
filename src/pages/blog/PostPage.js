import { useParams } from "react-router-dom"
import usePage from "hooks/usePage"
import NotificationError from "components/NotificationError"
import LoadingPage from "components/LoadingPage"
import ValidationErrors from "components/ValidationErrors"
import { formatErrors } from "helpers/helpers"
const PostPage = () => {
    const { slug } = useParams()
    const { data, error } = usePage("post/" + slug)

    if (error) return <NotificationError errors={formatErrors(error)} />
    
    if (!data) return <LoadingPage />
    

    return (
        <div className="container mx-auto max-w-screen-xl py-content">
            <div className="space-y-8 md:space-y-24">
                <div className="text-center space-y-3 md:space-y-6">
                    <span className="tracking-widest uppercase text-gray-400 text-sm md:text-base ">
                        {data.post.updated_at} - By Admin
                        {/** */}
                    </span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight font-title">{data.post.title}</h1>
                </div>
                <div>
                    <img src={"/storage/posts/thumbnail/" + data.post.img} alt={data.post.title} className="w-full" />
                </div>
                <div
                    className="md:px-12 leading-relaxed space-y-4 post-content"
                    dangerouslySetInnerHTML={{ __html: data.post.description_max }}
                ></div>
            </div>
        </div>
    )
}

export default PostPage
