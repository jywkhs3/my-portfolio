import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import sass from '../assets/sass.png';

const projectdetail= [
  {id:1, title:'NETFLIX', image:[html,css,js,react,sass], alt:'html-logo'},
  {id:2, title:'MOMENTUM', image: [html,css,js], alt:'css-logo'},
  {id:3, title:'TESLA', image: [html,css], alt:'js-logo'},
  {id:4, title:'AIRBNB', image: [html,css], alt:'react-logo'},
  {id:5, title:'BLOG', image: [html,css], alt:'vue-logo'},
  {id:6, title:'SHOPPING', image: [html,css,js,vue,sass], alt:'sass-logo'},
  {id:7, title:'MOBILE QUIZ', image: [html,css,js,react,sass], alt:'ps-logo'}
];

const ProjectModal = ({onClose}) => {

  return (
    <div className='modal'>
      <div className='modal-container'>
        <div className='img-container'>
          {/* <img /> */}
        </div>
        <div className='txt-container'>
          <p className='close' onClick={onClose}>X</p>
          <div className='txt-title'>
            {projectdetail.map((list) => (
              <h3 key={list.id}>{list.title}</h3>
            ))}
            {projectdetail.map((list) =>
              list.image.map((img, index) => (
                <img key={index} src={img} alt={list.alt} />
              ))
            )}
          </div>
          <div className='txt-sub'>
            <ul>
              <li>#ReactRouter</li>
              <li>##모바일앱개발</li>
              <li>#돌아가기 버튼</li>
              <li>#점수등급시스템</li>
              <li>#UX최적화</li>
            </ul>
            <div className='btn-wrap'>
              <button>view site</button>
              <button>github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;