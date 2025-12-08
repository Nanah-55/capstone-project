import React from 'react';
import { Link } from 'react-router-dom'

function ResultPageNo() {
    return (
        <div className='container-image'>
         <img 
          src="/Screenshot (3).png"
          alt="ResultPageNo" className='Screenshot-image'
          
        />
             
            <div className='text-2'>

               <p>You Don't Have Breast Cancer</p>
            </div>

             {/* Using Link to go to homepage */}
          <Link to="/home">
             <button className="nxxxt-btn">Click</button>
        </Link>

        </div>
    )
}

export default ResultPageNo;