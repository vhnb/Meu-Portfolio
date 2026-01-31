import { IconType } from "react-icons"

interface NavContent {
    link: string,
    title: string,
    targetBlank: boolean,
    icon: IconType
}

export default function NavItem({link, title, targetBlank, icon: Icon}: NavContent) {
    return(
        <a href={link} target={targetBlank ? '_blank' : undefined} className="flex items-start justify-start px-[10px] py-[6px] ml-[5px] text-[#cacaca] text-[13px] rounded-[6px] duration-[0.3s] cursor-pointer hover:text-[#fff] hover:bg-[#24242482] md:items-center md:justify-center">
            <Icon className="mr-[5px] text-[18px] bg-transparent flex"/>
            {title}
        </a>
    )
}