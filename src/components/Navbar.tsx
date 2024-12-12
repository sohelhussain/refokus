import { Button } from "./Button";

export function Navbar(){
    return(
        <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700¸">
            <div className="nleft flex items-center">
            <img className="w-5" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp" alt="" />
            <div className="flex gap-10 ml-10">
                {['Home', 'Wrok', 'Culture', '', 'News'].map((elem,index) => (
                    elem.length === 0 ? <span key={index} className="w-[2px] h-5 bg-zinc-500"></span> : <a key={index} className="text-sm gap-1 flex items-center">{index === 1 && ( <span key={index} style={{boxShadow: "0 0 0.45em #00FF19"}}className="rounded-full w-1 h-1 bg-green-500"></span>)}{elem}</a>))} 
            </div>
            </div>
            <Button />
        </div>
    )
}