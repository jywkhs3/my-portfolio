import React from 'react';
import netflix from '../assets/netflix.png';
import momentum from '../assets/momentum.png';
import tesla from '../assets/tesla.png';
import airbnb from '../assets/airbnb.png';

const projects = [
    {id:1, title:'NETFLIX' ,img: netflix, alt:'neflix-project'},
    {id:1, title:'MOMENTUM' ,img: momentum, alt:'momentum-project'},
    {id:1, title:'TESLA' ,img: tesla, alt:'tesla-project'},
    {id:1, title:'AIRBNB' ,img: airbnb, alt:'airbnb-project'}
]
const Clone = () => {

    return (
        <div className='clone'>
            <h2>CLONE</h2>
            <div className='netflix-project'>
                {
                    projects.map((list)=>{
                        return <div key={list.id}>
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