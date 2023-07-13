'use client'

import { checkDone } from "@/services/todo/helpers/check-done"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
    id: string,
    isDone: boolean
}

export const InputDone = ({ id, isDone }: Props) => {
    const router = useRouter()
    const [isChecked, setIsChecked] = useState(isDone);


    const  toggleCheckboxChange = async() => {
        await checkDone(id, !isChecked)
        setIsChecked(!isChecked);
        router.refresh();
    };


    return (
        <>
            <label className="relative inline-flex items-center">
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                />
                <div className={`w-8 h-8 ${isChecked ? 'bg-green-500 border-green-800' : 'border-gray-400'} rounded-lg grid place-content-center border-2  flex-shrink-0 p-1 transition duration-300 ease-in-out mr-2`}>
                    {isChecked && (
                        <svg className="w-4 h-4 text-gray-100 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                    )}
                </div>
            </label>
            {/* <input type="checkbox" onChange={handleClick} checked={isDone} /> */}
        </>

    )
}
