import React from "react"

import { CheckCircleIcon } from "@heroicons/react/solid"
import TableData from "./TableData"

import { formatCurrency } from "../../helpers/helpers"
import useReservation from "../../hooks/useReservation"

export default function Step5Complete() {   
    
    const {data,resetData} =useReservation()
    
    return (
        <>
            <div className="max-w-3xl  mx-auto  space-y-4 md:space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-title ">Orden {"#" + data.order}</h2>

                    <div className="bg-green-100 p-2 md:p-4 flex space-x-2 rounded-md">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" />
                        <div className="text-green-700">
                            <span className="font-medium block text-green-700">Orden completada</span>
                            <span className="text-green-600"> Gracias. Tu orden ha sido recibida .Todo los datos han sido enviados a tu correo</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap item-stretch  sm:divide-x divide-gray-200  sm:space-y-0">
                        <div className="w-1/2 md:w-auto md:pr-5 mb-2 md:mb-0">
                            <span className=" uppercase text-xs ">numero de orden</span>
                            <div className=" font-medium ">{"#" + data.order}</div>
                        </div>
                        <div className="w-1/2 md:w-auto md:px-5 mb-2 md:mb-0">
                            <span className=" uppercase text-xs ">Fecha</span>
                            <div className=" font-medium ">{data.create_date}</div>
                        </div>
                        <div className="w-1/2 md:w-auto md:px-5 mb-2 md:mb-0">
                            <span className=" uppercase text-xs ">total</span>
                            <div className=" font-medium ">{formatCurrency(data.totalPrice)}</div>
                        </div>
                        <div className="w-1/2 md:w-auto md:px-5 mb-2 md:mb-0">
                            <span className=" uppercase text-xs ">metodo de pago</span>
                            <div className=" font-medium ">Targeta de credito</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 ">
                    <h2 className="text-xl font-medium font-title mb-4  ">Resumen de pedido</h2>
                    <TableData data={data} />
                </div>
                <div className="flex flex-col md:flex-row justify-end md:space-x-3 space-y-2 md:space-y-0">
                    <button onClick={resetData} className="btn_back_step_reservation">
                        Volver al inicio
                    </button>

                    <a
                        className="w-full sm:w-auto btn_next_step_reservation"
                        href={process.env.REACT_APP_BACKEND_URL+`/reservation/report_pdf?order=${data.order}&email=${data.client.email}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Ver comprobante
                    </a>
                </div>
            </div>
        </>
    )
}
