import { GoArrowRight } from "react-icons/go";
import {motion} from 'framer-motion';




type CardWidth = "small" | "large"



interface ICard {
    width: CardWidth;
    left: boolean;
    hover?: boolean
}

type RecodeCardSize = Record<CardWidth, string>

const cardSize: RecodeCardSize = {
    "small": "w-1/3",
    "large": "w-2/3"
}


export default function Card({width, left, hover=false}: ICard){

    return <motion.div whileHover={{backgroundColor: "#7443ff", padding: "25px"}} className={` p-5 min-h-[30rem] flex flex-col bg-zinc-800 rounded-xl ${cardSize[width]} justify-between`}>
       <div className="w-full">
        <div className="flex justify-between items-center w-full">
            heading
            <GoArrowRight />
        </div>
        <h1 className="text-3xl font-semibold mt-5">what ever heding</h1>
       </div> 
       <div className="w-full">
        {left === true ? null :( 
            <>
            <h1 className="text-6xl  font-semibold tracking-tight leading-none">Start a Project</h1>
            <button className="rounded-full border py-2 px-5 mt-5">Contact us</button>
            </>
    )}
        {left && <p className="text-zinc-400 font-light">Explore more projects</p>}
       </div>
    </motion.div>
}