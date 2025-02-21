import React, { useEffect, useState } from 'react';

const Start = () => {
  const [typingTitle, setDisplayText] = useState('');
  const [currentIndex,setCurrentIndex] = useState(0);
  const textTitle = ['WELCOME' ,'HYUN PORTFOLIO'];

  useEffect(() => {
    let index = -1; // 타이핑 중인 인덱스 0 초기화
    const typingSpeed = 500; // 타이핑 속도 (300ms)
    let time; // time을 useEffect 내에서 정의

    // 타이핑 애니메이션 반복 함수
    const typingAnimation = () => {
      setDisplayText(''); // 텍스트 초기화
      index = -1; // 인덱스 초기화

      time = setInterval(() => {
        // index가 타이핑할 텍스트의 길이보다 적을 때만 텍스트 추가
        // console.log(textTitle.length);
        if (index < textTitle[currentIndex]?.length) {
          setDisplayText((prevText) => prevText + textTitle[currentIndex][index]); // displayText 한 글자씩 추가
          index++; // 인덱스 증가시켜 다음 글자 추가
        } else {
          clearInterval(time); // 타이머 멈춤
          setTimeout(() => {
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % textTitle.length);
          }, 1000);
        }
      }, typingSpeed);
    };

    typingAnimation(); // 컴포넌트 마운트 시 애니메이션 시작

    return () => {
      clearInterval(time); // 컴포넌트 언마운트 시 타이머를 정리합니다.
    };
  }, [currentIndex]);

  return (
    <div className='start'>
      <h1>{typingTitle}</h1>
    </div>
  );
};

export default Start;
