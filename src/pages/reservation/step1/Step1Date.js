//import React, { useEffect, useContext } from "react"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { Spanish } from "flatpickr/dist/l10n/es.js"

import { useState } from "react"
import TextLoadingSpinner from "../../../components/TextLoadingSpinner"
import useReservation from "../../../hooks/useReservation"

function Step1Date() {
    const { data, updateData, step1Fetch } = useReservation()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    //const location = useLocation()
    const optionInputDate = {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        firstDayOfWeek: 1,
        locale: Spanish,
    }

    const handleChange = (e) => {
        updateData([e.target.name], e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await step1Fetch({ setErrors, setLoading })
    }

    // useEffect(() => {
    //     let parameter = new URLSearchParams(location.search)
    //     if (parameter.get("startDate") && parameter.get("endDate") && parameter.get("adults")) {
    //         updateData("startDate", parameter.get("startDate"))
    //         updateData("endDate", parameter.get("endDate"))
    //         updateData("adults", parameter.get("adults"))
    //         document.getElementById("buttonSumbitStep1").click()
    //     }
    // }, [location.search,updateData])

    return (
        <>
            
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-8 ">
                <h2 className="text-2xl font-semibold font-title">Elija las Fechas</h2>
                <form id="sumbitStep1" className="space-y-4  font-semibold" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap ">
                        <div className="w-full sm:w-1/2 space-y-1 ">
                            <label className="block font-semibold text-sm" htmlFor="start_date">
                                Fecha de inicio
                            </label>
                            <Flatpickr
                                name="startDate"
                                value={data.startDate}
                                className="w-full"
                                options={{
                                    ...optionInputDate,
                                    minDate: "today",
                                }}
                                onChange={(date) => {
                                    let dateSelected = date[0]
                                    updateData( 'startDate', dateSelected )
                                    
                                    if (dateSelected >= data.endDate) {
                                        let addDays = dateSelected.fp_incr(1)
                                        updateData( 'endDate', addDays )
                                    }
                                    
                                }}
                            />
                        </div>

                        {/* input fecha final */}
                        <div className="w-full sm:w-1/2 space-y-1 sm:pl-3 mt-4 sm:mt-0">
                            <label className="block font-semibold text-sm" htmlFor="end_date">
                                Fecha de final
                            </label>
                            <Flatpickr
                                name="endDate"
                                value={data.endDate}
                                className="w-full"
                                options={{
                                    ...optionInputDate,
                                    minDate: data.startDate,
                                }}
                                onChange={(date) => updateData( 'endDate', date[0].toISOString().slice(0, 10))}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-3 w-full sm:w-1/2">
                        <div className="w-1/2 space-y-1 ">
                            <label className="block font-semibold text-sm" htmlFor="adults">
                                Adultos
                            </label>

                            <select
                                onChange={handleChange}
                                value={data.adults}
                                className="w-full"
                                name="adults"
                            >
                                <option value="1">1 Adulto</option>
                                <option value="2">2 Adultos</option>
                                <option value="3">3 Adultos</option>
                                <option value="4">4 Adultos</option>
                                <option value="5">5 Adultos</option>
                                <option value="6">6 Adultos</option>
                            </select>
                            <span className="pl-1 text-red-500 text-sm block"></span>
                        </div>

                        <div className="w-1/2 space-y-1 ">
                            <label className="block font-semibold text-sm" htmlFor="kids">
                                Niños
                            </label>

                            <select
                                onChange={handleChange}
                                value={data.kids}
                                name="kids"
                                className="w-full"
                            >
                                <option value="0">0 Niños</option>
                                <option value="1">1 Niño</option>
                                <option value="2">2 Niños</option>
                                <option value="3">3 Niños</option>
                                <option value="4">4 Niños</option>
                                <option value="5">5 Niños</option>
                                <option value="6">6 Niños</option>
                            </select>
                            <span x-text="errors.kids" className="pl-1 text-red-500 text-sm block"></span>
                        </div>
                    </div>
                    <div className="text-right">
                        <button id="buttonSumbitStep1" disabled={loading} type="submit" className="btn_next_step_reservation">
                            <TextLoadingSpinner
                                isLoading={loading}
                                className="h-5 w-5 text-gray-100"
                                text="Chekear disponibilidad"
                                textLoading="Buscando Disponibilidad..."
                            />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Step1Date
