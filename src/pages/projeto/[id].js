import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

//data
import jsonProjects from '../../datas/projects.json'

//icon
import { GoArrowLeft } from "react-icons/go";

export default function Projeto() {
    const router = useRouter()
    const { id } = router.query
    const [project, setProject] = useState(null)

    useEffect(() => {
        if (id) {
            const foundProject = jsonProjects.projects.find(project => project.id === parseInt(id))
            setProject(foundProject)
        }
    }, [id])

    if (!project) {
        return (
            <div>
                Projeto não encontrado
            </div>
        )
    }

    return (
        <main className={styles.container}>
            <Head>
                <title>Victor Henrique | {project.project}</title>
            </Head>
            <div className={styles.contentProject}>
                <a href='/'><GoArrowLeft className={styles.iconBackToHome} /> Voltar</a>
                <img src={project.img} alt={project.project} />
                <h1>{project.project} <span>/</span> {project.repo ? (
                    <a href={project.repo} target='blank'>Repositório</a>
                ) : (
                    <a className={styles.linkWithNoRepo} target='blank'>Repositório</a>
                )}</h1>
                <h2>{project.data}</h2>
                <p>{project.extendedDesc}</p>
                <ul>
                    {project.skillsUsed.map((skillsUsed, index) => (
                        <li key={index}>{skillsUsed}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}