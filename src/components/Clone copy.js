import React from 'react';
import netflix from '../assets/netflix.png';
import momentum from '../assets/momentum.png';
import tesla from '../assets/tesla.png';
import airbnb from '../assets/airbnb.png';
import blogweb from '../assets/blogweb.png';
import shopping1 from '../assets/shopping1.png';
import mobilequiz from '../assets/mobilequiz.png';

const projects = [
    {id:1, title:'NETFLIX' ,img: netflix, alt:'neflix-project'},
    {id:2, title:'MOMENTUM' ,img: momentum, alt:'momentum-project'},
    {id:3, title:'TESLA' ,img: tesla, alt:'tesla-project'},
    {id:4, title:'AIRBNB' ,img: airbnb, alt:'airbnb-project'},
    {id:5, title:'BLOG' ,img: blogweb, alt:'BLOG-project'},
    {id:6, title:'SHOPPING' ,img: shopping1, alt:'SHOPPING-project'},
    {id:7, title:'MOBILE QUIZ' ,img: mobilequiz, alt:'QUIZ-project'}
];
const title = ['CLONE','PUBLISHING','INTERACTIONS'];

const Clone = ({onProjectClick}) => {

    return (
        <div className='clone'>
            {
                title.map((list,idx)=>{
                    return <h2 key={idx}>{list}</h2>
                })
            }
            <div className='netflix-project'>
                {
                    projects.map((list)=>{
                        return <div key={list.id} onClick={()=>onProjectClick(list.title)}>
                                    <div className='project-container'>
                                        <p>{list.title}</p>
                                        <div className='img-wrap'>
                                            <img src={list.img} alt={list.alt}/>
                                        </div> 
                                    </div>
                                </div>
                                })
                }
            </div>
            {/* <p className='click-txt'>"Click Me!"</p> */}
        </div>
    );
};

export default Clone;