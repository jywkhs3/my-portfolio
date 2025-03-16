import React, { useEffect, useState } from 'react';

const Start = ({onTypingFinished}) => {
  const [typingTitle, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);  // index를 0으로 시작하도록 수정
  const textTitle = ['WELCOME','HYUN PORTFOLIO'];

  useEffect(() => {
    const typingSpeed = 200; // 타이핑 속도 (300ms)
    let time; // 타이머 변수

    const typingAnimation = () => {
      // 타이핑 애니메이션 반복 함수
      if (index < textTitle[currentIndex].length) {
        setDisplayText((prevText) => prevText + textTitle[currentIndex].charAt(index)); // 한 글자씩 추가
        setIndex((prevIndex) => prevIndex + 1); // 인덱스 증가
      } else {
        clearInterval(time); // 타이머 멈춤
        // setTimeout(() => {
        //   setCurrentIndex((prevIndex) => (prevIndex + 1) % textTitle.length); // 텍스트 순차적으로 변경
        //   setIndex(0); // 새로운 텍스트가 시작되면 index를 0으로 초기화
        //   setDisplayText(''); // 새로운 텍스트가 시작되면 화면을 초기화
        // }, 1000); // 1초 후에 텍스트 변경
        setTimeout(()=>{
          if(currentIndex === textTitle.length - 1){
            onTypingFinished(true);
          }
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textTitle.length); // 텍스트 순차적으로 변경
          setIndex(0); // 새로운 텍스트가 시작되면 index를 0으로 초기화
          setDisplayText(''); // 새로운 텍스트가 시작되면 화면을 초기화
        },700);
      }
    };

    time = setInterval(typingAnimation, typingSpeed); // 일정 간격으로 타이핑 애니메이션 실행

    return () => {
      clearInterval(time); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, [index, currentIndex]); // index와 currentIndex가 변경될 때마다 애니메이션 재실행

  return (
    <div className='start'>
      <h1>{typingTitle}</h1>
    </div>
  );
};

export default Start;
