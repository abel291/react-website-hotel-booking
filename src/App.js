import { Route, Switch } from "react-router"
import { SWRConfig } from "swr"
import apiClient from "./auth/apiClient"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppLayout from "./pages/AppLayout"
import routes from "./routes"

const App = () => {
    return (
        <>
            <SWRConfig
                value={{
                    fetcher: (url) => apiClient.get(url).then((res) => res.data),
                }}
            >
                <Header />
                <Switch>
                    {Object.keys(routes).map((key, index) => (
                        <Route key={index} exact path={routes[key].path} component={routes[key].Component} />
                    ))}
                </Switch>
                <Footer />
            </SWRConfig>
        </>
    )
}

export default App
