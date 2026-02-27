import Marquee from "react-fast-marquee";
import { tools } from "@/data/tools";
import CardTools from "../CardTools";
import { ComponentProps } from "react"

type MarqueeDirection = ComponentProps<typeof Marquee>["direction"]

interface MarqueeToolsProps {
    direction: MarqueeDirection
}

export default function MarqueeTools({ direction }: MarqueeToolsProps) {
    return (
        <Marquee speed={15} direction={direction} autoFill={true} gradient={true} gradientColor="#030303" className="flex items-center justify-between w-[90%] max-w-[1000px]">
            {tools.map((doc) => (
                <CardTools key={doc.id} icon={doc.icon} alt={doc.alt} />
            ))}
        </Marquee>
    )
}