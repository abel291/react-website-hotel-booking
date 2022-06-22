import { formatCurrency } from "helpers/helpers"

export default function TableData({ data, children }) {
    return (
        <div className=" text-sm bg-white border border-gray-200 rounded divide-y divide-gray-200 ">
            <div className="px-3 md:px-6 py-4">
                <h3 className="font-bold mb-2">Reserva</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Entrada</span>
                        <span>{data.startDate.toISOString().slice(0, 10)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Salida</span>
                        <span>{data.endDate.toISOString().slice(0, 10)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Adultos</span>
                        <span>{data.adults}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Niños</span>
                        <span>{data.kids}</span>
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-6 py-4 space-y-2">
                <h3 className="font-bold mb-2">Habitacion</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Nombre de habitacion</span>
                        <span>{data.roomSelected.name}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Noches</span>
                        <span>{data.night}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Precio por noche</span>
                        <span>{formatCurrency(data.roomSelected.price)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Habitaciones</span>
                        <span>{data.roomQuantity}</span>
                    </div>

                    {(data.night > 1 || data.roomQuantity > 1) && (
                        <div className="flex justify-between">
                            <span>Precio total por habitaciones</span>
                            <span>{formatCurrency(data.pricePorReservation)}</span>
                        </div>
                    )}
                </div>
            </div>
            {data.complementsSelect.length > 0 && (
                <div className="px-3 md:px-6 py-4 space-y-2">
                    <h3 className="font-bold mb-2">Complementos</h3>
                    <div className="space-y-2">
                        {data.complementsSelect.map((com) => (
                            <div key={com.id} className="flex justify-between ">
                                <span >{com.name}</span>
                                <span>{formatCurrency(com.total_price)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="px-3 md:px-6 py-4 font-medium ">
                {children}
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Sub-total</span>
                        <span>{formatCurrency(data.subTotalPrice)}</span>
                    </div>
                    {data.discount && (
                        <div className="flex justify-between text-green-500">
                            <span >Descuento {data.discount.percent + "%"}</span>
                            <span>{formatCurrency(-data.discount.amount)}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="px-3 md:px-6 py-4 space-y-2">
                <div className="flex justify-between font-bold text-lg">
                    <span >Total</span>
                    <span>{formatCurrency(data.totalPrice)}</span>
                </div>
            </div>
        </div>
    )
}
