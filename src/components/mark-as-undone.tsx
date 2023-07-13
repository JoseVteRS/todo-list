'use client'

import { checkDone } from "@/services/todo/helpers/check-done"
import { useRouter } from "next/navigation"

interface Props {
    id: string
}

export const MarkAsUndoneButton = ({ id }: Props) => {
    const router = useRouter()
    const handleClick = async () => {
        await checkDone(id, false)
        router.refresh();
    }


    return (
        <button onClick={handleClick} className="bg-red-500 p-1 rounded-full w-6 h-6 grid place-content-center font-bold" >
            ✕
        </button>
    )
}
