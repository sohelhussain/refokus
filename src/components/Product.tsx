import { Button } from "./Button";

interface ProductProps{
    title: string,
    description: string,
    live: boolean,
    case: boolean,
    mover(val: number): void,
    count: number
}


export default function Product(Product: ProductProps){
    return <div className="w-full h-[23rem] p-20 text-white">
        <div onMouseEnter={() => Product.mover(Product.count)} className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-6xl font-medium capitalize">{Product.title}</h1>
            <div className="dets w-1/3">
                <p className="mb-10">{Product.description}</p>
                <div className="flex items-center gap-10">
                {Product.live && <Button />}
                {Product.case && <Button title="case Study" />}
                </div>
            </div>
        </div>
    </div>
}