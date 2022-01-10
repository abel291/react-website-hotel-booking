import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ChevronDownIcon } from "@heroicons/react/outline"
const optionInputDate = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    firstDayOfWeek: 1,
    locale: Spanish,
}

const InputReservation = () => {
    const history = useHistory()
    const [inputDate, setInputDate] = useState({
        startDate: new Date(new Date().toDateString()),
        endDate: new Date(new Date().toDateString()),
        adults: 0,
    })

    const handleSubmitReservation = (e) => {
        e.preventDefault()
        history.push({ pathname: "/reservation" })
    }

    const updateData = (name, value) => {
        setInputDate((prevData) => {
            return { ...prevData, [name]: value }
        })
    }

    useEffect(() => {
        let newEndDate = inputDate.startDate.setDate(inputDate.startDate.getDate() + 1)
        updateData("endDate", newEndDate)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="container mx-auto  -mt-20 md:-mt-16 pb-8 border-gray-300 border-b lg:border-none ">
            <form
                action="/reservation"
                className="flex flex-col items-center bg-white rounded-t-xl px-5 pt-5 overflow-hidden space-y-5 
                                         lg:space-y-0 lg:space-x-6 lg:flex-row lg:p-8
                                         lg:rounded-lg lg:shadow-xl"
            >
                <div className="grid-cols-1 w-full    gap-8 grid md:grid-cols-3  ">
                    <div>
                        <label htmlFor="start_date" className="font-medium block tracking-widest text-gray-400 uppercase">
                            Entrada:
                        </label>
                        <div className="lg:flex lg:items-center">
                            <Flatpickr
                                name="startDate"
                                value={inputDate.startDate}
                                className="w-40 px-0 border-none font-bold text-gray-500  border-transparent focus:ring-transparent"
                                options={{
                                    ...optionInputDate,
                                    minDate: "today",
                                }}
                                onChange={(date) => {
                                    let dateSelected = date[0]
                                    updateData("startDate", dateSelected)
                                    if (dateSelected >= inputDate.endDate) {
                                        let addDays = dateSelected.fp_incr(1)
                                        updateData("endDate", addDays)
                                    }
                                }}
                            />
                            <ChevronDownIcon className="h-4 w-4" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="end_date" className="font-medium block tracking-widest text-gray-400 uppercase">
                            Salida:
                        </label>
                        <div className="lg:flex lg:items-center">
                            <Flatpickr
                                id="endDate"
                                name="endDate"
                                value={inputDate.endDate}
                                className="w-40 px-0 border-none font-bold text-gray-500  border-transparent focus:ring-transparent"
                                options={{
                                    ...optionInputDate,
                                    minDate: inputDate.startDate,
                                }}
                                onChange={(date) => updateData("endDate", date[0])}
                            />
                            <label htmlFor="endDate">
                                <ChevronDownIcon className="h-4 w-4" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="end_date" className="font-medium block tracking-widest text-gray-400 uppercase">
                            Adultos:
                        </label>
                        <div className="lg:flex lg:items-center">
                            <select
                                className="form-input w-40 px-0 border-none font-bold text-gray-500  border-transparent focus:ring-transparent"
                                name="adults"
                                onChange={(e) => updateData("adults", e.target.value)}
                            >
                                <option value="1">1 Adulto</option>
                                <option value="2">2 Adultos</option>
                                <option value="3">3 Adultos</option>
                                <option value="4">4 Adultos</option>
                                <option value="5">5 Adultos</option>
                                <option value="6">6 Adultos</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-lg focus:outline-none bg-orange-500 text-white font-bold self-stretch uppercase text-center rounded-full lg:rounded-md  px-16  py-2 lg:text-left md:flex-grow"
                    aria-label="btn_reservar"
                    onClick={handleSubmitReservation}
                >
                    Reservar
                </button>
            </form>
        </div>
    )
}

export default InputReservation
