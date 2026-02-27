import myPhoto from '../../public/assets/me.png'
import CardSkills from "@/components/CardSkills";
import { ComboboxDemo } from "@/components/Combobox";
import { PaginationDemo } from "@/components/Pagination";
import { useEffect, useState } from "react";
import CardProject from "@/components/CardProject";
import { Button } from "@/components/ui/button";
import { TbChevronRight, TbMail, TbChevronLeft } from "react-icons/tb";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern"
import { delay, motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { toast } from "sonner"
import CardAbout from "@/components/CardAbout";
import { skills } from "./api/skills";
import img from '../../public/assets/img.png'
import img2 from '../../public/assets/img2.png'
import img3 from '../../public/assets/img3.png'
import img4 from '../../public/assets/img4.jpg'
import img5 from '../../public/assets/img5.png'
import on from '../../public/texton.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import MarqueeTools from '@/components/CardCarouselResources/MarqueeTools';

interface Props {
  projects: {
    id: number
    project: string
    desc: string
    img: string
    skillsUsed: string[]
  }[]
}

export default function Home({ projects }: Props) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [copied, setCopied] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [time, setTime] = useState('')

  const filteredProjects = selectedTech ? projects.filter(project => project.skillsUsed.some(
    skill => skill.toLowerCase() === selectedTech.toLowerCase()
  )) : projects

  const projects_per_page = 4
  const totalPages = Math.ceil(filteredProjects.length / projects_per_page)
  const startIndex = (currentPage - 1) * projects_per_page
  const endIndex = startIndex + projects_per_page
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  async function copyMail() {
    try {
      await navigator.clipboard.writeText('victorsouza081007@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      toast.success('E-mail copiado para a área de transferência.')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    function update() {
      const now = new Date().toLocaleTimeString('pt-BR', { timeZone: "America/Sao_Paulo" })
      setTime(now)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex items-center justify-start min-h-[calc(100vh-70px)] flex-col">
      <div className="flex items-start justify-center w-[90%] max-w-[1000px] z-[0] flex-col">
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
            <motion.h1 initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }} className="text-[22px] font-semibold mb-[10px] md:text-[20px]">
              Olá, sou Victor — Desenvolvedor Front-End.
            </motion.h1>
            <motion.p initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[14px] text-[#b3b3b3] mb-[20px] md:text-[15px]">
              Sou desenvolvedor front-end com foco na criação de interfaces modernas, funcionais e bem estruturadas. Estou em constante evolução profissional, buscando aprimorar minhas habilidades e aplicar boas práticas para entregar soluções eficientes e de alta qualidade.
            </motion.p>
            <div className="flex flex-row gap-2 w-full md:w-auto">
              <motion.div initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Button onClick={() => window.location.href = '/posts'} className="mb-[28px] cursor-pointer md:mb-[0px]">Postagens <TbChevronRight /></Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Button variant="outline" onClick={copyMail} className="mb-[28px] cursor-pointer md:mb-[0px]">Contato <TbMail /></Button>
              </motion.div>
            </div>
          </div>
          <motion.img initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.5 }} className="hidden rounded-[10px] h-auto w-[200px] mb-[30px] md:flex" src={myPhoto.src} alt="My Photo" />
        </div>
        <div className="flex items-center justify-center flex-col w-[100%]">
          <div className="flex w-[100%] items-center justify-between flex-row mt-[28px]">
            <h1 className="text-[16px] font-semibold">Tech Stack</h1>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px] w-full mt-[15px] flex-wrap">
            {skills.map((doc) => (
              <CardSkills alt={doc.alt} icon={doc.icon} index={doc.id} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-[100%]">
          <div className="flex w-[100%] items-center justify-between flex-row mt-[28px]">
            <h1 className="text-[16px] font-semibold">Sobre mim</h1>
            <div className="flex md:hidden gap-[5px]">
              <Button variant="outline" size="icon-sm" onClick={() => api?.scrollPrev()}>
                <TbChevronLeft />
              </Button>
              <Button variant="outline" size="icon-sm" onClick={() => api?.scrollNext()}>
                <TbChevronRight />
              </Button>
            </div>
          </div>
          <Carousel setApi={setApi} className='w-full max-w-[1000px]'>
            <CarouselContent>
              <CarouselItem className="h-full">
                <div className="flex flex-col w-full mt-[28px] gap-[10px] mb-[28px] h-full lg:flex-row">
                  <CardAbout paraph="Always on." img={on.src} width="45%" index={1} height="full" />
                  <div className="flex flex-col gap-[10px] lg:flex-col min-w-0">
                    <div className="flex flex-col gap-[10px] lg:flex-row">
                      <CardAbout img={img.src} width="100%" index={2} height="28vh" isEmpty
                        content={
                          <div className='flex flex-col gap-[10px]'>
                            <MarqueeTools direction='right' />
                            <MarqueeTools direction='left' />
                            <MarqueeTools direction='right' />
                            <MarqueeTools direction='left' />
                            <MarqueeTools direction='right' />
                            <MarqueeTools direction='left' />
                            <MarqueeTools direction='right' />
                          </div>
                        }
                      />
                      <CardAbout paraph={`Brazil BRT — ${time}`} img={img5.src} width="100%" index={3} height="28vh" />
                    </div>
                    <CardAbout img={img.src} width="100%" index={4} height="28vh" isEmpty
                      content={
                        <>
                          <div className='flex items-center justify-center flex-col z-10'>
                            <h1 className='text-[20px] text-center font-bold mb-[10px] md:text-[30px]'>Tem uma ideia? Vamos construir juntos.</h1>
                            <p className='text-[12px] text-[#b3b3b3] text-center w-[80%] md:text-[14px] mb-[15px] md:mb-[0px]'>Estou disponível para novas oportunidades e colaborações. Entre em contato pelo <a target='_blank' href='https://www.linkedin.com/in/victor-henrique-405618284/' className='text-[#fff]'>LinkedIn</a> ou <span className='text-[#fff] cursor-pointer' onClick={copyMail}>e-mail</span>.</p>
                            <div className="flex flex-row gap-2 w-full md:w-auto md:hidden items-center justify-center">
                              <motion.div initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.3 }}>
                                <Button onClick={() => window.location.href = 'https://www.linkedin.com/in/victor-henrique-405618284/'} className="mb-[28px] cursor-pointer md:mb-[0px]">LinkedIn</Button>
                              </motion.div>
                              <motion.div initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, delay: 0.4 }}>
                                <Button variant="outline" onClick={copyMail} className="mb-[28px] cursor-pointer md:mb-[0px]">E-mail</Button>
                              </motion.div>
                            </div>
                          </div>
                        </>
                      }
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col w-full mt-[28px] gap-[10px] mb-[28px]">
                  <div className="flex flex-col gap-[10px] lg:flex-row">
                    <CardAbout paraph="Ensino Médio Técnico concluído — FIAP School, 3 anos." img={img.src} width="60%" index={1} height="28vh" />
                    <CardAbout paraph="Transformo ideias em interfaces funcionais e visualmente impactantes." img={img3.src} width="40%" index={2} height="28vh" />
                  </div>
                  <div className="flex flex-col gap-[10px] lg:flex-row">
                    <CardAbout paraph="Baseado em São Paulo — aberto a oportunidades remotas e presenciais." img={img4.src} width="40%" index={3} height="28vh" />
                    <CardAbout paraph="Cursando Bacharelado em Ciência da Computação na FIAP." img={img2.src} width="60%" index={4} height="28vh" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const jsonProjects = require('../pages/api/projects.json')

  return {
    props: {
      projects: jsonProjects.projects,
    },
  }
}
