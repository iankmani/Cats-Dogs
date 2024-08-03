import React from 'react'
import './Starter.css'

const Starter = () => {
  return (
    <section>
        <div className="starter-container">
            <h2>choose one:</h2>
            <div className="thebuttons">
               <button className="dogbtn">
                Dogs
               </button>
               <button className="catbtn">
                Cats
               </button>

            </div>
           
        </div>
    </section>
  )
}

export default Starter