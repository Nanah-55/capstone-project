import React from 'react';
import { Link } from 'react-router-dom';

function ResultPageYes() {
  return (
    <div className='container-img'>
      <img
        src="/Screenshot (3).png"
        alt="ResultPageYes"
        className='Screenshot-img'
      />

      <div className='text-1'>
        <p>You have chances of Breast Cancer</p>
      </div>

      {/* Using Link to go to homepage */}
      <Link to="/home">
        <button className="nxxt-btn">Click</button>
      </Link>
    </div>
  );
}

export default ResultPageYes;
