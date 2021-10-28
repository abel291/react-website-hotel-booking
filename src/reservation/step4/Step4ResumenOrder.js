import React, { useState } from "react"

import TableData from "../TableData"
import { useReservation } from "../../context/ReservationContext"
import { useStore } from "../../context/StoreContext"
import TextLoadingSpinner from "../../components/TextLoadingSpinner"
export default function Step4ResumenOrder() {
    const { formatNumber } = useStore()
    const { data, setErrors, apiStep3 } = useReservation()
    const [discountInput, setDiscountInput] = useState("")

    const [discountLoading, setDiscountLoading] = useState(false)
    const handleClickApplyCodeDiscount = async (e) => {
        if (!discountInput) {
            return
        }
        e.preventDefault()
        setErrors([])
        setDiscountLoading(true)
        await apiStep3(discountInput).then(function () {
            setDiscountLoading(false)
        })
    }

    return (
        <>
            <TableData data={data} formatNumber={formatNumber}>
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
                            disabled={!discountInput || discountLoading}
                            className="w-24 font-semibold text-white rounded-md  focus:outline-none bg-orange-500 disabled:opacity-50 inline-flex items-center justify-center"
                        >
                            <TextLoadingSpinner isLoading={discountLoading} text="Aplicar" textLoading="" />
                        </button>
                    </div>

                    <span className="text-xs text-gray-400 font-semibold uppercase">{data.discountCodeExmaple.join(" - ")}</span>
                </div>
            </TableData>
        </>
    )
}
