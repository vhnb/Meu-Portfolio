import { TbBrandFirebase, TbBrandBootstrap, TbBrandSass, TbBrandFigma, TbTableOptions } from "react-icons/tb"
import { ReactNode } from "react"
import { SiShadcnui } from "react-icons/si"

interface Tools {
    id: number
    icon: ReactNode
    alt: string
}

const iconStyle = {
    size: 24,
    color: "#b3b3b3"
}


export const tools: Tools[] = [
    { id: 1, icon: <SiShadcnui {...iconStyle} />, alt: "Shadcn" },
    { id: 2, icon: <TbBrandFigma {...iconStyle} />, alt: "Figma" },
    { id: 3, icon: <TbBrandBootstrap {...iconStyle} />, alt: "Bootstrap" },
    { id: 4, icon: <TbBrandSass {...iconStyle} />, alt: "Sass" },
    { id: 5, icon: <TbBrandFirebase {...iconStyle} />, alt: "Firebase" },
    { id: 6, icon: <TbTableOptions {...iconStyle} />, alt: "Gimp"}
]