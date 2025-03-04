import React, { useRef } from 'react';
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
import gsap from 'gsap';

const Identity = () => {
  const skills = [
    {id:1, image: html, alt:'HTML'},
    {id:2, image: css, alt:'CSS'},
    {id:3, image: js, alt:'JavaScript'},
    {id:4, image: react, alt:'React'},
    {id:5, image: vue, alt:'Vue'},
    {id:6, image: sass, alt:'Sass'},
    {id:7, image: ps, alt:'Photoshop'},
    {id:8, image: ai, alt:'Illustrator'},
    {id:9, image: figma, alt:'Figma'},
  ];

  const profileRef = useRef(null);

  const handleProfile = ()=>{
    gsap.to(profileRef.current,{
      rotation:360,
      duration:1,
      onComplete:()=> gsap.set(profileRef.current,{rotation:0})
    });
  };
  return (
    <div className='identity'>
      <h2>IDENTITY</h2>
      <div className='profile-container'>
        <div className='profile-wrap'>
          <img className='profile' src={profile} alt='profile' ref={profileRef}/>
          <p onClick={handleProfile}>"Click me!"</p>
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
            return <div className='skill-wrap' key={list.id}>
                      <img  src={list.image} alt={list.alt}/>
                      <p>{list.alt}</p>
                    </div>
          })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;