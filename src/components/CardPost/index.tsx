import { useRouter } from "next/router"
import { TbChevronRight } from "react-icons/tb";

interface ContentPost {
    id: number,
    title: string,
    desc: string
}

export default function CardPost({ id, title, desc }: ContentPost) {
    const router = useRouter()

    function handleToPageDetail(id: number) {
        router.push(`/post/${id}`)
    }

    return (
        <article onClick={() => handleToPageDetail(id)} className="flex flex-col w-full cursor-pointer bg-[#151515] rounded-[10px] p-[14px] duration-[0.3s] border border-input border-[1px] hover:bg-[#1c1c1c]">
            <div className="w-[100%] flex items-center justify-between flex-row">
                <h1 className="text-[15px] font-semibold mb-[5px]">{title}</h1>
                <TbChevronRight size={18} />
            </div>
            <p className="text-[12px] text-[#b3b3b3] mr-[15px]">{desc}</p>
        </article>
    )
}