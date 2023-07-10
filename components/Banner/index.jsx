import React from 'react'
import styles from './Banner.module.css'

export const Banner = () => {
  return (
    <>
        <div className={styles.banner}>
            <img src="/assets/circle.png" alt="" />
        </div>
        <section className={styles.submenu}>
           <h1><span>Conteúdos </span>para Você</h1> 
        </section>
    </>
  )
}
