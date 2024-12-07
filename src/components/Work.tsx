
interface Images {
    url: string,
    top: string,
    left: string,
    isActive: boolean
}

export const Work = () => {
    let images: Images[] = [
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "50%", left: "50%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "56%", left: "44%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "45%", left: "56%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "60%", left: "53%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "43%", left: "40%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3457b4b40a7d9d2ea3_arqitel-special-feature-02.webp", top: "65%", left: "55%", isActive: false},
    ]
    return (
        <div className="w-full mt-10">
            <div className="max-w-screen-xl relative mx-auto text-center">
                <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">work</h1>
                <div className="w-full h-full absolute top-0 left-0">
                    {images.map((elem, index) => (elem.isActive && <img className="w-60 rounded-lg absolute -translate-x-1/2 -translate-y-1/2" style={{left: elem.left, top: elem.top}} src={elem.url} alt="" />))}
                </div>
            </div>
        </div>
    )
}