import React, { useEffect, useState } from 'react';
import './App.scss';
import Start from './components/Start';
import NavIcons from './components/NavIcons';
import Background from './components/Background';
import Clone from './components/Clone';
import Identity from './components/Identity';
import Modal from './components/Modal';
import Video from './components/Video';
import ScrollIcons from './components/ScrollIcons';

const App = () => {
  const [isNavShow, setIsNavShow] = useState(false); //네비게이션 보이기
  const [activeProject, setActiveProject] = useState(null); //프로젝트 보이기
  const [isModalOpen, setIsModalOpen] = useState(false); //모달창
  const [activeTitle, setActiveTitle] = useState("START"); // 네비게이션 메뉴이동
  const [selectedImage,setSelectedImage] = useState(null);
  const [activeCategory,setActiveCategory] = useState('ALL');
  const [modalPosition,setModalPosition] = useState(0); //모달프로젝트 위치
  const [isLightMode, setIsLightMode] = useState(false); //라이트모드
  const [showVideo,setShowVideo] = useState(false); //비디오컴포넌트 보이기
  const [showScrollIcon, setShowScrollIcon] = useState(false); //스크롤다운아이콘 보이기
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [finishTyping,setFinishTyping] = useState(false); //타이핑애니메이션 끝났을때

    // 타이핑 애니메이션이 끝났다는 정보를 Start 컴포넌트로 전달받을 때
    const handleTypingFinished = () => {
      setFinishTyping(true);
      setShowScrollIcon(true);
    };
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > document.documentElement.clientHeight * 0.5) {
          setShowScrollUp(true);
        } else {
          setShowScrollUp(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  // // 타이핑이 끝난 후 .scroll-down에 애니메이션 적용
  // useEffect(() => {
  //   if (finishTyping) {
  //     gsap.from('.scroll-down', { opacity: 0, y: 20, duration:0.7});
  //   }
  // }, [finishTyping]);

  // // 스크롤 감지 후 비디오보이기
  // useEffect(()=>{
  //   if(showScrollIcon){
  //     setShowVideo(true);
  //   }
  // });

  // 라이트모드 localStorage저장
  useEffect(()=>{
    const storedTheme = localStorage.getItem("mode");
    if(storedTheme === 'y'){
      setIsLightMode(true);
    }else{
      setIsLightMode(false);
    }
  },[]);

  // 라이트/다크 모드 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("mode", isLightMode ? 'y':'n');
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
    setShowScrollIcon(false);
    setShowVideo(false);
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
      {/* {
        showScrollIcon && (
        <div className='scroll-down'>
          <SlArrowDown/><p>"scroll-down"</p>
        </div>
      )} */}
      {
        showScrollIcon &&
        <ScrollIcons finishTyping={finishTyping} showScrollIcon={showScrollIcon} setShowVideo={setShowVideo} showScrollUp={showScrollUp}/>
      }
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
