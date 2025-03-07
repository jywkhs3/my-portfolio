import React, { useEffect, useState } from 'react';
import './App.scss';
import Start from './components/Start';
import NavIcons from './components/NavIcons';
import Background from './components/Background';
import Clone from './components/Clone';
import Identity from './components/Identity';
import Modal from './components/Modal';
import Video from './components/Video';
import { SlArrowDown } from "react-icons/sl";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isNavShow, setIsNavShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("START"); // 기본값 'CLONE'
  const [selectedImage,setSelectedImage] = useState(null);
  const [activeCategory,setActiveCategory] = useState('ALL');
  const [modalPosition,setModalPosition] = useState(0); //모달프로젝트 위치
  const [isLightMode, setIsLightMode] = useState(false); //라이트모드
  const [showVideo,setShowVideo] = useState(false); //비디오컴포넌트 보이기
  const [showScrollIcon, setShowScrollIcon] = useState(false); //스크롤다운아이콘 보이기
  const [finishTyping,setFinishTyping] = useState(false); //start 타이핑애니메이션 끝날때

  // 타이핑 애니메이션이 끝났다는 정보를 Start 컴포넌트로 전달받을 때
  const handleTypingFinished = () => {
    setFinishTyping(true); //타이핑끝남
    setShowScrollIcon(true); //아이콘 보이기
  };
  // 타이핑이 끝난 후 .scroll-down에 애니메이션 적용
  useEffect(() => {
    if (finishTyping) {
      gsap.from('.scroll-down', { 
        opacity: 0, 
        y: 20, 
        duration: 1        
      });
    }
  }, [finishTyping]);

  const handleScroll=()=>{
    document.body.style.overflow = 'auto';
    window.scrollTo(0,0);
  };
  // 스크롤 감지 후 비디오보이기
  useEffect(() => {
    const handleScroll = () => {
      if (setShowScrollIcon) {
        setShowVideo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 라이트모드 localStorage저장
  useEffect(()=>{
    const storedTheme = localStorage.getItem("mode");
    setIsLightMode(storedTheme);
  },[]);

  // 라이트/다크 모드 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("mode", isLightMode);
  }, [isLightMode]);

  //모드 버튼토글 함수
  const toggleMode = () => {
    setIsLightMode((prevMode)=> !prevMode);
    // console.log('mode toggle');

  };
  //메뉴 토글
  const toggleNav =()=>{
    setIsNavShow((prevNav) => !prevNav);
    // console.log('menu toggle');
  }
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
    <div className='app'>
      <NavIcons
        onNavigate={handleNavigation}
        isNavShow={isNavShow}
        toggleNav={toggleNav}
        closeNav={closeNav}
        toggleMode={toggleMode}
      />
      {activeTitle === 'START' && <Start onTypingFinished={handleTypingFinished}/>}
      {
        showScrollIcon && (
        <div className='scroll-down' onClick={handleScroll}>
          <SlArrowDown/><p>"scroll-down"</p>
        </div>
      )}
      {showVideo && <Video/>}
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
