import React from "react"
import LoadingPage from "../../components/LoadingPage"
import useReservation from "../../hooks/useReservation"

import Step1Date from "./step1/Step1Date"
import Step2Rooms from "./step2/Step2Rooms"
import Step3Complements from "./step3/Step3Complements"
import Step4Checkout from "./step4/Step4Checkout"


// import Step4 from "./step4/Step4"
// import Step5Complete from "./Step5Complete"

function Reservation() {
    const { data } = useReservation()
    if (!data) return <LoadingPage />
    return (
        <div id="container-main" className="container min-h-screen mx-auto flex items-center py-content justify-center ">
            <div className="w-full">
                {data.step === 1 && <Step1Date />}
                {data.step === 2 && <Step2Rooms />}
                {data.step === 3 && <Step3Complements />}
                {data.step === 4 && <Step4Checkout />}
                {/*{data.step === 5 && <Step5Complete />} */}
            </div>
        </div>
    )
}

export default Reservation
