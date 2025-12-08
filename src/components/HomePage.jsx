import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/next');

       
    };

     return (
        <div className='container'>
        <img 
          src="/breast-cancer-bg.png"
          alt="Homepage" className='homepage-image'
          
        />
       

        <div className='text-on-img'>
          <h1 style={{ fontFamily: "Pacifico, cursive" }}><b>Benign and Malignant Breast Turmor Prediction</b></h1>

           <div className='description'>
             <p style={{ fontFamily: "Poppins, sans-serif" }}>
             Early detection of breast cancer saves lives. It is the most common cancer in women, but better awareness and research have improved treatment and survival. Detecting it early and using personalized care are crucial.</p>
           </div>

           <button className='next-btn' onClick={nextPage}>
               Test The Model
           </button>
            
        </div>
      </div>

  )
}

export default HomePage;


