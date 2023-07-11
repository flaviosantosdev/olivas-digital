import React from 'react'
import { useState, useEffect } from 'react'
import { format } from 'date-fns';
import styles from './MainNews.module.css'

export const MainNews = () => {

  const [data, setData] = useState([])
    const url = 'https://www.olivas.digital/wp-json/wp/v2/posts?categories=373'

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const result = await response.json()
          setData(result)
        }
     
        fetchData().catch((e) => {
          
          console.error('An error occurred while fetching the data: ', e)
        })
      }, [])

  return (

    <section className={styles.mainnews}>
           

        <div className={styles.mainnewscontainer}>
          <img className={styles.semicirculo} src="/assets/semicirculo.png" alt="" />
          <img className={styles.onda} src="/assets/onda.png" alt="" />
          <img className={styles.shape} src="/assets/Shape.png" alt="" />
          <div className={styles.textnews}>
          <h2 className={styles.titlenews}>Principais notícias</h2> 
          <div className={styles.cardstext}>
            {data.map(news => (
                <div key={news.id} className={styles.cardnewstext}>
                <span>{format(new Date(news.date),'dd/mm/yyyy')}</span> 
                <h3 className={styles.cardnewstitle}>{news.title.rendered}</h3>
                <p>
                Descrição:
                </p>
                <p>{news.yoast_head_json.description} <br />
                  obtenha melhores resultados
                  </p>
              </div>
            ))}
          </div>
          
          </div>
 
          <div className={styles.cardnews}>
              <img src="/assets/desktop.png" alt="desktop" />
              <h4>TECNOLOGIA</h4>
              <span>11/11/2022</span>
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
