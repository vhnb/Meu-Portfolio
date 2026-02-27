import { ReactNode } from "react"

interface CardToolsProps {
    alt: string,
    icon: ReactNode
}

export default function CardTools({ alt, icon }: CardToolsProps) {
    return (
        <article className="flex flex-row items-end justify-start border border-input p-[5px] rounded-[8px] mr-[10px] bg-[#18181836] brightness-[70%]">
            <div className="p-[5px] rounded-[5px] border border-input mr-[10px]">
                {icon}
            </div>
            <p className="text-[15px] font-extralight mr-[10px] text-[#b3b3b3]">{alt}</p>
        </article>
    )
}