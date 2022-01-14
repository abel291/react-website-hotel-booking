
import LoadingPage from "components/LoadingPage"
import NotificationError from "components/NotificationError"
import { formatErrors } from "helpers/helpers"
import useReservation from "hooks/useReservation"
import Step1Date from "pages/reservation/step1/Step1Date"
import Step2Rooms from "pages/reservation/step2/Step2Rooms"
import Step3Complements from "pages/reservation/step3/Step3Complements"
import Step4Checkout from "pages/reservation/step4/Step4Checkout"
import Step5Complete from "pages/reservation/Step5Complete"

function Reservation() {
    const { data,error} = useReservation()  
    
    if (error) return <NotificationError errors={formatErrors(error)} />
    
    if (!data) return <LoadingPage />
    
    return (
        <div id="container-main" className="container min-h-screen mx-auto flex items-center py-content justify-center ">
            <div className="w-full">
                
                {data.step === 1 && <Step1Date />}
                {data.step === 2 && <Step2Rooms />}
                {data.step === 3 && <Step3Complements />}
                {data.step === 4 && <Step4Checkout />}
                {data.step === 5 && <Step5Complete />} 
            </div>
        </div>
    )
}

export default Reservation
