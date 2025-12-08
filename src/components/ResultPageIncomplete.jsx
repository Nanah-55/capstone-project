import React from 'react';
import { Link } from 'react-router-dom';

function ResultPageIncomplete() {
  return (
    <div className='image-holder'>
      <img
        src="/Screenshot (3).png"
        alt="ResultPageIncomplete"
        className='Screenshot-image'
      />

      <div className='text-3'>
        <p>Please Complete all Inputs</p>
      </div>

      <Link to="/next">
        <button className="nxxxxt-btn">Click</button>
      </Link>
    </div>
  );
}

export default ResultPageIncomplete;
