import { ReactNode } from "react"
import { motion } from "framer-motion"

interface ContentSkills {
    alt: string,
    icon: ReactNode,
    index: number
}

export default function CardSkills({ alt, icon, index }: ContentSkills) {
    return (
        <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: index * 0.05 }} className="bg-[#030303] flex flex-row items-start justify-between gap-[5px] rounded-[8px] duration-[0.3s] border border-input px-[12px] py-[5px] hover:bg-[#1c1c1c] select-none">
            {icon}
            <p className="text-[12px]">{alt}</p>
        </motion.article>
    )
}