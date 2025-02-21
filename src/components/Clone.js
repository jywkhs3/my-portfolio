import React from 'react';
import netflix from '../assets/netflix.png';
import momentum from '../assets/momentum.png';
import tesla from '../assets/tesla.png';
import airbnb from '../assets/airbnb.png';
import blogweb from '../assets/blogweb.png';
import shopping1 from '../assets/shopping1.png';
import mobilequiz from '../assets/mobilequiz.png';

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
    { id: 6, title: 'SHOPPING', img: shopping1, alt: 'SHOPPING-project' }
  ],
  INTERACTIONS: [
    { id: 7, title: 'MOBILE QUIZ', img: mobilequiz, alt: 'QUIZ-project' }
  ]
};

const Clone = ({ activeTitle, onProjectClick }) => {
  // activeTitle에 맞는 프로젝트만 필터링
  const filteredProjects = projects[activeTitle] || [];

  return (
    <div className="clone">
      <h2>{activeTitle}</h2>
      <div className="project-container">
        {filteredProjects.map((list) => (
          <div key={list.id} onClick={() => onProjectClick(list.title)}>
            <div className="project-item">
              <p>{list.title}</p>
              <div className="img-wrap">
                <img src={list.img} alt={list.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clone;
