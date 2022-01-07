import React from "react"
import { formatCurrency } from "../../../helpers/helpers"
import useReservation from "../../../hooks/useReservation"

export default function Step2Rooms() {
    const { data, updateData } = useReservation()

    const handleSelectRoom = (idRoom) => {
        let roomQuantity = document.getElementById("room_select_quantity_" + idRoom).value
        let roomSelected = data.rooms.find((x) => x.id === idRoom)
        let complements = roomSelected.complements
        //let complementsIds = []

        updateData("roomQuantity", parseInt(roomQuantity))
        updateData("roomSelected", roomSelected)
        updateData("complements", complements)
        //updateData("complementsIds", [])
        updateData("step", 3)
    }

    return (
        <>
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-8">
                <h2 className="text-2xl font-medium font-title ">Elija las Habitaciones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
                    {data.rooms.map((room) => (
                        <div key={room.id} className="shadow rounded-lg overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img
                                    src={"/img/rooms/thumbnail/" + room.thumbnail}
                                    alt={room.name}
                                    className="w-full h-64 object-cover transition duration-500 img-list-room filter brightness-75"
                                />

                                <div className="text-white leading-tight space-y-1 py-4 px-4 absolute bottom-0 left-0">
                                    <h3 className="font-medium text-xl">{room.name}</h3>
                                    <p className="text-xl font-light">
                                        <span className="text-2xl font-medium">{formatCurrency(room.price)}</span>

                                        <span className="text-base">/ noche</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white flex flex-wrap p-4  text-gray-600 space-y-4">
                                <div className="flex items-center w-full text-sm space-x-4">
                                    <span className="font-bold">Camas: +{room.beds} </span>
                                    <span className="font-bold">Adultos: +{room.adults} </span>
                                    <span className="font-bold">Niños: +{room.kids} </span>
                                </div>

                                <div className="w-full">
                                    <select
                                        defaultValue={data.roomSelected.id === room.id ? data.roomQuantity : 1}
                                        id={"room_select_quantity_" + room.id}
                                        className="w-full mt-1"
                                    >
                                        {room.quantity_availables.map((price, i) => (
                                            <option key={room.id + "-" + i} value={i + 1}>
                                                {i + 1 + " - " + formatCurrency(price)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={() => handleSelectRoom(room.id)}
                                    className="w-full py-2 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-md focus:outline-none "
                                >
                                    Selecionar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-3 ">
                    <button onClick={() => updateData("step", 1)} className="btn_back_step_reservation">
                        Volver
                    </button>
                </div>
            </div>
        </>
    )
}
