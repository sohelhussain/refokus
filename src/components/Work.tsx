import { useScroll } from "motion/react"
import { useState } from "react";

interface Images {
    url: string,
    top: string,
    left: string,
    isActive: boolean
}

export const Work = () => {
  const [images, setImage] = useState<Images[]>([
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "50%", left: "50%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "56%", left: "44%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "45%", left: "56%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "60%", left: "53%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "43%", left: "40%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "65%", left: "55%", isActive: false},
    ]);

    const {scrollYProgress} = useScroll();

    function imageShow(arr: number[]){
        setImage(prev => (
            prev.map((item, index) => (
                arr.indexOf(index) === -1 ? (
                    {...item, isActive: false}
                )
                : {...item, isActive: true}
            ))
        ))
    }

    scrollYProgress.on("change", latest => {
        switch(Math.floor(latest * 100)){
            case 0:
                imageShow([]);
                break;
            case 1:
                imageShow([0]);
                break;
            case 2:
                imageShow([0,1]);
                break;
            case 3:
                imageShow([0, 1,2]);
                break;
            case 4:
                imageShow([0,1,2,3]);
                break;
            case 5:
                imageShow([0,1,2,3,4]);
                break;
            case 6:
                imageShow([0,1,2,3,4,5])
                break;
        }
    })





    return (
        <div className="w-full mt-10">
            <div className="max-w-screen-xl relative mx-auto text-center">
                <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">work</h1>
                <div className="w-full h-full absolute top-0 left-0">
                    {images.map((elem, index) => (elem.isActive && <img key={index} className="w-60 rounded-lg absolute -translate-x-1/2 -translate-y-1/2" style={{left: elem.left, top: elem.top}} src={elem.url} alt="" />))}
                </div>
            </div>
        </div>
    )
}