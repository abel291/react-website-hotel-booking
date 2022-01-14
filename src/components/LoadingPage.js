import { useEffect } from "react"
import { useSWRConfig } from "swr"

const LoadingPage = () => {
    const { mutate } = useSWRConfig()
    useEffect(() => {
        mutate("navbar", "white", false)
    }, [mutate])
    return (
        <>
            <div className=" container mx-auto  animate-pulse min-h-screen">
                <div className="py-content space-y-3">
                    <div className="h-6 md:w-1/5 bg-gray-200 rounded-md"></div>
                    <div className="h-10 md:w-3/5 bg-gray-200 rounded-md"></div>
                    <div className="h-10 md:w-2/5 bg-gray-200 rounded-md"></div>
                </div>

                <div className="pb-content space-y-3">
                    <div className="h-6 md:w-1/5 bg-gray-200 rounded-md"></div>
                    <div className="h-6 md:w-4/5 bg-gray-200 rounded-md"></div>
                    <div className="h-6 md:w-4/5 bg-gray-200 rounded-md"></div>
                    <div className="md:flex hidden gap-x-3">
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                        <div className="h-6 md:w-1/12 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingPage
