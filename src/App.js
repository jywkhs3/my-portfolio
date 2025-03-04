import React, { useEffect, useState } from 'react';
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
  const [activeTitle, setActiveTitle] = useState("START"); // 기본값 'CLONE'
  const [selectedImage,setSelectedImage] = useState(null);
  const [activeCategory,setActiveCategory] = useState('ALL');
  const [modalPosition,setModalPosition] = useState(0); //모달프로젝트 위치
  const [isLightMode,setIsLightMode] = useState(false); //화면 라이트 모드
  
  //화면 라이트모드 버튼토글 함수
  const toggleMode = ()=>{
    setIsLightMode((prevMode => !prevMode));
  }
  // App.js에서
  useEffect(() => {
    // `light` 클래스가 body에 적용되도록 설정
    if (isLightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightMode]);

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
  const handleModalOpen = (projectTitle,projectImage,position) => {
    setActiveProject(projectTitle);
    setIsModalOpen(true);
    setSelectedImage(projectImage);
    setModalPosition(position);
  };

  // 모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  //Interactions카테고리
  const handleCategory = (category)=>{
    // console.log("Changing category to:", category);
    setActiveCategory(category);
  }
  
  return (
    <div className={`app ${isLightMode ? 'light':''}`}>
      <NavIcons
        onNavigate={handleNavigation}
        isNavShow={isNavShow}
        toggleNav={() => setIsNavShow((prev) => !prev)}
        closeNav={closeNav}
        toggleMode={toggleMode}
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
        <Clone onCategoryChange={handleCategory} activeCategory={activeCategory} activeTitle={activeTitle} onProjectClick={handleModalOpen} />
      )}
      {isModalOpen && (
        <Modal
          activeProject={activeProject}
          isModalOpen={isModalOpen}
          onClose={handleModalClose}
          selectedImage={selectedImage}
          modalPosition={modalPosition}
        />
      )}
      <Background isLightMode={isLightMode} />
    </div>
  );
};

export default App;
