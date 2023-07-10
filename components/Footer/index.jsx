import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <>
    <section className={styles.footer}>
        <section className={styles.footercontainer}>
            <div className={styles.topfooter}>
            <img className={styles.onda} src="/assets/onda.png" alt="onda" />
            <img className={styles.meialua} src="/assets/meialua.png" alt="onda" />
            <h4 className={styles.titlefooter}>Receba <span>nossas novidades</span></h4>
            <p>Quer receber conteúdos exclusivos no seu e-mail ?</p>
            <form className={styles.form} action="">
                <div className={styles.input}>
                    <input type="text" placeholder='Digite seu nome' />
                    <input type="text" placeholder='Digite seu e-mail' />
                </div>
                <input type="checkbox" name="" id="" />Ao informar meus dados, eu concordo com a Politica de Privacidade e concordo em receber comunicações
            </form>
            <button className={styles.btnfooter}>Cadastrar</button>
            </div>
           
        </section>
    </section>
     <footer className={styles.bottomfooter}>
      <p>     Copyright 2022 - Todos os dtireitos reservados I Política de privacidade I Condições Gera
    </p>
     <p>Desenvolvido por: Olivas Digital</p>
     </footer>
     </>
  )
}
