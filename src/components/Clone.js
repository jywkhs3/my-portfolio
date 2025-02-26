import React, { useEffect, useState } from 'react';
import netflix from '../assets/netflix.png';
import momentum from '../assets/momentum.png';
import tesla from '../assets/tesla.png';
import airbnb from '../assets/airbnb.png';
import blogweb from '../assets/blogweb.png';
import shopping1 from '../assets/shopping1.png';
import mobilequiz from '../assets/mobilequiz.png';
import parallox from '../assets/parallox.png';
import progressbar from '../assets/progressbar.png';
import grid from '../assets/grid.png';
import login from '../assets/netflix-login.png';
import datecalc from '../assets/datecalc.png';
import chart from '../assets/chart.png';
import scrollanimation from '../assets/scrollanimation.png';
import imageslide from '../assets/imageslide.png';
import cardnews2 from '../assets/cardnews2.jpg';
import cardnews1 from '../assets/cardnews1.jpg';
import mockup from '../assets/mockup.jpg';
import webdesign from '../assets/webdesign.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';


// 각 그룹별 프로젝트들
const projects = {
  CLONE: [
    { id: 1, title: 'NETFLIX', img: netflix, alt: 'netflix-project' },
    { id: 2, title: 'MOMENTUM', img: momentum, alt: 'momentum-project' },
    { id: 3, title: 'TESLA', img: tesla, alt: 'tesla-project' },
    { id: 4, title: 'AIRBNB', img: airbnb, alt: 'airbnb-project' }
  ],
  PUBLISHING: [
    { id: 5, title: 'BLOG', img: blogweb, alt: 'BLOG-project' },
    { id: 6, title: 'SHOPPING', img: shopping1, alt: 'SHOPPING-project' },
    { id: 7, title: 'MOBILE QUIZ', img: mobilequiz, alt: 'QUIZ-project' }

  ],
  INTERACTIONS: {
    ALL: [
      { id: 8, title: 'Login', img: login, alt: 'login' },
      { id: 9, title: 'Chart', img: chart, alt: 'chart' },
      { id: 10, title: 'Datecalc', img: datecalc, alt: 'datecalc' },
      { id: 11, title: 'Image Slide', img: imageslide, alt: 'imageslide' },
      { id: 12, title: 'Scroll Animation', img: scrollanimation, alt: 'scroll' },
      { id: 13, title: 'Grid', img: grid, alt: 'grid' },
      { id: 14, title: 'Parallox Scroll', img: parallox, alt: 'parallox' },
      { id: 15, title: 'ProgressBar', img: progressbar, alt: 'progressbar' },
      { id: 16, title: 'Web Design', img: webdesign, alt: 'webdesign' },
      { id: 17, title: 'Mockup', img: mockup, alt: 'mockup' },
      { id: 18, title: 'Card News', img: cardnews1, alt: 'cardnews1' },
      { id: 19, title: 'Card News', img: cardnews2, alt: 'cardnews2' }
    ],
    JAVASCRIPT: [
      { id: 8, title: 'Login', img: login, alt: 'login' },
      { id: 9, title: 'Chart', img: chart, alt: 'chart' },
      { id: 10, title: 'Datecalc', img: datecalc, alt: 'datecalc' },
      { id: 11, title: 'Image Slide', img: imageslide, alt: 'imageslide' }
    ],
    ANIMATION: [
      { id: 12, title: 'Scroll Animation', img: scrollanimation, alt: 'scroll' },
      { id: 13, title: 'Grid', img: grid, alt: 'grid' },
      { id: 14, title: 'Parallox Scroll', img: parallox, alt: 'parallox' },
      { id: 15, title: 'ProgressBar', img: progressbar, alt: 'progressbar' }
    ],
    UXUIDESIGN: [
      { id: 16, title: 'Web Design', img: webdesign, alt: 'webdesign' },
      { id: 17, title: 'Mockup', img: mockup, alt: 'mockup' },
      { id: 18, title: 'Card News', img: cardnews1, alt: 'cardnews1' },
      { id: 19, title: 'Card News', img: cardnews2, alt: 'cardnews2' }
    ]
  }
};

const Clone = ({ activeTitle, onProjectClick,activeCategory,onCategoryChange }) => {
  // activeTitle에 맞는 프로젝트 필터링 함수
  // const filteredProjects = projects[activeTitle] || projects.INTERACTIONS[activeCategory] || [];
  let filteredProjects = [];
// 1. activeTitle이 CLONE 또는 PUBLISHING이면 해당 배열을 가져오기
if (activeTitle === "CLONE" || activeTitle === "PUBLISHING") {
  filteredProjects = projects[activeTitle] || [];
} 
// 2. activeTitle이 INTERACTIONS이면, activeCategory에 맞는 배열 가져오기
else if (activeTitle === "INTERACTIONS") {
  filteredProjects = projects.INTERACTIONS[activeCategory] || [];
}

  const [currentIndex,setCurrentIndex] = useState(0);
  const [projectMove,setProjectMove] = useState(4);

  useEffect(()=>{
    const updateSlideMove =()=>{
      let newProjectMove = 4;
      if (window.innerWidth <= 500) setProjectMove(1);
      else if(window.innerWidth <= 768) setProjectMove(2);
      else if(window.innerWidth <= 1024) setProjectMove(3);
      else setProjectMove(4);

      setProjectMove(newProjectMove);
    };

    updateSlideMove();
    window.addEventListener('resize' , updateSlideMove);
    return ()=> 
      {window.removeEventListener('resize', updateSlideMove)};
  },[]);

  const totalProjectMove = filteredProjects.length;
  
  const handleSlide =(direction)=>{
    if(activeTitle === 'INTERACTIONS'){
      let newIndex = 
        direction === 'next' ? currentIndex + projectMove : currentIndex - projectMove ;

      if (newIndex < 0) {
        newIndex = totalProjectMove - (totalProjectMove % projectMove || projectMove);
      }
      else if (newIndex >= totalProjectMove){
          newIndex=0;
        }
      // else setCurrentIndex(newIndex);
      setCurrentIndex(newIndex);
    }
  }

  return (
    <div className="clone">
      <h2>{activeTitle}</h2>
      {
        activeTitle === 'INTERACTIONS' && (
        <div className='Interactions-nav'>
          <button onClick={() => onCategoryChange('ALL')}>All</button>
          <button onClick={() => onCategoryChange('JAVASCRIPT')}>JavaScript</button>
          <button onClick={() => onCategoryChange('ANIMATION')}>Animation</button>
          <button onClick={() => onCategoryChange('UXUIDESIGN')}>UX/UIDesign</button>      
        </div>
      )}
      <div className='project-container'
      // style={filteredProjects.length <4 ? 'justify-content : center' : 'justify-content : flex-start'}
              style={{
                transform: `translateX(-${currentIndex * (100/projectMove)}%)`, // 현재 슬라이드 인덱스에 맞춰 이동
                justifyContent : totalProjectMove <= 4 ? 'center' : 'flex-start',
                // flexWrap : activeTitle === 'INTERACTIONS' ? 'nowrap' : ''
              }}>
        {
        filteredProjects.length > 0 ?(
        filteredProjects.map((list,index) => (
          <div className='project-item' 
            key={list.id} onClick={() => onProjectClick(list.title,list.img)}>
              <p className='title'>{list.title}</p>
              <div className="img-wrap">
                <img src={list.img} alt={list.alt}
                  className={activeTitle === 'INTERACTIONS' ? `slide-${index === currentIndex ? 'active' : 'inactive'}` : ''}/>
              </div>
              <p className='read'>Read more!</p>
          </div>
        ))
      ):(
        <p>Loading...</p>
      )}
      </div>
      {activeTitle === 'INTERACTIONS' && (
          <div className="slider-nav">
            <FontAwesomeIcon onClick={()=>handleSlide('prev')}icon={faSquareCaretLeft} className='prev'/>
            <FontAwesomeIcon onClick={()=>handleSlide('next')}icon={faSquareCaretRight} className='next'/>
          </div>
        )}
    </div>
  );
};

export default Clone;
