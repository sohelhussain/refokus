import Product from "./Product";

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
    return <div className="mt-32">
        {prod.map((prod, index) => <Product key={index} title={prod.title} description={prod.description} live={prod.live} case={prod.case} />)}
    </div>
}