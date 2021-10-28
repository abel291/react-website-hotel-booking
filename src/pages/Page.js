import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useStore } from "../context/StoreContext"
 
const Page = ({ children, type, Component }) => {
    const { pages } = useStore()
    const page= pages.home
    
    

    return (
        <>
            <Header></Header>
            <Component page={page}></Component>
        </>
    )
}

export default Page
