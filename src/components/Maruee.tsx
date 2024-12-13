import {motion} from 'framer-motion'

interface MarueeInter {
    imageUrl: string[],
    diraction: 'left' | 'right'
}


export default function Maruee({imageUrl, diraction}: MarueeInter){

    return <div className="w-full flex overflow-hidden">
        <motion.div initial={{x: diraction === 'left' ? "0%" : "-100%"}} animate={{x: diraction === 'left' ? "-100%" : "0%"}} transition={{ease: 'linear', duration: '15', repeat: Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageUrl.map((image, index) => <img key={index} src={image} alt="maruee" className="w-32 flex-shrink-0"  />)} 
        </motion.div>
        <motion.div initial={{x: diraction === 'right' ? "-100%" : "0%"}} animate={{x: diraction === 'right' ? "0%" : "-100%"}} transition={{ease: 'linear', duration: '15', repeat: Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageUrl.map((image, index) => <img key={index} src={image} alt="maruee" className="w-32 flex-shrink-0"  />)} 
        </motion.div>
    </div>
}