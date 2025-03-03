import ImageGetter from "@/assets/ImageGetter";
import LinkButton from "@/components/atoms/linkButton";
import { Sections } from "@/enums/global";

const Footer = () => {
    return (
        <div className="w-full xl:px-[93px]" id={Sections.FOOTER}>
            <div className="flex flex-col-reverse xl:flex-col">
                <div className="w-full px-5 xl:px-16">
                    <div className="w-full flex justify-between xl:justify-end xl:gap-20">
                        <LinkButton
                            label="Instagram"
                            link="https://www.instagram.com/m2studio.es/?igsh=MWhsb2xsMXp4MzQ4aw%3D%3D"
                        />
                        <LinkButton
                            label="Linkedin"
                            link=""
                        />
                        <LinkButton
                            label="Twitter"
                            link=""
                        />
                    </div>
                </div>
                <ImageGetter
                    folder="m2studio"
                    image="dark_logo"
                    classname="pl-5 xl:pl-10 xl:border-b"
                />
            </div>
            <div className="w-full flex text-xs xl:text-base font-light">
                <p className="w-1/2 xl:w-2/6 xl:border-r p-6 xl:p-6 xl:pl-16 text-left flex items-center">
                    Calle Rubens esq. Calle Fortuny <br />
                    Poligono Industrial Rabasa. <br />
                    03009 Alicante
                </p>
                <div className="w-1/2 xl:w-3/6 flex flex-col xl:flex-row p-6 xl:p-0">
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">info@m2studio.es</p>
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">(+34) 696 94 17 75</p>
                    <p className="w-full xl:w-1/3 xl:border-r xl:p-6 flex items-center justify-end xl:justify-center">Copyright 2025</p>
                </div>
                <p className="hidden xl:flex w-1/6 p-6 items-center justify-center text-5xl font-medium">25</p>
            </div>
            <div className="flex flex-col xl:flex-row border-t justify-between text-xs xl:text-base xl:child:p-16 p-4 xl:p-0 font-light">
                <p className="">Bsod Studio 2025</p>
                <p className="">Politica de Privacidad</p>
                <p className="">Terminos de uso</p>
            </div>
        </div>
    )
}

export default Footer;