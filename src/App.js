import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';
import NavIcons from './components/NavIcons';
import Background from './components/Background';
import Clone from './components/Clone';
import Identity from './components/Identity';
import ProjectModal from './components/ProjectModal';

const App = () => {
  const [isHome,setIsHome] = useState(true);
  const [isClone,setIsClone] = useState(false);
  const [isNavShow,setIsNavShow] = useState(false);
  const [isProfile,setIsProfile] = useState(false);
  const [activeProject,setActiveProject] = useState('HOME');

  //메뉴 닫기 아이콘 클릭
  const closeNav =()=>{
    setIsNavShow(false);
  }
  //메뉴 리스트 클릭 시 해당 컴포넌트 이동
  const handleNavigation = (name) => {
    setActiveProject(name);
    closeNav();

    if(name ==='START'){
      setIsHome(true);
      setIsClone(false);
      setIsProfile(false);
    } else if( name === 'IDENTITY'){
      setIsClone(false);
      setIsHome(false);
      setIsProfile(true);
    } else if( name === 'CLONE'){
      setIsClone(true);
      setIsHome(false);
      setIsProfile(false);  
    }
  };

  return (
    <div className='app'>
      {
        <NavIcons 
        onNavigate={handleNavigation}
        isNavShow={isNavShow} 
        toggleNav={()=> setIsNavShow(prev => !prev)}
        closeNav={closeNav}/>
      }
      {isHome && <Start />}
      {
        isProfile && 
        <Identity />
      }
      {/* {
        isClone &&  
        <Clone/>
      } */}
      <ProjectModal />
      <Background/>
    </div>
  );
};

export default App;