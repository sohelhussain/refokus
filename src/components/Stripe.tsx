interface Data {
    url: string,
    number: number
}

export const Stripe = ({url,number}: Data) => {

    return (
        <div className="w-[16.66%] p-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] flex justify-between items-center flex-shrink-0 border-zinc-700">
            <span className="w-28">
                <img className="w-full h-full object-cover" src={url} alt="" />
            </span>
            <span>{number}</span>
        </div>
    )
}