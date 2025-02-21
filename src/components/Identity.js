import React from 'react';
import profile from '../assets/astro.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import sass from '../assets/sass.png';
import ps from '../assets/ps.png';
import ai from '../assets/ai.png';
import figma from '../assets/figma.png';

const Identity = () => {
  const skills = [
    {id:1, image: html, alt:'html-logo'},
    {id:2, image: css, alt:'css-logo'},
    {id:3, image: js, alt:'js-logo'},
    {id:4, image: react, alt:'react-logo'},
    {id:5, image: vue, alt:'vue-logo'},
    {id:6, image: sass, alt:'sass-logo'},
    {id:7, image: ps, alt:'ps-logo'},
    {id:8, image: ai, alt:'ai-logo'},
    {id:9, image: figma, alt:'figma-logo'},
  ];

  return (
    <div className='identity'>
      <h2>IDENTITY</h2>
      <div className='profile-container'>
        <div className='profile-wrap'>
          <img className='profile' src={profile} alt='profile'/>
        </div>
        <div className='text-wrap'>
          <ul>
            <li>“I’m a Web Publisher & Frontend Developer”</li>
            <li>Name : Jeong Hyun</li>
            <li>Birth : 1996.11.15</li>
            <li>Mail : jywkhs3@gmail.com</li>
            <li>"My Skill"</li> 
          </ul>
          <div className='skill-logo'>
          {
            skills.map((list)=>{
            return <img key={list.id} src={list.image} alt={list.alt}/>
          })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;