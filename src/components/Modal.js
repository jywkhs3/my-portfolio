import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import sass from '../assets/sass.png';
import figma from '../assets/figma.png';
import ps from '../assets/ps.png';
import ai from '../assets/ai.png';

const projectdetail= [
  {
    id:1, title:'NETFLIX', image:[html,sass,js,react], 
    desc:['#TMDbAPI', '#ReactRouter', '#react-slick', '#Axios' ,'#scss', '#반응형디자인'] ,alt: ['HTML','Sass','JavaScript','React'],
    sitelink: 'https://jywkhs3.github.io/netflix_clone/',
    githublink : 'https://github.com/jywkhs3/netflix_clone'
  },
  {
    id:2, title:'MOMENTUM', image: [html,css,js], 
    desc: ['#JavaScript', '#LocalStorage', '#OpenWeatherMapAPI', '#다크모드', '#올인원인터페이스', '#Todo-List', '#개인화UI'], alt:['HTML','CSS','JavaScript'],
    sitelink: 'https://jywkhs3.github.io/MOMENTUM/index.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/MOMENTUM'
  },
  {
    id:3, title:'TESLA', image: [html,css], 
    desc:['#시맨틱태그', '#SEO최적화', '#반응형웹', '#웹애니메이션', '#클론코딩', '#구조적마크업'], alt:['HTML','CSS'],
    sitelink: 'https://jywkhs3.github.io/clone/tela/tesla.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/clone/tela'
  },
  {
    id:4, title:'AIRBNB', image: [html,css], 
    desc:['#시맨틱태그', '#반응형웹', '#웹표준성', '#클론코딩', '#구조적마크업'], alt:['HTML','CSS'],
    sitelink: 'https://jywkhs3.github.io/clone/airbnb/airbnb.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/clone/airbnb'
  },
  {
    id:5, title:'BLOG', image: [html,css], 
    desc: ['#시맨틱태그', '#SEO최적화', '#반응형디자인', '#카드UI', '#Flex레이아웃', '#Figma디자인'], alt:['HTML','CSS'],
    sitelink: 'https://jywkhs3.github.io/BLOG-HYUN/index.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/BLOG-HYUN'
  },
  {
    id:6, title:'SHOPPING', image: [html,sass,js,vue], 
    desc: ['#VueRouter', '#장바구니기능', '#무료배송조건', '#모달결제창', '#컴포넌트재사용', '#Flex레이아웃'], alt:['HTML','Sass','JavaScript','Vue'],
    sitelink: 'https://jywkhs3.github.io/product/#/',
    githublink: 'https://github.com/jywkhs3/product'  },
  {
    id:7, title:'MOBILE QUIZ', image: [html,sass,js,react], 
    desc: ['#ReactRouter', '#이전화면버튼', '#점수등급시스템', '#모바일우선', '#UX최적화','#Figma설계', '#반응형UI'], alt:['HTML','Sass','JavaScript','React'],
    sitelink: 'https://jywkhs3.github.io/mobilequiz/',
    githublink: 'https://github.com/jywkhs3/mobilequiz'  },
  {
    id:8, title:'Login', image: [html,sass,js,react], 
    desc: ['#아이디,비밀번호 입력 검증', '#오류 메시지 표시', '#X버튼 인터렉션 구현', '#UX최적화'], alt:['HTML','Sass','JavaScript','React'],
    sitelink: 'https://jywkhs3.github.io/netflix_clone/login',
    githublink: 'https://github.com/jywkhs3/netflix_clone/blob/main/src/components/Login.js'  },
  {
    id:9, title:'Chart', image: [html,sass,js,vue], 
    desc: ['#차트 데이터 시각화', '#동적 데이터 연동', '#ref, watch 활용'], alt:['HTML','Sass','JavaScript','Vue'],
    sitelink: 'https://jywkhs3.github.io/chart/',
    githublink: 'https://github.com/jywkhs3/chart'  },
  {
    id:10, title:'Datecalc', image: [html,css,js], 
    desc: ['#기념일계산기', '#실시간날짜업데이트', '#시간 계산 로직','#JavaScript기능'], alt:['HTML','CSS','JavaScript'],
    sitelink: 'https://jywkhs3.github.io/datecalc/date-calc.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/datecalc'  },
  {
    id:11, title:'Image Slide', image: [html,css,js], 
    desc: ['#이미지 슬라이드 전환', '#자동 슬라이드 기능', '#DOM 조작', '#이벤트 처리'], alt:['HTML','CSS','JavaScript'],
    sitelink: 'https://jywkhs3.github.io/imgslide/img-slide.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/imgslide'  },
  {
    id:12, title:'Scroll Animation', image: [html,css,js], 
    desc: ['#웹애니메이션', '#이미지 슬라이드 전환', '#스크롤애니메이션 구현', '#애니메이션 시각화'], alt:['HTML','CSS','JavaScript'],
    sitelink: 'https://jywkhs3.github.io/light-scroll/',
    githublink: 'https://github.com/jywkhs3/light-scroll'  },
  {
    id:13, title:'Grid', image: [html,css,js], 
    desc: ['#Grid레이아웃', '#JavaScript', '#인터랙티브UI','#웹디자인', '#동적화면 구현'], alt:['HTML','CSS','JavaScript'],
    sitelink: 'https://jywkhs3.github.io/GRID/GRID.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/GRID'  },
  {
    id:14, title:'ProgressBar', image: [html,css], 
    desc: ['#ProgressBar ', '#CSS애니메이션', '#UIUX', '#시각적피드백', '#인터랙티브디자인'], alt:['HTML','CSS'],
    sitelink: 'https://jywkhs3.github.io/animation/MBTI.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/tree/main/animation'  },
  {
    id:15, title:'Parallox Scroll', image: [html,css], 
    desc: ['#부드러운UI', '#스크롤링효과', '#CSS애니메이션', '#transform효과'], alt:['HTML','CSS'],
    sitelink: 'https://jywkhs3.github.io/animation/parallax.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/blob/main/animation/parallax.html'  },
  {
    id:16, title:'Web Design', image: [ps], 
    desc: ['#부드러운UI', '#스크롤링효과', '#CSS애니메이션', '#transform효과'], alt:['Photoshop'],
    sitelink: 'https://jywkhs3.github.io/animation/parallax.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/blob/main/animation/parallax.html'  },
  {
    id:17, title:'Mockup', image: [ps], 
    desc: ['#부드러운UI', '#스크롤링효과', '#CSS애니메이션', '#transform효과'], alt:['Photoshop'],
    sitelink: 'https://jywkhs3.github.io/animation/parallax.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/blob/main/animation/parallax.html'  },
  {
    id:18, title:'Card News1', image: [ps,ai], 
    desc: ['#부드러운UI', '#스크롤링효과', '#CSS애니메이션', '#transform효과'], alt:['Photoshop','Illustrator'],
    sitelink: 'https://jywkhs3.github.io/animation/parallax.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/blob/main/animation/parallax.html'  },
  {
    id:19, title:'Card News2', image: [ps,figma], 
    desc: ['#부드러운UI', '#스크롤링효과', '#CSS애니메이션', '#transform효과'], alt:['Photoshop','Figma'],
    sitelink: 'https://jywkhs3.github.io/animation/parallax.html',
    githublink: 'https://github.com/jywkhs3/jywkhs3.github.io/blob/main/animation/parallax.html'  },
];

const Modal = ({selectedImage,activeProject,isModalOpen,onClose}) => {
  
  if(!isModalOpen) return null;

  const projectDetailMore = projectdetail.find((list)=>list.title === activeProject);
  return (
    <div className='modal'>
      <div className='modal-container'>
        <div className='img-container'>
          <img src={selectedImage} alt={activeProject}/>
        </div>
        <div className='txt-container'>
          <p className='close' onClick={onClose}>X</p>
          <div className='txt-top'>
            {projectdetail
              .filter((list)=> list.title === activeProject)
              .map((list) => (
              <h3 key={list.id}>{list.title}</h3>
            ))}
            <div className='txt-skill'>
              {projectdetail
                .filter((list)=>list.title === activeProject)
                .map((list) =>
                list.image.map((img, index) => (
                  <div className='skill-wrap' key={index}>
                    <img  src={img} alt={list.alt} />
                    <div className='text'>{list.alt[index]}</div>
                  </div>
                ))
              )}
            </div>
          </div>
            <ul className='txt-sub'>
              {
                projectdetail
                .filter((list)=>list.title ===activeProject)
                .map ((list)=>
                  list.desc.map((item,index)=>(
                    <li key={index}>{item}</li>
                  ))
                )}
            </ul>
            <div className='btn-wrap'>
            {projectDetailMore?.sitelink && (
              <a href={projectDetailMore.sitelink} target='_blank' rel='noopener noreferrer'>
                <button>View Site</button>
              </a>
            )}
            {projectDetailMore?.githublink && (
              <a href={projectDetailMore.githublink} target='_blank' rel='noopener noreferrer'>
                <button>GitHub</button>
              </a>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;