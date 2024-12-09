import { IoIosReturnRight } from "react-icons/io";

type ButtonProps = {
    title?: string
}

export function Button({title = "Get Started"}: ButtonProps){
    return (
        <div className="max-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center">
            <span className="text-sm font-medium">{title}</span>
           <IoIosReturnRight /> 
        </div>
    )
}