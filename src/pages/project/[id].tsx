import { GetStaticPaths, GetStaticProps } from "next"
import jsonProjects from '../api/projects.json'
import Image from "next/image"
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { TbExternalLink } from "react-icons/tb"
import { useRouter } from "next/router"

interface Project {
    id: number
    project: string
    img: string
    date: string
    desc: string
    extendedDesc: string
    skillsUsed: string[]
    repo?: string
}

interface ProjectProps {
    project: Project
}

export default function Project({ project }: ProjectProps) {

    function handleToExternalLink() {
        if (!project.repo) return

        window.open(project.repo, "_blank")
    }

    return (
        <main className="flex items-center justify-start min-h-[calc(100vh-70px)] flex-col">
            <div className="flex items-start justify-center w-[90%] max-w-[1000px] bg-[#0a0a0a] z-[0] flex-col">
                <GridPattern
                    width={40}
                    height={40}
                    strokeDasharray="2 2"
                    className="
                            absolute inset-0 
                            -z-10 
                            opacity-30
                            [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
                          "
                />
                <div className="w-full flex flex-rol items-center justify-between">
                    <Breadcrumb className="mt-[20px] mb-[20px]">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Início</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Projetos</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{project.id}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    {project.repo === "" ? (
                        <></>
                    ) : (
                        <Button onClick={handleToExternalLink} className="cursor-pointer">
                            <h1 className="hidden md:flex">Repositório</h1> <TbExternalLink />
                        </Button>
                    )}
                </div>
                <Image className="rounded-[10px] mb-[20px] h-[400px] md:h-[450px]" src={project.img} alt={project.project} height={450} width={1100} />
                <h1 className="text-[18px] mb-[10px] font-semibold">{project.project} / <span className="text-[#b3b3b3] text-[16px]">{project.date}</span></h1>
                <p className="text-[#b3b3b3] text-[14px] mb-[15px] md:text-[15px]">{project.extendedDesc}</p>
                <div className="flex flex-row mb-[20px]">
                    {project.skillsUsed.map((skill) => (
                        <article className="mr-[10px] text-[12px] py-[6px] px-[10px] duration-[0.3s] select-none border border-input border-[1px] hover:bg-[#1c1c1c] rounded-[5px]">{skill}</article>
                    ))}
                </div>
            </div>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = jsonProjects.projects.map(project => ({
        params: { id: project.id.toString() }
    }))

    return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = jsonProjects.projects.find(project => project.id === Number(params?.id))

    return {
        props: {
            project
        }
    }

}