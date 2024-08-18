import React from 'react'
import Banner from '../../components/banner/Banner'
import Feature from '../../components/feature/Feature'
import data from "../../components/feature/featuredata"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Banner/>
      <section className='features'>
      {data.map((Data, index) => (
      <Feature
        key={index}
        title={Data.title}
        content={Data.content}
        imageSrc={Data.imageSrc}
        alt={Data.alt}
      />
    ))}
      </section>
    </div>
  )
}

export default Home