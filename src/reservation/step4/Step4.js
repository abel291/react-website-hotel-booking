import React, { useState } from "react"
import Step4ClientInput from "./Step4ClientInput.js"
import Step4ResumenOrder from "./Step4ResumenOrder.js"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

export default function Step4Client() {
    const [stripePromise] = useState(() => loadStripe("pk_test_ejdWQWajqC4QwST95KoZiDZK"))
    return (
        <>
            <div className="max-w-5xl mx-auto ">
                <div className="flex flex-wrap space-y-7 md:space-y-0">
                    <div className="w-full lg:w-3/5  lg:pr-6 ">
                        <h2 className="text-xl font-semibold  mb-4">Informacion de Contacto</h2>
                        <Elements stripe={stripePromise}>
                            <Step4ClientInput />
                        </Elements>
                    </div>
                    <div className="w-full lg:w-2/5 space-y-6 ">
                        <h2 className="text-xl font-semibold  mb-4">Resumen de pedido</h2>
                        <Step4ResumenOrder />
                    </div>
                </div>
            </div>
        </>
    )
}
