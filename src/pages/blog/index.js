import styles from './styles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import myPhoto from '../../../public/assets/html.png'
import { useEffect } from 'react'
import { motion } from "framer-motion";
import jsonPosts from '../../datas/posts.json'
import CardBlog from '@/components/CardBlog'

export default function Blog() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Victor Henrique | Blog</title>
            </Head>
            <div className={styles.contentContainer}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className={styles.containerContentInfo}>
                    <div className={styles.contentTextInfo}>
                        <h1>Conheça meu <span>blog</span>.</h1>
                        <p>No meu blog, compartilho insights, dicas e tutoriais sobre desenvolvimento front-end, além de projetos e inovações que tenho explorado.</p>
                    </div>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className={styles.contentPosts}>
                <h1>Confira minhas postagens</h1>
                {jsonPosts.posts.map((item, index) => (
                    <CardBlog 
                        post={item.post}
                        data={item.data}
                        index={index}
                        id={item.id}
                    />
                ))}
            </motion.div>
        </main>
    )
}