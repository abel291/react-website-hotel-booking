import React from "react"

import { useState } from "react"
import TextLoadingSpinner from "components/TextLoadingSpinner"
import ValidationErrors from "components/ValidationErrors"
import { formatCurrency } from "helpers/helpers"
import useReservation from "hooks/useReservation"
import Button from "components/Button"

//import { useEffect } from "react"
export default function Step3Complements() {
    const { data, updateData, step3Fetch } = useReservation()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
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

        await step3Fetch({ setErrors, setLoading })
    }

    return (
        <>
            <ValidationErrors errors={errors} />
            <div className="mx-auto max-w-5xl space-y-4 sm:space-y-8">
                <h2 className="text-2xl font-bold font-title ">Agregue complementos adicionale</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {data.roomSelected.complements.map((complement) => (
                        <div
                            key={data.roomSelected.id + "-" + complement.id}
                            className="flex item-start p-3 rounded space-x-3 bg-white border border-gray-200"
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
                                        <span className="font-bold text-lg">{formatCurrency(complement.price)}</span>
                                        <span className="text-sm">
                                            {complement.type_price === "reservation" ? " por reservacion" : " por noche"}
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <Button  className="btn-secondary mr-3" handleClick={() => updateData("step", 1)}>
                        Volver
                    </Button>

                    <Button  className="btn-primary"  handleClick={handleNextStep} processing={loading}>
                        Confirmar Datos
                    </Button>
                </div>
            </div>
        </>
    )
}
