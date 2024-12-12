
export default function Maruee({imageUrl}: {imageUrl: string[]}){

    return <div className="w-full flex p-5 gap-10 overflow-hidden">
        {imageUrl.map((image, index) => <img key={index} src={image} alt="maruee" className="w-32 flex-shrink-0"  />)} 
        {imageUrl.map((image, index) => <img key={index} src={image} alt="maruee" className="w-32 flex-shrink-0"  />)} 
    </div>
}