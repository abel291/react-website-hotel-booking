import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_green.css"
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { useState } from "react"
const SelectForm = ({handleSubmitReservation}) => {
    const [data, setData] = useState({ endDate: "", startDate: "", aduts: "", kids: "" })
    const optionInputDate = {
        altInput: true,
        altFormat: "M j, Y",
        dateFormat: "Y-m-d",
        firstDayOfWeek: 1,
        locale: Spanish,
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //handleSubmitReservation
    }
    return (
        <form className="text-sm space-y-4 " onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row ">
                <div className="mb-3 lg:mb-0 mr-0 lg:mr-3">
                    <label className="form-input-label" htmlFor="start_date">
                        Fecha de inicio
                    </label>
                    <Flatpickr
                        name="startDate"
                        value={""}
                        className="mt-1 form-input form-input-border-normal"
                        options={{
                            ...optionInputDate,
                            minDate: "today",
                        }}
                        onChange={(date) => {
                            let dateSelected = date[0]
                            setData({ ...data, startDate: dateSelected })
                            if (dateSelected >= data.endDate) {
                                let addDays = dateSelected.fp_incr(1)
                                setData({ ...data, endDate: addDays })
                            }
                        }}
                    />
                </div>

                <div className="">
                    <label className="form-input-label" htmlFor="end_date">
                        Fecha de final
                    </label>
                    <Flatpickr
                        name="endDate"
                        value={data.endDate}
                        className="mt-1 form-input form-input-border-normal"
                        options={{
                            ...optionInputDate,
                            minDate: data.startDate,
                        }}
                        onChange={(date) => setData({ ...data, endDate: date[0] })}
                    />
                </div>
            </div>

            <div className="flex w-full">
                <div className="w-1/2 mr-3">
                    <label className="form-input-label" htmlFor="adults">
                        Adultos
                    </label>

                    <select
                        onChange={(date) => setData({ ...data, adults: date[0] })}
                        value={data.adults}
                        className="form-input mt-1 "
                        name="adults"
                    >
                        <option value="1">1 Adulto</option>
                        <option value="2">2 Adultos</option>
                        <option value="3">3 Adultos</option>
                        <option value="4">4 Adultos</option>
                        <option value="5">5 Adultos</option>
                        <option value="6">6 Adultos</option>
                    </select>
                </div>

                <div className="w-1/2">
                    <label className="form-input-label" htmlFor="kids">
                        Niños
                    </label>

                    <select
                        onChange={(date) => setData({ ...data, kids: date[0] })}
                        value={data.kids}
                        name="kids"
                        className="form-input mt-1 form-select"
                    >
                        <option value="0">0 Niños</option>
                        <option value="1">1 Niño</option>
                        <option value="2">2 Niños</option>
                        <option value="3">3 Niños</option>
                        <option value="4">4 Niños</option>
                        <option value="5">5 Niños</option>
                        <option value="6">6 Niños</option>
                    </select>
                </div>
            </div>
            <div className="">
                <button type="submit" className=" w-full bg-orange-500 py-3  text-white rounded-full font-bold text-base">
                    Chekear disponibilidad
                </button>
            </div>
        </form>
    )
}

export default SelectForm
