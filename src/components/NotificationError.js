import { Transition } from "@headlessui/react"

import { XCircleIcon,XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from "react"

export default function NotificationError({errors}) { 
    const [show, setShow] = useState(false)
    
    useEffect(()=>{
        if(errors.length !== 0){
            document.getElementById("root").scrollIntoView({ behavior: "smooth" })            
        }
        setShow(errors.length !== 0)
    },[errors])
    return (
        <Transition
            show={show}
            enter="transform transition duration-150"
            enterFrom="opacity-0  scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div className="flex max-w-2xl mx-auto w-full bg-red-100 rounded-md p-4 text-sm my-4">
                <div>
                    <XCircleIcon className="h-5 w-5 text-red-500" />                      
                </div>
                <div className="px-4 flex-grow">
                    <span className="text-red-700 font-semibold">Tienes Errores por revisar </span>
                    <ul className="list-disc text-red-600">
                        {
                        Array.isArray(errors) 
                            ? errors.map((msg, i) => <li key={i}>{msg}</li>) 
                            : <li>{errors}</li>
                        }
                    </ul>
                </div>
                <div>
                    <button type="button" onClick={(e) => setShow(false)} className="outline-none focus:outline-none">
                        <XIcon className="h-5 w-5 text-red-500"/>                        
                    </button>
                </div>
            </div>
        </Transition>
    )
}
