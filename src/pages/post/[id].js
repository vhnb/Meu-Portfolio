import styles from './styles.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import jsonPosts from '../../datas/posts.json'
import { GoArrowLeft } from "react-icons/go";

export default function Post() {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (id) {
            const foundPost = jsonPosts.posts.find(post => post.id === parseInt(id))
            setPost(foundPost)
        }
    }, [id])

    if (!post) {
        return (
            <div>
                Post não encontrado
            </div>
        )
    }

    return (
        <main className={styles.container}>
            <Head>
                <title>Victor Henrique | {post.post}</title>
            </Head>
            <div className={styles.contentPost}>
                <a href='/blog'><GoArrowLeft className={styles.iconBackToHome} /> Voltar</a>
                <h1>{post.post}</h1>
                <h2>{post.data}</h2>
                <p>{post.desc}</p>
                <a className={styles.linkPost} href={post.link} target='blank'>Clique para ver mais</a>
                <ul>
                    {post.tags.map((tags, index) => (
                        <li key={index}>{tags}</li>
                    ))}
                </ul>
                {post.imgs.map((imgs, index) => (
                    <img key={index} src={post.imgs} alt={post.imgs} />
                ))}
            </div>
        </main>
    )
}