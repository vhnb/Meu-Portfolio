import styles from "@/styles/Home.module.css";
import Image from 'next/image'
import myPhoto from '../../public/assets/me.png'
import Head from "next/head";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import jsonProjects from '../datas/projects.json'

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
        <article className={styles.cardSkill}>
          <img src='../../../assets/js.png' alt='JavaScript' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/ts.png' alt='TypeScript' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/nextjs.png' alt='Next.js' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/reactjs.png' alt='React.js' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/firebase.png' alt='Firebase' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/html.png' alt='HTML' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/css.png' alt='CSS' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/bootstrap.png' alt='Bootstrap' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/sass.png' alt='Sass' />
        </article>
        <article className={styles.cardSkill}>
          <img src='../../../assets/figma.png' alt='Figma' />
        </article>
      </Marquee>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} className={styles.containerProject}>
        <h1>Meus Projetos: Explorando Criatividade e Inovação</h1>
        <div className={styles.containerContentProjects}>
          {jsonProjects.projects.map((item, index) => (
            <motion.a key={item.id} href={`/projeto/${item.id}`} className={styles.cardProject} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
              <img src={item.img} alt="Image Project" />
              <div className={styles.contentTextProject}>
                <h1>{item.project} <GoArrowRight className={styles.iconTitleProject} /></h1>
                <p>{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
