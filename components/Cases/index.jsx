import React from 'react'
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Cases.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';


export const Cases = () => {
    const [data, setData] = useState([])
    const url = 'https://www.olivas.digital/wp-json/wp/v2/posts?categories=403'

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

    const responsive = {
        0: { items: 3 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    

  

  
  return (
    <section className={styles.cases}>
        <h1>Cases</h1>
        <AliceCarousel>
            {data.map(p => (
                <div key={p.id} className={styles.cardcase} >
                <img src={p.og_image} alt="card" />
                <h2>{p.title.rendered}</h2>
                <p>{p.excerpt.rendered}</p>
                {console.log(p.og_image)}
                <button>
                    <Link href={p.guid.rendered}>Saiba mais</Link>
                </button>
            </div>
            ))}
        </AliceCarousel>
    </section>
  )

}


