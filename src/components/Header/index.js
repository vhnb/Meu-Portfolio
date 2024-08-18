import styles from './styles.module.css'
import Image from 'next/image'
import myPhoto from '../../../public/assets/me.png'
import { useEffect } from 'react'

export default function Header() {
    function handleToHome(){
        window.location.href = '/'
    }

    useEffect(() => {
        const header = document.getElementById("header")
        header.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
      
        function showHeader(){
          header.style.opacity = "1"
        }
    
        function showTranslateHeader(){
          header.style.transform = "translateY(0%)"
        }
      
        setTimeout(showHeader, 400)
        setTimeout(showTranslateHeader, 500)
      
        return () => {
          clearTimeout(showHeader, showTranslateHeader)
        }
      }, [])

    return (
        <header className={styles.header}>
            <div id='header' className={styles.containerHeader}>
                <div onClick={handleToHome} className={styles.contentUser}>
                    <Image className={styles.imgContentUser} src={myPhoto} alt='My photo' />
                    <div className={styles.contentTextUser}>
                        <h1>Victor Henrique</h1>
                        <p>Desenvolvedor front-end</p>
                    </div>
                </div>
                <nav>
                    <a href='/blog'>Blog🔗</a>
                </nav>
            </div>
        </header>
    )
}