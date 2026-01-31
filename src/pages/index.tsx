import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google"
import myPhoto from '../../public/assets/me.png'
import Marquee from "react-fast-marquee";
import jsonSkills from '../pages/api/skills.json'
import jsonProjects from '../pages/api/projects.json'
import CardSkills from "@/components/CardSkills";
import { ComboboxDemo } from "@/components/Combobox";
import { PaginationDemo } from "@/components/Pagination";
import { useState } from "react";
import CardProject from "@/components/CardProject";
import { Button } from "@/components/ui/button";
import { TbChevronRight } from "react-icons/tb";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern"

export default function Home() {

  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = selectedTech ? jsonProjects.projects.filter(project => project.skillsUsed.some(
    skill => skill.toLowerCase() === selectedTech.toLowerCase()
  )) : jsonProjects.projects

  const projects_per_page = 4

  const totalPages = Math.ceil(filteredProjects.length / projects_per_page)

  const startIndex = (currentPage - 1) * projects_per_page
  const endIndex = startIndex + projects_per_page

  const currentProjects = filteredProjects.slice(startIndex, endIndex)

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
        <div className="flex items-center justify-center flex-row border-b border-[#b3b3b321]">
          <div className="flex items-start justify-center flex-col mr-[50px]">
            <h1 className="text-[22px] font-semibold mb-[10px] md:text-[20px]">Olá, sou Victor — Desenvolvedor Front-End.</h1>
            <p className="text-[14px] text-[#b3b3b3] mb-[20px] md:text-[15px]">Sou desenvolvedor front-end com foco na criação de interfaces modernas, funcionais e bem estruturadas. Estou em constante evolução profissional, buscando aprimorar minhas habilidades e aplicar boas práticas para entregar soluções eficientes e de alta qualidade.</p>
            <Button onClick={() => window.location.href = '/posts'} className="mb-[28px] cursor-pointer md:mb-[0px]">Postagens <TbChevronRight /></Button>
          </div>
          <Image className="hidden rounded-[10px] h-auto w-[200px] mb-[30px] md:flex" src={myPhoto} alt="My Photo" />
        </div>
        <Marquee autoFill={true} className="flex items-center justify-between w-[90%] max-w-[1000px] mt-[28px] border-b border-[#b3b3b321]" pauseOnHover={true} gradient={true} gradientColor="#0a0a0a">
          {jsonSkills.skills.map((item) => (
            <CardSkills
              src={item.src}
              alt={item.alt}
            />
          ))}
        </Marquee>
        <div className="flex items-center justify-center flex-col w-[100%]">
          <div className="flex w-[100%] items-center justify-between flex-row mt-[28px]">
            <h1 className="text-[16px] font-semibold">Meus projetos</h1>
            <div>
              <ComboboxDemo
                onSelectTech={(tech) => {
                  setSelectedTech(tech)
                  setCurrentPage(1)
                }}
              />
            </div>
          </div>
          <div className="grid w-full mt-[28px] grid-cols-1 md:grid-cols-2 gap-[10px] mb-[28px]">
            {currentProjects.map((item, index) => (
              <CardProject
                id={item.id}
                index={index}
                title={item.project}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
          <div className="mb-[28px]">
            <PaginationDemo
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
