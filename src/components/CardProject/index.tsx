import Image from "next/image"
import { TbChevronRight } from "react-icons/tb";
import { useRouter } from "next/router";

interface ContentProject {
    id: number,
    index: number,
    img: string,
    title: string,
    desc: string
}

export default function CardProject({ id, index, img, title, desc }: ContentProject) {
    const router = useRouter()

    function handleToPageDetail(id: number) {
        router.push(`/project/${id}`)
    }

    return (
        <article onClick={() => handleToPageDetail(id)} key={index} className="flex flex-col w-full cursor-pointer bg-[#151515] rounded-[10px] p-[14px] duration-[0.3s] border border-input border-[1px] hover:bg-[#1c1c1c]">
            <Image className="w-[100%] mb-[10px] rounded-[5px]" src={img} alt={title} width={500} height={250} />
            <div className="w-[100%] flex items-center justify-between flex-row">
                <h1 className="text-[15px] font-semibold">{title}</h1>
                <TbChevronRight size={18}/>
            </div>
            <p className="text-[12px] text-[#b3b3b3]">{desc}</p>
        </article>
    )
}