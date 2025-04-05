import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { GoArrowRight } from "react-icons/go";

export default function CardProject({ id, img, index, project, desc }) {
    return (
        <motion.a key={id} href={`/projeto/${id}`} className={styles.cardProject} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
            <img src={img} alt="Image Project" />
            <div className={styles.contentTextProject}>
                <h1>{project} <GoArrowRight className={styles.iconTitleProject} /></h1>
                <p>{desc}</p>
            </div>
        </motion.a>
    )
}