import { useEffect } from "react"
import { useSWRConfig } from "swr"
import TextLoadingSpinner from "./TextLoadingSpinner"

const LoadingPage = () => {
    const { mutate } = useSWRConfig()
    useEffect(() => {
        mutate("navbar", "white", false)
    }, [mutate])
    return (
        <div className=" flex items-center justify-center h-56">
            <TextLoadingSpinner isLoading={true} textLoading={"Loading..."} />
        </div>
    )
}

export default LoadingPage
