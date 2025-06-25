import { motion } from "framer-motion"
import styles from './styles.module.css'

export default function CardBlog({ post, data, index, id }) {
    return (
        <motion.a key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }} href={`/post/${id}`} className={styles.containerPost}>
            <p>{post}</p>
            <span>{data}</span>
        </motion.a>
    )
}