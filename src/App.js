import { Route, Switch, useLocation } from "react-router"
import { SWRConfig } from "swr"
import apiClient from "helpers/apiClient"
import Footer from "components/Footer"
import Header from "components/Header"

import routes from "routes"
import { useEffect, useState } from "react"

const App = () => {
    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitionStage, setTransistionStage] = useState("fadeIn")

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])
    return (
        <>
            <SWRConfig
                value={{
                    fetcher: (url) => apiClient.get(url).then((res) => res.data),
                }}
            >   
            <div className="flex flex-col min-h-screen">
                <Header />
                <div
                    className={`flex-grow ${transitionStage}`}
                    onAnimationEnd={() => {
                        if (transitionStage === "fadeOut") {
                            setTransistionStage("fadeIn")
                            setDisplayLocation(location)
                        }
                    }}
                >
                    <Switch location={displayLocation}>
                        {Object.keys(routes).map((key, index) => (
                            <Route key={index} exact path={routes[key].path} component={routes[key].Component} />
                        ))}
                    </Switch>
                </div>
                <Footer />
                </div>
            </SWRConfig>
        </>
    )
}

export default App
