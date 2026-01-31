import { motion } from "framer-motion"
import Image from 'next/image'
import myPhoto from '../../../public/assets/me.png'
import { TbFile, TbBrandGithub, TbFolder } from "react-icons/tb";
import NavItem from "../NavItem";
import { useRouter } from "next/router";
import MenuMobile from "@/components/MenuMobile";

export default function Header() {
    const router = useRouter()

    function handleToHomePage() {
        router.push('/')
    }

    return (
        <header className="flex items-center justify-center sticky top-0 h-[70px] w-[100%] z-[999] bg-[#0a0a0a]/70 backdrop-blur-md">
            <div className="flex items-center justify-between w-[90%] max-w-[1000px] bg-transparent z-[998]">
                <div onClick={handleToHomePage} className="flex items-center justify-center cursor-pointer duration-[0.3s]">
                    <Image className="rounded-[10px] h-auto w-[40px] mr-[10px]" src={myPhoto} alt='My photo' />
                    <div className="hidden flex-col md:flex">
                        <h1 className="text-[#fff] text-[15px] font-bold">Victor Henrique</h1>
                        <p className="text-[#a1a1a1] text-[12px]">Desenvolvedor Front-end</p>
                    </div>
                </div>
                <nav className="hidden items-center justify-center flex-row md:flex">
                    <NavItem link="/posts" title="Postagens" targetBlank={false} icon={TbFolder} />
                    <NavItem link="https://github.com/vhnb" title="GitHub" targetBlank={true} icon={TbBrandGithub} />
                    <NavItem link="" title="Currículo" targetBlank={true} icon={TbFile} />
                </nav>
                <MenuMobile />
            </div>
        </header>
    )
}