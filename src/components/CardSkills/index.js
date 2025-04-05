import styles from './styles.module.css'

export default function CardSkills({ src, alt }) {
    return (
        <article className={styles.cardSkill}>
            <img src={src} alt={alt} />
        </article>
    )
}