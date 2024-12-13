import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

interface ProductProps{
    title: string,
    description: string,
    live: boolean,
    case: boolean
}

export default function Products(){
    const prod: ProductProps[] = [
        {title: "articsq", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a commodi eius pariatur distinctio sed dolores magni.", live: true, case: false},
        {title: "ttr", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit corporis dicta officiis provident ad excepturi nemo?", live: true, case: false},
        {title: "yir 2022", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit corporis dicta officiis provident ad excepturi nemo?", live: true, case: true},
        {title: "yahoo", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit corporis dicta officiis provident ad excepturi nemo?", live: true, case: false},
        {title: "ttr", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit corporis dicta officiis provident ad excepturi nemo?", live: true, case: false},
    ]

    const [pos, setPost] = useState<number>(0);

    function mover(val: number){
        setPost(val * 23)
    }

    return <div className="mt-32 relative">
        {prod.map((prod, index) => <Product key={index} count={index} mover={mover} title={prod.title} description={prod.description} live={prod.live} case={prod.case} />)}
        <div className="w-full h-full absolute top-0 pointer-events-none">
            <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .6}} className="w-[32rem] h-[23rem] bg-sky-100 absolute left-[44%] overflow-hidden translate-y-[23rem]  ">
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-green-100"></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-yellow-200"></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-yellow-300"></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-yellow-400"></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-yellow-500"></motion.div>
            </motion.div>
        </div>
    </div>
}