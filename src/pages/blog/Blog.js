import { useState } from "react"

import {  useHistory } from "react-router-dom"
//import apiClient from "auth/apiClient"
import BannerTitle from "components/BannerTitle"
import Head from "components/Head"
import LoadingPage from "components/LoadingPage"
import Pagination from "components/Pagination"
import usePage from "hooks/usePage"

import BlogPageLoading from "pages/blog/BlogPageLoading"
import PostsList from "pages/blog/PostsList"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"

const Blog = () => {
    const { data } = usePage("page/blog")
    const history = useHistory()
    const location = history.location

    const [pageIndex, setPageIndex] = useState(new URLSearchParams(location.search).get("page") || 1)
    const { data: posts,error } = usePage("/page/posts?page=" + pageIndex)

    if (error) return <NotificationError errors={formatErrors(error)} />
    if (!data) return <LoadingPage/>

    return (
        <>  
            <Head title={data.page.seo_title} description={data.page.seo_description} />
            <BannerTitle title={data.page.title} subTitle={data.page.sub_title} img={null} />
            <div id="postsScroll" className="container mx-auto  pb-content">
                {!posts ? (
                    <BlogPageLoading />
                ) : (
                    <div>
                        <PostsList posts={posts} />
                        <Pagination paginator={posts} setPageIndex={setPageIndex} scrollTopId="postsScroll" />
                    </div>
                )}
            </div>
        </>
    )
}

export default Blog
