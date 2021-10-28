import React from "react"

import { useReservation } from "../context/ReservationContext"

import { useStore } from "../context/StoreContext"


import { useState } from "react"
import TextLoadingSpinner from "../components/TextLoadingSpinner"
//import { useEffect } from "react"
export default function Step3Complements() {
    const { formatNumber } = useStore()

    const { data, updateData, setErrors, apiStep3 } = useReservation()
    const [isLoading, setIsLoading] = useState(false)
    const handleChecked = (checked, idComplements) => {
        if (checked) {
            data.complementsIds.push(idComplements)
        } else {
            data.complementsIds = data.complementsIds.filter((x) => x !== idComplements)
        }
        updateData("complementsIds", data.complementsIds)
    }
    const handleNextStep = async (e) => {
        e.preventDefault()
        setErrors([])
        setIsLoading(true)
        await apiStep3().then(function () {
            setIsLoading(false)
        })
    }

    return (
        <>
            <div className="mx-auto max-w-5xl space-y-4 sm:space-y-8">
                <h2 className="text-2xl font-semibold font-title ">Agregue complementos adicionale</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.roomSelected.complements.map((complement) => (
                        <div
                            key={data.roomSelected.id + "-" + complement.id}
                            className="flex item-start shadow p-4 rounded space-x-3 bg-white border border-gray-50"
                        >
                            <div>
                                <input
                                    onClick={(e) => handleChecked(e.target.checked, complement.id)}
                                    type="checkbox"
                                    id={complement.id}
                                    className="form-checkbox  focus:ring-orange-500 h-5 w-5 text-orange-600 border-gray-300 rounded"
                                    value={complement.id}
                                    defaultChecked={data.complementsIds.includes(complement.id)}
                                />
                            </div>

                            <div className="flex flex-col  ">
                                <label htmlFor={complement.id}>
                                    <span className="font-bold ">{complement.name}</span>
                                    <p className="text-sm text-gray-400">{complement.description_min}</p>
                                    <div className="mt-3 ">
                                        <span className="font-bold text-lg">{formatNumber(complement.price)}</span>
                                        <span className="text-sm">
                                            {complement.type_price === "reservation" ? " por reservacion" : " por noche"}
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3 justify-end">
                    <button onClick={() => updateData("step", 2)} className="btn_back_step_reservation">
                        Volver
                    </button>

                    <button onClick={handleNextStep} className="btn_next_step_reservation" disabled={isLoading}>
                        <TextLoadingSpinner isLoading={isLoading} text="Confirmar Datos" textLoading="Calculando Monto..." />
                    </button>
                </div>
            </div>
        </>
    )
}
