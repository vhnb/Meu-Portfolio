import styles from './styles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import myPhoto from '../../../public/assets/html.png'
import { useEffect } from 'react'
import { motion } from "framer-motion";

//data
import jsonPosts from '../../datas/posts.json'

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
                    <motion.a key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }} href={`/post/${item.id}`} className={styles.containerPost}>
                        <p>{item.post}</p>
                        <span>{item.data}</span>
                    </motion.a>
                ))}
            </motion.div>
        </main>
    )
}