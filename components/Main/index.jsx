import React from 'react'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <section className={styles.main}>
            <div className={styles.img}>
                <img src="/assets/woman.png" alt="" />
                <div className={styles.backwoman}>
                    <h3>CUSTOMER EXPERIENCE</h3>
                    <span>11/11/2022</span>
                    <h1>
                    Contando com a tecnologia para o <br />
                    treinamento de especialistas <br />
                    no atendimento
                    </h1>
                    <p className={styles.textcard}>Muito mais do que saber ouvir e atender as necessidades de um cliente, o Customer Experience visa ir além <br />
                        e oferecer uma experiência que de fato trará muito mais proximidade entre o cliente e a marca. <br />
                        As boas práticas de um atendimento já não são o que foram há poucos anos atrás, o mercado demanda por <br /> 
                        profissionais capazes de proporcionar um contato transformador. Não há mais espaço para o atendimento <br />
                        engessado.

                    </p>
                </div>
            </div>
            <div className={styles.cards}>
            <h2>Outras postagens:</h2>
            <div className={styles.card}>
                <h3>CUSTOMER EXPERIENCE</h3>
                <p>Feedback de clientes:</p>
                <p>transforme tudo em dados e <br />
                    obtenha melhores resultados
                </p>
            </div>
            <div className={styles.card}>
                <h3>TECNOLOGIA</h3>
                <p>Chatbot cognitivo:</p>
                <p>o que é e<br />
                    como pode ajudar ?
                </p>
            </div>
            <div className={styles.card}>
                <h3>CUSTOMER EXPERIENCE</h3>
                <p>Feedback de clientes:</p>
                <p>transforme tudo em dados e <br />
                    obtenha melhores resultados
                </p>
            </div>
            <div className={styles.card}>
                <h3>CUSTOMER EXPERIENCE</h3>
                <p>Atendimento ao cliente:</p>
                <p>quais as<br />
                    expectativas da Geração <br />
                    Millennials? <br />
                </p>
            </div>
            <div className={styles.card}>
                <h3>CUSTOMER EXPERIENCE</h3>
                <p>Open Banking:</p>
                <p>o sucesso do<br />
                    sistema no Brasil
                </p>
            </div>
            <button className={styles.btnmainsnews}>
                Ver mais
            </button>
            </div>
    </section>
  )
}
