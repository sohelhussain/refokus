import { Button } from "./Button";

interface ProductProps{
    title: string,
    description: string,
    live: boolean,
    case: boolean
}


export default function Product(Product: ProductProps){
    return <div className="w-full p-20 text-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <h1 className="text-6xl font-medium capitalize">{Product.title}</h1>
            <div className="dets w-1/3">
                <p className="mb-10">{Product.description}</p>
                <div className="flex items-center gap-10">
                {Product.live && <Button title="Live Demo" />}
                {Product.case && <Button title="case Study" />}
                </div>
            </div>
        </div>
    </div>
}