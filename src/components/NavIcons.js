import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faRobot,faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const navigations = [
  {id:1, name:'START'},
  {id:2, name:'IDENTITY'},
  {id:3, name:'CLONE'},
  {id:4, name:'PUBLISHING'},
  {id:5, name:'INTERACTIONS'}
];

const NavIcons = ({isNavShow,toggleNav,onNavigate,closeNav}) => {

  const handleAstro =()=>{
    onNavigate('START');
    if(isNavShow) closeNav();
  }
  const handleMenu =(menu)=>{
    onNavigate(menu);
    closeNav();
  }
  return (
    <div className='nav-container'>
      <div className='nav-icons'>
        <FontAwesomeIcon icon={faMoon} className='fa moon'  />
        <FontAwesomeIcon icon={faUserAstronaut} className='fa astro' onClick={handleAstro}/>
        <FontAwesomeIcon icon={faRobot} className='fa robot' onClick={toggleNav} />
      </div>
      <AnimatePresence>
      { isNavShow && 
        <motion.div className='motion'
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isNavShow ? "auto" : 0, opacity: isNavShow ? 1 : 0 }}
          exit={{height:0, opacity:0}}
          transition={{ duration:  0.5, ease: "easeInOut" }}
        >
        <ul>
          {
            navigations.map((list)=>{
              return <li key={list.id} onClick={()=> handleMenu(list.name)}>{list.name}</li>
            })
          }
        </ul>
        </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default NavIcons;