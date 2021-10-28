const RoomSelectPrice = ({room}) => {
    return (
        <div>
            <div className="px-6 py-8 bg-gray-700 text-white">
                <span className="block text-sm mb-2">PRECIO</span>
                <div>
                    <span className="font-bold text-4xl">${room.price}.00</span>
                    <span className="text-lg">/ noche</span>
                </div>
            </div>
            <div className="px-6 py-6 space-y-4 border border-gray-200">
                <div className="flex items-center  space-x-8 font-semibold">
                    <span>Capacidad: {room.adults} </span>
                    <span>Niños: {room.kids}</span>
                </div>
                <div className="space-y-3 text-center">
                    <a
                        href="{{route('reservation.index')}}"
                        className="block w-full bg-orange-500 py-3 text-lg text-white rounded-full font-bold"
                    >
                        Reservar
                    </a>
                    <div className="text-sm text-gray-400">Consultar la disponibilidad de esta habitación</div>
                </div>
            </div>
        </div>
    )
}

export default RoomSelectPrice
