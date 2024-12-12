import Maruee from "./Maruee";
interface MarueeImages {
    image: string[][]
}

export default function Maruees(){
    const images: MarueeImages = { 
       image: [
        ["https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg"],
        ["https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg","https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg"]
    ]}
    return <div className="py-20 mt-32">
        {images.image.map((image, index) => <Maruee key={index} imageUrl={image}/>)}
    </div>
}