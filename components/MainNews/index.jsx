import React from 'react'
import styles from './MainNews.module.css'

export const MainNews = () => {
  return (
    <section className={styles.mainnews}>
           

        <div className={styles.mainnewscontainer}>
          <img className={styles.semicirculo} src="/assets/semicirculo.png" alt="" />
          <img className={styles.onda} src="/assets/onda.png" alt="" />
          <img className={styles.shape} src="/assets/Shape.png" alt="" />
          <div className={styles.textnews}>
          <h2>Principais notícias</h2> 
          <div className={styles.cardnewstext}>
            <span>11/11/2022</span> 
            <h3>CUSTOMER EXPERIENCE</h3>
            <p>
            Feedback de clientes:
            </p>
            <p>transforme tudo em dados e <br />
              obtenha melhores resultados
              </p>
          </div>
          <div className={styles.cardnewstext}>
            <span>11/11/2022</span> 
            <h3>CUSTOMER EXPERIENCE</h3>
            <p>
            Feedback de clientes:
            </p>
            <p>transforme tudo em dados e <br />
              obtenha melhores resultados
              </p>
          </div>
          <div className={styles.cardnewstext}>
            <span>11/11/2022</span> 
            <h3>CUSTOMER EXPERIENCE</h3>
            <p>
            Feedback de clientes:
            </p>
            <p>transforme tudo em dados e <br />
              obtenha melhores resultados
              </p>
          </div>
          <button className={styles.btnnews}>Ver mais</button>
          </div>

          <div className={styles.cardnews}>
              <img src="/assets/desktop.png" alt="desktop" />
              <h4>TECNOLOGIA</h4><span>11/11/2022</span>
              <h1>Contando com a tecnologia para o <br />
               treinamento de especialistas no <br />
                atendimento</h1>
                <p>Muito mais do que saber ouvir e atender as necessidades de um cliente, o Customer Experience visa <br />
                 ir além e oferecer uma experiência que de fatoará muito mais proximidade entre o cliente e a marca.</p>
          </div>
          
        </div>
        
    </section>
  )
}
