import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ContentSkills {
    src: string,
    alt: string
}

export default function CardSkills({ src, alt }: ContentSkills) {
    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <article className="flex items-center justify-center p-[5px] ml-[25px] mr-[25px]">
                        <img className="h-[40px] w-[40px] rounded-[10px] mb-[28px]" src={src} alt={alt} />
                    </article>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{alt}</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}