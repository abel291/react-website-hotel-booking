import React, { useRef } from "react"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react"
import TextLoadingSpinner from "../../../components/TextLoadingSpinner.js"
import Loading from "../../../components/Loading.js"
import useReservation from "../../../hooks/useReservation.js"
import NotificationError from "../../../components/NotificationError.js"
export default function Step4Form() {
    const { data, updateData, step4Fetch } = useReservation()
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingStripe, setLoadingStripe] = useState(false)

    const nameCardStripe = useRef()
    const stripe = useStripe()
    const elements = useElements()

    const handleChangeInput = (e) => {
        let dataClient = { ...data.client, [e.target.name]: e.target.value }
        updateData("client", dataClient)
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        setErrors([])
        setLoadingStripe(true)
        setLoading(false)

        let nameCardInpu = nameCardStripe.current.value
        if (!nameCardInpu) {
            setErrors(["El nombre del titular de la targeta es requerido"])
            return
        }

        if (!stripe || !elements) {
            // Stripe.js aún no se ha cargado. Asegúrate de deshabilitar
            // envío del formulario hasta que se haya cargado Stripe.js.
            return
        }
        
        // Obtenga una referencia a un CardElement montado
        const cardElement = elements.getElement(CardElement)

        //Use su elemento de tarjeta con otras API de Stripe.js
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: { name: nameCardInpu },
        })

        if (error) {
            setLoadingStripe(false)
            console.log("[error]", error)
            if (error.type === "validation_error") {
                setErrors([error.message])
            } else {
                setErrors(["Al parecer hubo un error! El pago a través de su targeta no se pudo realizar."])
            }
        } else {
            setLoadingStripe(false)
            await step4Fetch({ setErrors, setLoading, paymentMethod })
        }
    }
    return (
        <>
            <div>
                <Loading isLoading={loading} />
                <div>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium block">
                                Nombre y apellido
                            </label>
                            <input
                                className="form-input text-sm mt-1 w-full"
                                name="name"
                                id="name"
                                type="text"
                                defaultValue={data.client.name}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="text-sm font-medium block">
                                Telefono
                            </label>
                            <input
                                className="form-input text-sm mt-1 w-full"
                                name="phone"
                                id="phone"
                                type="text"
                                defaultValue={data.client.phone}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium block">
                                Email
                            </label>
                            <input
                                defaultValue={data.client.email}
                                onChange={handleChangeInput}
                                className="form-input text-sm mt-1 w-full"
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>

                        <div>
                            <label htmlFor="email_confirmation" className="text-sm font-medium block">
                                Confirmar email
                            </label>
                            <input
                                className="form-input text-sm mt-1 w-full"
                                name="email_confirmation"
                                id="email_confirmation"
                                type="email"
                                defaultValue={data.client.email}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor=" country" className="text-sm font-medium block">
                                Pais
                            </label>
                            <input
                                className="form-input text-sm mt-1 w-full"
                                name="country"
                                id="country"
                                type="text"
                                defaultValue={data.client.country}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="text-sm font-medium block">
                                Ciudad
                            </label>
                            <input
                                className="form-input text-sm mt-1 w-full"
                                name="city"
                                id="city"
                                type="text"
                                defaultValue={data.client.city}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="check_in" className="text-sm font-medium block">
                                Hora de llegada
                            </label>
                            <Flatpickr
                                name="check_in"
                                className="form-input text-sm mt-1 w-full"
                                options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "G:i K",
                                    time_24hr: false,
                                    defaultDate: data.client.check_in,
                                }}
                                onChange={(date) => {
                                    let hour = date[0].toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
                                    updateData("client", { ...data.client, check_in: hour })
                                }}
                            />
                        </div>

                        <div className="special_request  sm:col-span-2">
                            <label htmlFor="special_request" className="text-sm font-medium block">
                                Peticion especial
                            </label>

                            <textarea
                                name="special_request"
                                id="special_request"
                                rows="5"
                                className="form-input text-sm mt-1 w-full"
                                placeholder="Algo a tener en cuenta...."
                                defaultValue={data.client.special_request}
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-medium my-4">Pago</h2>
                <div className="space-y-4">
                    <NotificationError errors={errors} scroll={false} />
                    <div>
                        <label htmlFor="titleCard" className="text-sm font-medium block">
                            Titular de la targeta
                        </label>
                        <input className="form-input text-sm mt-1 w-full" id="titleCard" type="text" ref={nameCardStripe} defaultValue={data.client.name} />
                    </div>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium block">
                            Targeta de credito
                        </label>
                        <div className="px-3 py-2.5 bg-white mt-1 border border-gray-300 rounded-md shadow-sm ">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            color: "#303238",
                                            fontSize: "14px",
                                            fontFamily: '"Open Sans", sans-serif',
                                            fontSmoothing: "antialiased",
                                            "::placeholder": {
                                                color: "#CFD7DF",
                                            },
                                        },
                                        invalid: {
                                            color: "#e5424d",
                                            ":focus": {
                                                color: "#303238",
                                            },
                                        },
                                    },
                                }}
                            ></CardElement>
                        </div>
                        <span className="text-xs text-gray-400 font-medium uppercase">fake : 4242424242424242 - 04/24 - 424 - 42424</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 justify-end">
                                <label htmlFor=""> {loadingStripe?1:0}</label>
                <button onClick={() => updateData("step", 3)} className="btn_back_step_reservation">
                    Volver
                </button>

                <button onClick={handleSubmit} disabled={!stripe || loadingStripe} className="btn_next_step_reservation" >
               
                    <TextLoadingSpinner className="w-5 h-5 text-gray-100" isLoading={loadingStripe} text="Confirmar orden" textLoading="Confirmando...." />
                </button>
            </div>
        </>
    )
}
