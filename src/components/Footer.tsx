

export default function Footer(){
    return <div className="w-full">
        <div className="max-w-screen-xl mx-auto flex gap-32">
            <div className="basis-1/2">
                <h1 className="text-[11.5rem] font-semibold tracking-tight">refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-4">
                 <div className="w-1/3">
                <h4 className="mb-10 text-zinc-300">Socials</h4>
                {["Instagram", "Twitter", "LinkedIn"].map((social, index) => <a key={index} className="block mt-3 text-zinc-400" href="#">{social}</a>)}
                </div>
                <div className="w-1/3">
                <h4 className="mb-10 text-zinc-300">Socials</h4>
                {["Instagram", "Twitter", "LinkedIn"].map((social, index) => <a key={index} className="block mt-3 text-zinc-400" href="#">{social}</a>)}
                </div>
            </div>
        </div>
    </div>
}