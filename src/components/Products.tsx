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
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full"><img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d62264feae5abf67700d_Rainfall%20-%204%203.webp" alt="" /></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full"><img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5b41e4c40f758df5ecf_Remind%20-%204%203.webp" alt="" /></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full"><img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp" alt="" /></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full"><img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d84ab75f918dc8617448_YIR%202022%20-4%204.webp" alt="" /></motion.div>
                <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full"><img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d81b5919f738bad40a7c_Silvr%20-4%203.webp" alt="" /></motion.div>
            </motion.div>
        </div>
    </div>
}