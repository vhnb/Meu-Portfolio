import styles from './styles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import myPhoto from '../../../public/assets/html.png'
import { useEffect } from 'react'

//data
import jsonPosts from '../../datas/posts.json'

export default function Blog() {
    useEffect(() => {
        const containerInfo = document.getElementById('containerInfo')
        containerInfo.style.transition = "opacity 0.5s ease-in-out"

        const contentPosts = document.getElementById('contentPosts')
        contentPosts.style.transition = 'opacity 0.5s ease-in-out'

        function showContainerPosts() {
            contentPosts.style.opacity = '1'
        }

        function showContainerInfo() {
            containerInfo.style.opacity = "1"
        }

        setTimeout(showContainerPosts, 500)
        setTimeout(showContainerInfo, 500)

        return () => {
            clearTimeout(showContainerInfo, showContainerPosts)
        }
    }, [])

    return (
        <main className={styles.container}>
            <Head>
                <title>Victor Henrique | Blog</title>
            </Head>
            <div className={styles.contentContainer}>
                <div id="containerInfo" className={styles.containerContentInfo}>
                    <div className={styles.contentTextInfo}>
                        <h1>Conheça meu <span>blog</span>.</h1>
                        <p>No meu blog, compartilho insights, dicas e tutoriais sobre desenvolvimento front-end, além de projetos e inovações que tenho explorado.</p>
                    </div>
                </div>
            </div>
            <div id='contentPosts' className={styles.contentPosts}>
                <h1>Confira minhas postagens</h1>
                {jsonPosts.posts.map((item) => (
                    <a href={`/post/${item.id}`} className={styles.containerPost}>
                        <p>{item.post}</p>
                        <span>{item.data}</span>
                    </a>
                ))}
            </div>
        </main>
    )
}