import React, { useState } from "react"
import ClientInput from "./ClientInput.js"
import ResumenOrder from "./ResumenOrder.js"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import ValidationErrors from "../../../components/ValidationErrors.js"
import NotificationError from "../../../components/NotificationError.js"

export default function Step4Checkout() {
    const [stripePromise] = useState(() => loadStripe("pk_test_ejdWQWajqC4QwST95KoZiDZK"))
    
    return (
        <>  
            
            <div className="max-w-5xl mx-auto ">
                <div className="flex flex-wrap space-y-7 md:space-y-0">
                    <div className="w-full lg:w-3/5  lg:pr-6 ">
                        <h2 className="text-xl font-medium  mb-4">Informacion de Contacto</h2>
                        <Elements stripe={stripePromise}>
                            <ClientInput />
                        </Elements>
                    </div>
                    <div className="w-full lg:w-2/5 space-y-6 ">
                        <h2 className="text-xl font-medium  mb-4">Resumen de pedido</h2>
                        <ResumenOrder/>
                    </div>
                </div>
            </div>
        </>
    )
}
