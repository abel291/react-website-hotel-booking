import React, { useState } from "react"

import TableData from "../TableData"

import { useStore } from "../../../context/StoreContext"
import TextLoadingSpinner from "../../../components/TextLoadingSpinner"
import useReservation from "../../../hooks/useReservation"
export default function Step4ResumenOrder() {
    const { data, step3Fetch } = useReservation()
    const [discountInput, setDiscountInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(false)
    const handleClickApplyCodeDiscount = async (e) => {
        if (!discountInput) {
            return
        }
        e.preventDefault()
        await step3Fetch(setLoading, setErrors, discountInput)
    }

    return (
        <>
            <TableData data={data}>
                <div className="mb-10 font-normal text-sm ">
                    <label htmlFor="discount_input" className="mb-1 form-input-label">
                        Codigo descuento
                        {data.discount && (
                            <div className="ml-2 inline-flex items-center">
                                <span className="text-green-500 text-sm"> Descuento aplicado {data.discount.percent}%</span>
                            </div>
                        )}
                    </label>
                    <div className="flex ">
                        <div className="flex-grow pr-2 ">
                            <input
                                className=" form-input form-input-border-normal"
                                id="discount_input"
                                type="text"
                                value={discountInput}
                                onChange={(e) => setDiscountInput(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleClickApplyCodeDiscount}
                            disabled={!discountInput || loading}
                            className="w-24 font-semibold text-white rounded-md  focus:outline-none bg-orange-500 disabled:opacity-25 inline-flex items-center justify-center"
                        >
                            <TextLoadingSpinner isLoading={loading} text="Aplicar" textLoading="" />
                        </button>
                    </div>

                    <span className="text-xs text-gray-400 font-semibold uppercase">{data.discountCodeExmaple.join(" - ")}</span>
                </div>
            </TableData>
        </>
    )
}
