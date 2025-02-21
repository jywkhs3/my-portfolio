import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';
import NavIcons from './components/NavIcons';
import Background from './components/Background';
import Clone from './components/Clone';
import Identity from './components/Identity';
import Modal from './components/Modal';

const App = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("CLONE"); // 기본값 'CLONE'

  const navigations = [
    { id: 1, name: 'START' },
    { id: 2, name: 'IDENTITY' },
    { id: 3, name: 'CLONE' },
    { id: 4, name: 'PUBLISHING' },
    { id: 5, name: 'INTERACTIONS' }
  ];

  // 메뉴 닫기 아이콘 클릭
  const closeNav = () => {
    setIsNavShow(false);
  };

  // 메뉴 리스트 클릭 시 해당 컴포넌트 이동
  const handleNavigation = (name) => {
    setActiveProject(null); // 새로운 메뉴 클릭 시 프로젝트 상태 초기화
    setActiveTitle(name); // 타이틀 변경
    closeNav();
  };

  // 프로젝트 클릭 시 모달 열기
  const handleModalOpen = (projectTitle) => {
    setActiveProject(projectTitle);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <NavIcons
        onNavigate={handleNavigation}
        isNavShow={isNavShow}
        toggleNav={() => setIsNavShow((prev) => !prev)}
        closeNav={closeNav}
      />
      {activeTitle === 'START' && <Start />}
      {activeTitle === 'IDENTITY' && <Identity />}
      {activeTitle === 'CLONE' && (
        <Clone activeTitle={activeTitle} onProjectClick={handleModalOpen} />
      )}
      {activeTitle === 'PUBLISHING' && (
        <Clone activeTitle={activeTitle} onProjectClick={handleModalOpen} />
      )}
      {activeTitle === 'INTERACTIONS' && (
        <Clone activeTitle={activeTitle} onProjectClick={handleModalOpen} />
      )}
      {isModalOpen && (
        <Modal
          activeProject={activeProject}
          isModalOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
      <Background />
    </div>
  );
};

export default App;
