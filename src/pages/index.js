import styles from "@/styles/Home.module.css";
import Image from 'next/image'
import myPhoto from '../../public/assets/me.png'
import Head from "next/head";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import jsonProjects from '../datas/projects.json'
import jsonSkills from '../datas/skills.json'
import CardProject from "@/components/CardProject";
import CardSkills from "@/components/CardSkills";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Victor Henrique</title>
      </Head>
      <div className={styles.contentContainer}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className={styles.containerContentInfo}>
          <div className={styles.contentTextInfo}>
            <h1>Olá. Sou <span>Victor</span>! Desenvolvedor front-end.</h1>
            <p>Sou um programador front-end em constante busca por evolução. Com uma sólida experiência nesse campo, meu objetivo é sempre entregar projetos com qualidade e eficiência. Se quiser me conhecer melhor ou encontrar mais de minhas habilidades ou projetos, pode me achar no <a href="https://www.linkedin.com/in/victor-henrique-405618284/" target="blank">Linkedin</a> ou no <a href="https://github.com/vhnb" target="blank">Github</a>.</p>
          </div>
          <Image className={styles.imgPhoto} src={myPhoto} alt="My Photo" />
        </motion.div>
      </div>
      <Marquee autoFill={true} className={styles.containerCarouselSkills} pauseOnHover={true} gradient={true} gradientColor="#000">
        {jsonSkills.skills.map((item) => (
          <CardSkills
            src={item.src}
            alt={item.alt} 
          />
        ))}
      </Marquee>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} className={styles.containerProject}>
        <h1>Meus Projetos: Explorando Criatividade e Inovação</h1>
        <div className={styles.containerContentProjects}>
          {jsonProjects.projects.map((item, index) => (
            <CardProject
              img={item.img}
              index={index}
              project={item.project}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </motion.div>
    </main>
  );
}
