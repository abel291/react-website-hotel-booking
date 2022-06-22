import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CalendarIcon } from "@heroicons/react/outline"

const optionInputDate = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    firstDayOfWeek: 1,
    locale: Spanish,
}
const FormReservation = () => {
    const history = useHistory()
    const [inputDate, setInputDate] = useState({
        startDate: new Date(new Date().toDateString()),
        endDate: new Date(new Date().toDateString()),
        adults: 0,
        kids: 0,
    })

    const hanldeSumbit = (e) => {
        e.preventDefault()
        history.push("/reservation")
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
        <div className="border-b border-gray-100">
            <div className="container mx-auto ">
                <form action="" onSubmit={hanldeSumbit} className="py-4  flex space-y-3 xl:space-y-0 flex-wrap ">
                    <div className="w-full xl:w-5/12 xl:pr-4 ">
                        <div className="flex flex-wrap  border border-gray-300 rounded-lg md:divide-x h-full">
                            <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center  ">
                                <div className="flex items-center">
                                    <span className="block md:hidden w-20 text-sm">Entrada:</span>
                                    <CalendarIcon className="h-5 w-5 hidden md:inline" />
                                </div>
                                <Flatpickr
                                    id="startDate"
                                    name="startDate"
                                    value={inputDate.startDate}
                                    className="form-input text-sm w-32 md:w-full border-none focus:outline-none focus:border-none ring-0 focus:ring-0 shadow-none"
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
                            </div>

                            <div className="w-full md:w-1/2  py-0 px-4 inline-flex space-x-2 items-center  ">
                                <div className="flex items-center">
                                    <span className="block md:hidden w-20 font-bold text-sm ">Salida:</span>
                                    <CalendarIcon className="h-5 w-5 hidden md:inline" />
                                </div>
                                <Flatpickr
                                    id="endDate"
                                    name="endDate"
                                    value={inputDate.endDate}
                                    className="form-input text-sm w-32 md:w-full border-none focus:outline-none focus:border-none ring-0 focus:ring-0 shadow-none"
                                    options={{
                                        ...optionInputDate,
                                        minDate: inputDate.startDate,
                                    }}
                                    onChange={(date) => updateData("endDate", date[0])}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-4/12 md:pr-4">
                        <div className="flex flex-wrap  border border-gray-300 rounded-lg md:divide-x h-full">
                            <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center">
                                <label htmlFor="" className="font-bold text-sm w-20 md:w-auto">
                                    Adultos:
                                </label>

                                <select
                                    className="focus:outline-none w-full rounded-md  border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent "
                                    name="adults"
                                    id="adults"
                                    onChange={(e) => updateData("adults", e.value)}
                                >
                                    <option value="1">1 </option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="w-full  md:w-1/2 py-0 px-4 inline-flex space-x-2 items-center">
                                <label className="font-bold text-sm w-20 md:w-auto">Niños:</label>

                                <select
                                    className="focus:outline-none w-full rounded-md  border-transparent focus:border-transparent hover:border-transparent ring-transparent focus:ring-transparent "
                                    name="kids"
                                    id="kids"
                                    onChange={(e) => updateData("adults", e.value)}
                                >
                                    <option value="0">0 </option>
                                    <option value="1">1 </option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="w-full md:w-1/2 xl:w-3/12  focus:outline-none text-sm h-full py-3 px-5 bg-orange-500 rounded-full text-white font-bold">
                        Chekear Disponibilidad
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormReservation
