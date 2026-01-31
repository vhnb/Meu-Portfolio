import { GetStaticPaths, GetStaticProps } from "next"
import jsonPosts from '../api/posts.json'
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

interface Post {
    id: number,
    post: string,
    imgs: string[],
    date: string,
    desc: string,
    tags: string[],
    link?: string
}

interface PostProps {
    post: Post
}

export default function Post({ post }: PostProps) {

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
                                <BreadcrumbLink href="/posts">Postagens</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{post.id}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <h1 className="text-[18px] mb-[10px] font-semibold">{post.post} / <span className="text-[#b3b3b3] text-[16px]">{post.date}</span></h1>
                <p className="text-[#b3b3b3] text-[14px] mb-[15px] md:text-[15px]">{post.desc}</p>
                <div className="flex flex-row mb-[20px]">
                    {post.tags.map((tag) => (
                        <article className="mr-[10px] text-[12px] py-[6px] px-[10px] duration-[0.3s] select-none border border-input border-[1px] hover:bg-[#1c1c1c] rounded-[5px]">{tag}</article>
                    ))}
                </div>
            </div>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = jsonPosts.posts.map(post => ({
        params: { id: post.id.toString() }
    }))

    return { paths, fallback: false }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = jsonPosts.posts.find(post => post.id === Number(params?.id))

    return {
        props: {
            post
        }
    }

}