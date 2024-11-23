import React from 'react';
import { LanguagesData } from '../Data/langData';
import App from '../App';
import './languages.css';
import {Link} from 'react-router-dom'

function Languages() {
  const Lang = LanguagesData.map((v, i) => {
    return (
      <div key={i} className='lang'>
        <h1>{v.language.name}</h1>
        <p>{v.language.description}</p>
        <button ><Link to={`/languages/${v.id}`}>Read More...</Link></button>
      </div>
    );
  });

  return (
    <>
    <App/>
    <div className="main">
      {Lang}
    </div>
    </>
  );
}

export default Languages;
