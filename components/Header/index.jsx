import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
       
        <Link href="/">
            <img src="/assets/logo.png" alt="logo olivas digital" />
        </Link>
        <nav className={styles.menu}>
            <ul>
                <li><Link href="/">Quem somos</Link></li>
                <li><Link href="/">Metodologia</Link></li>
                <li><Link href="/">Nossas soluções</Link></li>
                <li><Link href="/">Conteúdos para você</Link></li>
                <li><Link href="/">Conteúdos de comunicação</Link></li>
            </ul>
        </nav>
        <div>
            <button className={styles.button}>
                <img src="/assets/email.png" alt="Fale com especialista" />
                <span>Fale com especialista</span>
            </button>
          
        </div>
    </header>
  )
}
