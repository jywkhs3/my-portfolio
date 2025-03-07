import React, { useEffect, useRef } from 'react';
import webp from '../assets/video.webp';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);
  useEffect(()=>{
    if(videoRef.current){
      gsap.fromTo('.video',
        {opacity:0, y: 100},
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".video",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className='video' ref={videoRef}>
      <img src={webp}/>
  </div>
  );
};

export default Video;