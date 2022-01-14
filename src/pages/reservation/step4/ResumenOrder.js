import React, { useState } from "react"
import TableData from "pages/reservation/TableData"
import TextLoadingSpinner from "components/TextLoadingSpinner"
import useReservation from "hooks/useReservation"

import NotificationError from "components/NotificationError"
import Input from "components/Input"
import Button from "components/Button"

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
        await step3Fetch({ setErrors, setLoading, discountInput })
    }
    return (
        <>
            <TableData data={data}>
                <NotificationError errors={errors} scroll={false} />
                <div className="mb-10 font-normal text-sm ">
                    
                    <div className="flex items-end gap-x-3">
                        <div className="flex-grow  ">
                            <Input
                                label="Codigo descuento "
                                name="code_discount"
                                handleChange={(e) => setDiscountInput(e.target.value)}
                                value={discountInput}
                                autoComplete="off"
                            />
                        </div>
                        
                        <button
                            onClick={handleClickApplyCodeDiscount}
                            disabled={!discountInput || loading}
                            className="w-24 py-3 btn btn-primary"
                        >
                            <TextLoadingSpinner className="h-5 w-5 text-gray-100" isLoading={loading} text="Aplicar" textLoading="" />
                        </button>
                    </div>

                    <div className="text-md mt-2 text-gray-400 font-medium ">{data.discountCodeExmaple.join(" - ")}</div>
                </div>
            </TableData>
        </>
    )
}
