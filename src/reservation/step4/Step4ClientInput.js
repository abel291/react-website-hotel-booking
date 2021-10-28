import React, { useRef } from "react"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

import { useReservation } from "../../context/ReservationContext.js"

import { useStore } from "../../context/StoreContext.js"

import { useState } from "react"
import TextLoadingSpinner from "../../components/TextLoadingSpinner.js"
export default function Step4Form() {
    const { dispatch } = useStore()
    const { data, updateData, setErrors, apiStep4 } = useReservation()
    const nameCardStripe = useRef()
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeInput = (e) => {
        let dataClient = { ...data.client, [e.target.name]: e.target.value }
        updateData("client", dataClient)
    }

    const handleSubmit = async (e) => {
        // Block native form submission.
        e.preventDefault()
        setErrors([])
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
        setIsLoading(true)
        // Obtenga una referencia a un CardElement montado
        const cardElement = elements.getElement(CardElement)

        //Use su elemento de tarjeta con otras API de Stripe.js
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: { name: nameCardInpu },
        })

        if (error) {
            setIsLoading(false)
            console.log("[error]", error)
            if (error.type === "validation_error") {
                setErrors(error.message)
            } else {
                setErrors("Al parecer hubo un error! El pago a través de su targeta no se pudo realizar.")
            }
        } else {
            dispatch({ type: "SET_LOADING", value: true })
            await apiStep4(paymentMethod).then(function () {
                dispatch({ type: "SET_LOADING", value: false })
                setIsLoading(false)
            })
        }
    }
    return (
        <>
            <div>
                <div className="space-y-6">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div>
                            <label htmlFor="name" className="form-input-label">
                                Nombre y apellido
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal "
                                name="name"
                                id="name"
                                type="text"
                                defaultValue={data.client.name}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="form-input-label">
                                Telefono
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal "
                                name="phone"
                                id="phone"
                                type="text"
                                defaultValue={data.client.phone}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="form-input-label">
                                Email
                            </label>
                            <input
                                defaultValue={data.client.email}
                                onChange={handleChangeInput}
                                className="mt-1 form-input form-input-border-normal "
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>

                        <div>
                            <label htmlFor="email_confirmation" className="form-input-label">
                                Confirmar email
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal "
                                name="email_confirmation"
                                id="email_confirmation"
                                type="email"
                                defaultValue={data.client.email}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor=" country" className="form-input-label">
                                Pais
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal "
                                name="country"
                                id="country"
                                type="text"
                                defaultValue={data.client.country}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="form-input-label">
                                Ciudad
                            </label>
                            <input
                                className="mt-1 form-input form-input-border-normal "
                                name="city"
                                id="city"
                                type="text"
                                defaultValue={data.client.city}
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="check_in" className="block font-semibold text-sm text-gray-600">
                                Hora de llegada
                            </label>
                            <Flatpickr
                                name="check_in"
                                className="mt-1 form-input form-input-border-normal "
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
                            <label htmlFor="special_request" className="form-input-label">
                                Peticion especial
                            </label>

                            <textarea
                                name="special_request"
                                id="special_request"
                                rows="5"
                                className="mt-1 form-input form-input-border-normal "
                                placeholder="Algo a tener en cuenta...."
                                defaultValue={data.client.special_request}
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200"></div>
            <div>
                <h2 className="text-xl font-semibold font-title my-4">Pago</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="titleCard" className="form-input-label">
                            Titular de la targeta
                        </label>
                        <input
                            className="mt-1 form-input form-input-border-normal"
                            id="titleCard"
                            type="text"
                            ref={nameCardStripe}
                            defaultValue={data.client.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="form-input-label">
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
                        <span className="text-xs text-gray-400 font-semibold uppercase">fake : 4242424242424242 - 04/24 - 424 - 42424</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 justify-end">
                <button onClick={() => updateData("step", 3)} className="btn_back_step_reservation">
                    Volver
                </button>

                <button onClick={handleSubmit} disabled={!stripe} className="btn_next_step_reservation">
                    <TextLoadingSpinner isLoading={isLoading} text="Confirmar orden" textLoading="Confirmando...." />
                </button>
            </div>
        </>
    )
}
