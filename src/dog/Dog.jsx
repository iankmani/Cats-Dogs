import React from 'react'
import './Dog.css'
import borboel from '../assets/borboel.jpeg'
import husky from '../assets/husky.jpeg'
import german from '../assets/german.jpeg'
import rotweiler from '../assets/rotweiller.jpeg'
import pitbull from '../assets/pitbull.jpeg'
import doberman from '../assets/doberman.jpeg'


const Dog = () => {
  return (
    <section className='dog-page'>
        <div className='dogpage-header'>
            <h1>Dogs</h1>
        </div>
        <div className='dogpage-header2'>
            <p>Mans Best Friend</p>
        </div>
      <div className='dog-card-container'>  
        <div className="dog-card">
            <img src={borboel} alt="" className='dog-img' />
            <h2>Borboel</h2>
            <a href="https://www.akc.org/dog-breeds/boerboel/" target='_blank'>Learn more</a>
        </div>
        <div className="dog-card">
            <img src={husky} alt="" className='dog-img' />
            <h2>Siberian Husky</h2>
            <a href="https://www.thesprucepets.com/siberian-husky-dog-breed-profile-1118000" target='_blank'>Learn more</a>
        </div>
        <div className="dog-card">
            <img src={pitbull} alt="" className='dog-img' />
            <h2>Pitbull</h2>
            <a href="https://www.britannica.com/animal/pit-bull" target='_blank'>Learn more</a>
        </div>
        <div className="dog-card">
            <img src={rotweiler} alt="" className='dog-img' />
            <h2>Rotweiller</h2>
            <a href="https://www.thesprucepets.com/breed-profile-rottweiler-1117993" target='_blank'>Learn more</a>
        </div>
        <div className="dog-card">
            <img src={doberman} alt="" className='dog-img' />
            <h2>Doberman Pinscher</h2>
            <a href="https://www.akc.org/expert-advice/lifestyle/facts-about-the-doberman-pinscher/" target='_blank'>Learn more</a>
        </div>
        <div className="dog-card">
            <img src={german} alt="" className='dog-img' />
            <h2>German Shepherd</h2>
            <a href="https://www.thesprucepets.com/breed-profile-german-shepherd-dog-1117967" target='_blank'>Learn more</a>
        </div>
      </div>
    </section>
  )
}

export default Dog