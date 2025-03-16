import React, { useEffect } from 'react';
import webp from '../assets/video.webp';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  useEffect(()=>{
    gsap.from('.video',{
      y:100,
      duration:1,
      scrollTrigger:{
        trigger: '.video',
        start: 'top top',
        scrub: true
      }
    });
  },[]);
  return (
    <div className='video'>
      <img src={webp}/>
  </div>
  );
};

export default Video;