import Image from "next/image"
import { TbChevronRight } from "react-icons/tb";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface ContentProject {
    id: number,
    index: number,
    img: string,
    title: string,
    desc: string,
}

export default function CardProject({ id, index, img, title, desc }: ContentProject) {
    const router = useRouter()

    function handleToPageDetail(id: number) {
        router.push(`/project/${id}`)
    }

    return (
        <motion.article initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.2, delay: index * 0.1 }} onClick={() => handleToPageDetail(id)} key={index} className="flex flex-col w-full cursor-pointer bg-[#030303] rounded-[10px] p-[14px] duration-[0.3s] border border-input hover:bg-[#0a0a0a] items-start justify-between">
            <Image className="w-[100%] mb-[10px] rounded-[5px]" src={img} alt={title} width={500} height={250} />
            <div className="w-full">
                <div className="w-[100%] flex items-center justify-between flex-row">
                    <h1 className="text-[15px] font-semibold">{title}</h1>
                    <TbChevronRight size={18} />
                </div>
                <p className="text-[12px] text-[#b3b3b3]">{desc}</p>
            </div>
        </motion.article>
    )
}