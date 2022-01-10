import React, { useState } from "react"
import TableData from "../TableData"
import TextLoadingSpinner from "../../../components/TextLoadingSpinner"
import useReservation from "../../../hooks/useReservation"

import NotificationError from "../../../components/NotificationError"

export default function Step4ResumenOrder() {
    const { data, step3Fetch } = useReservation()
    const [discountInput, setDiscountInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])  
    const handleClickApplyCodeDiscount = async (e) => {
        if (!discountInput) {
            return
        }
        e.preventDefault()
        await step3Fetch({setErrors,setLoading, discountInput})
    }
    return (
        <>     
            
            <TableData data={data}>
                <NotificationError errors={errors} scroll={false} />
                <div className="mb-10 font-normal text-sm ">
                    <label htmlFor="discount_input" className="mb-1 font-medium">
                        Codigo descuento                        
                    </label>
                    <div className="flex items-stretch ">
                        <div className="flex-grow pr-2 ">
                            <input
                                className="form-input w-full text-sm"
                                id="discount_input"
                                type="text"
                                value={discountInput}
                                autoComplete="off"
                                onChange={(e) => setDiscountInput(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleClickApplyCodeDiscount}
                            disabled={!discountInput || loading}
                            className="w-24 font-medium text-white rounded-md  focus:outline-none bg-orange-500 disabled:opacity-25 inline-flex items-center justify-center"
                        >
                            <TextLoadingSpinner className="h-5 w-5 text-gray-100" isLoading={loading} text="Aplicar" textLoading="" />
                        </button>
                    </div>

                    <span className="text-xs text-gray-400 font-medium uppercase">{data.discountCodeExmaple.join(" - ")}</span>
                </div>
            </TableData>
        </>
    )
}
