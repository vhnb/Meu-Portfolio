import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardPost from "@/components/CardPost"
import jsonPosts from '../api/posts.json'
import { PaginationDemo } from "@/components/Pagination";
import { useState } from "react";

export default function Posts() {
    const posts_per_page = 8

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(jsonPosts.posts.length / posts_per_page)

    const startIndex = (currentPage - 1) * posts_per_page
    const endIndex = startIndex + posts_per_page

    const currentPosts = jsonPosts.posts.slice(startIndex, endIndex)

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
                <div className="flex items-start justify-center flex-col border-b border-[#b3b3b321] mb-[10px] w-full">
                    <Breadcrumb className="mt-[20px] mb-[20px]">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Início</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Postagens</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex items-start justify-center flex-col mb-[10px]">
                        <h1 className="text-[22px] font-semibold mb-[10px] md:text-[20px]">Conheça meu blog.</h1>
                        <p className="text-[14px] text-[#b3b3b3] mb-[20px] md:text-[15px]">No meu blog, compartilho insights, dicas e tutoriais sobre desenvolvimento front-end, além de projetos e inovações que tenho explorado.</p>
                    </div>
                </div>
                <div className="grid w-full mt-[28px] grid-cols-1 md:grid-cols-2 gap-[10px] mb-[28px]">
                    {currentPosts.map((item) => (
                        <CardPost
                            id={item.id}
                            title={item.post}
                            desc={item.desc}
                        />
                    ))}
                </div>
                <div className="mb-[28px] w-full flex justify-center items-center">
                    <PaginationDemo
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </main>
    )
}