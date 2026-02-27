import { motion } from "framer-motion"
import { ReactNode } from "react"

interface CardAboutProps {
    paraph?: string,
    img: string,
    width: string,
    index: number,
    height?: string,
    isEmpty?: boolean,
    content?: ReactNode
}

export default function CardAbout({ paraph, img, width, index, height, isEmpty, content }: CardAboutProps) {
    return (
        <motion.article initial={{ opacity: 0, scale: 0.98, filter: "blur(50px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.3, delay: index * 0.1 }} style={{ '--w': width, '--h': height } as React.CSSProperties} className={`relative flex rounded-[10px] p-[14px] h-[50vh] min-h-[200px] overflow-hidden border border-input transition-[0.4s] select-none w-full lg:w-[var(--w)] min-w-0 lg:h-[28vh] lg:h-[var(--h)] lg:min-h-[150px] ${isEmpty === true ? "items-center justify-center" : "items-end justify-start"}`}>
            {isEmpty === true ? (
                <>
                    {content}
                </>
            ) : (
                <>
                    <img src={img} alt="Information" className="absolute inset-0 w-full h-full object-cover" />
                    <p className="relative z-10 text-[12px] md:text-[15px]">{paraph}</p>
                </>
            )}
        </motion.article>
    )
}