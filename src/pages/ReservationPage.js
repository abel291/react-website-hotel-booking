import React, { useEffect } from "react"

import Step1Date from "../reservation/Step1Date"
import Step2Rooms from "../reservation/Step2Rooms"
import Step3Complements from "../reservation/Step3Complements"
import Step4 from "../reservation/step4/Step4"
import Step5Complete from "../reservation/Step5Complete"
import NotificationError from "../components/NotificationError"
import { useStore } from "../context/StoreContext"
import { useReservation } from "../context/ReservationContext"

function ReservationPage() {
    const { dispatch } = useStore()
    const { data, errors } = useReservation()

    useEffect(() => {
        dispatch({ type: "CHANGE_NAVBAR", value: "white" })
    }, [dispatch])

    useEffect(() => {
        //cada que cambien de step hacer scrool hacia arriba
        document.getElementById("container-main").scrollIntoView({ behavior: "smooth" })
    }, [data.step])

    return (
        <div id="container-main" className="container min-h-screen mx-auto flex items-center py-content justify-center ">
            <div className="w-full">
                <NotificationError errors={errors}></NotificationError>
                {data.step === 1 && <Step1Date />}
                {data.step === 2 && <Step2Rooms />}
                {data.step === 3 && <Step3Complements />}
                {data.step === 4 && <Step4 />}
                {data.step === 5 && <Step5Complete />}
            </div>
        </div>
    )
}

export default ReservationPage
