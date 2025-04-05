import styles from './styles.module.css'
import Image from 'next/image'
import myPhoto from '../../../public/assets/me.png'
import { motion } from 'framer-motion'

export default function Header() {
    function handleToHome(){
        window.location.href = '/'
    }

    return (
        <header className={styles.header}>
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeInOut", duration: 0.6 }} id='header' className={styles.containerHeader}>
                <div onClick={handleToHome} className={styles.contentUser}>
                    <Image className={styles.imgContentUser} src={myPhoto} alt='My photo' />
                    <div className={styles.contentTextUser}>
                        <h1>Victor Henrique</h1>
                        <p>Desenvolvedor front-end</p>
                    </div>
                </div>
                <nav>
                    <a href='https://works-vhnb.vercel.app/' target='blank'>Trabalhos</a>
                    <a href='/blog'>Blog</a>
                </nav>
            </motion.div>
        </header>
    )
}