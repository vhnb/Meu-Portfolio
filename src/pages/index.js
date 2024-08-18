import styles from "@/styles/Home.module.css";
import Image from 'next/image'
import myPhoto from '../../public/assets/me.png'
import { useEffect } from 'react'
import Head from "next/head";

//icon
import { GoArrowRight } from "react-icons/go";

//data
import jsonProjects from '../datas/projects.json'

export default function Home() {
  useEffect(() => {
    const containerInfo = document.getElementById("containerInfo")
    containerInfo.style.transition = "opacity 0.5s ease-in-out"

    const containerProjetos = document.getElementById("containerProjetos")
    containerProjetos.style.transition = "opacity 0.5s ease-in-out"

    function showContainerProject() {
      containerProjetos.style.opacity = "1"
    }

    function showContainerInfo() {
      containerInfo.style.opacity = "1"
    }

    setTimeout(showContainerProject, 550)
    setTimeout(showContainerInfo, 500)

    return () => {
      clearTimeout(showContainerInfo, showContainerProject)
    }
  }, [])

  return (
    <main className={styles.container}>
      <Head>
        <title>Victor Henrique</title>
      </Head>
      <div className={styles.contentContainer}>
        <div id="containerInfo" className={styles.containerContentInfo}>
          <div className={styles.contentTextInfo}>
            <h1>Olá. Sou <span>Victor</span>! Desenvolvedor front-end.</h1>
            <p>Sou um programador front-end em constante busca por evolução. Com uma sólida experiência nesse campo, meu objetivo é sempre entregar projetos com qualidade e eficiência. Se quiser me conhecer melhor ou encontrar mais de minhas habilidades ou projetos, pode me achar no <a href="https://www.linkedin.com/" target="blank">Linkedin</a> ou no <a href="https://github.com/vhnb" target="blank">Github</a>.</p>
          </div>
          <Image className={styles.imgPhoto} src={myPhoto} alt="My Photo" />
        </div>
      </div>
      <div id="containerProjetos" className={styles.containerProject}>
        <h1>Meus Projetos: Explorando Criatividade e Inovação</h1>
        <div className={styles.containerContentProjects}>
          {jsonProjects.projects.map((item) => (
            <a href={`/projeto/${item.id}`} className={styles.cardProject}>
              <img src={item.img} alt="Image Project" />
              <div className={styles.contentTextProject}>
                <h1>{item.project} <GoArrowRight className={styles.iconTitleProject} /></h1>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
