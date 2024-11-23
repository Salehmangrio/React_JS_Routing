import React from 'react'
import { useLocation } from 'react-router'
import App from '../App';
import { LanguagesData } from '../Data/langData';

function LangFullDeatail() {
   let location = useLocation();
   const id = location.pathname.split('/')[2];
   //filter method will return array so get result using index [0]
   let data=LanguagesData.filter((v)=>v.id==id)[0];

  return (
    <>
    <App/>
    <h1>{data.language.name}</h1>
    <h4>{data.language.description}</h4>
    <p>{data.language.para}</p>
    </>
  )
}

export default LangFullDeatail