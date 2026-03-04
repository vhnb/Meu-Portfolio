import { TbBrandJavascript, TbBrandTypescript, TbBrandNextjs, TbBrandReact, TbBrandHtml5, TbBrandCss3, TbBrandTailwind, TbBrandSvelte, TbBrandGit } from "react-icons/tb"
import { ReactNode } from "react"

interface Skill {
    id: number
    icon: ReactNode
    alt: string
}

const iconStyle = {
    size: 18,
    color: "#b3b3b3"
}

export const skills: Skill[] = [
    { id: 1, icon: <TbBrandJavascript {...iconStyle} />, alt: "JavaScript" },
    { id: 2, icon: <TbBrandTypescript {...iconStyle} />, alt: "TypeScript" },
    { id: 3, icon: <TbBrandNextjs {...iconStyle} />, alt: "Next.js" },
    { id: 4, icon: <TbBrandReact {...iconStyle} />, alt: "React.js" },
    { id: 6, icon: <TbBrandHtml5 {...iconStyle} />, alt: "HTML" },
    { id: 7, icon: <TbBrandCss3 {...iconStyle} />, alt: "CSS" },
    { id: 11, icon: <TbBrandTailwind {...iconStyle} />, alt: "Tailwind" },
    { id: 13, icon: <TbBrandSvelte {...iconStyle} />, alt: "Svelte", },
    { id: 13, icon: <TbBrandGit {...iconStyle} />, alt: "Git", }
]
