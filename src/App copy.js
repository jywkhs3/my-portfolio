import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';
import NavIcons from './components/NavIcons';
import Background from './components/Background';
import Clone from './components/Clone';
import Identity from './components/Identity';
import Modal from './components/Modal';

const App = () => {
  const [isHome,setIsHome] = useState(true);
  const [isClone,setIsClone] = useState(false);
  const [isNavShow,setIsNavShow] = useState(false);
  const [isProfile,setIsProfile] = useState(false);
  const [activeProject,setActiveProject] = useState(null);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const navigations = [
    {id:1, name:'START'},
    {id:2, name:'IDENTITY'},
    {id:3, name:'CLONE'},
    {id:4, name:'PUBLISHING'},
    {id:5, name:'INTERACTIONS'}
  ];

  //메뉴 닫기 아이콘 클릭
  const closeNav =()=>{
    setIsNavShow(false);
  }
  //메뉴 리스트 클릭 시 해당 컴포넌트 이동
  const handleNavigation = (name) => {
    setActiveProject(null);
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
  //프로젝트 클릭 시 모달 열기
  const handleModalOpen = (projectTitle)=>{
    setActiveProject(projectTitle);
    setIsModalOpen(true);
  }
  //모달 닫기
  const handleModalClose = ()=>{
    setIsModalOpen(false);
  }
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
      {
        isClone &&  
        <Clone onProjectClick={handleModalOpen}/>
      }
      {
        <Modal activeProject={handleModalOpen} isModalOpen={isModalOpen} onClose={handleModalClose} />
      }
      <Background/>
    </div>
  );
};

export default App;