import React from 'react'
import dogsignup from '../../assets/dogsignup.jpeg'
import './DogSignUp.css'
import { useNavigate } from 'react-router-dom'

const DogSignUp = () => {
    const navigate = useNavigate();
    const handleNavigateToDogsPage = () => {
        navigate('/dog')
        
    }
  return (
    <section className="Dogsignup-page">
        <div className='dogsignup-upperlayer'>

            <div className="Dogsignup-image">
                <img src={dogsignup} alt="picture of dog pack" className='dogSignup-img'/>
            </div>
            <div className="Dogsignup-formpart">
                <h1>Sign up to See Doggies</h1>
                <label htmlFor="text">Input Username:</label>
                <input type="text" />
                <label htmlFor="password">Input Password:</label>
                <input type="password" />
                <button onClick={handleNavigateToDogsPage}>Enter</button>
            </div>
            
            
        </div>
    </section>
  )
}

export default DogSignUp