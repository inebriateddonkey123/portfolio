import React from 'react'
import { Link } from 'react-router-dom';

import "./Card.css";

const Card = ({ imagePath, name, link, dscrp }) => {
  return (
    <Link to={link} className='container w-11/12 md:w-2/5 rounded-xl overflow-hidden m-5 shadow-lg shadow-slate-200'>
          <img src={imagePath} className="block md:80 lg:h-96" />
          <div className='overlay bg-neutral-50'>
            <div className='textStyle w-3/4 md:w-2/3'>
              <p className='text-black text-base md:text-lg lg:text-3xl font-semibold py-2'>{name}</p>
              <p className='text-black text-small md:text-medium lg:text-lg font-medium py-2'>{dscrp}</p>
            </div>
          </div>
    </Link>
  )
}

export default Card