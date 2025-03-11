import React, { useEffect } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { PiArrowFatLineUp } from "react-icons/pi";
import gsap from 'gsap';

const ScrollIcons = ({finishTyping, showScrollIcon, setShowVideo, showScrollUp}) => {

    // 타이핑이 끝난 후 .scroll-down에 애니메이션 적용
    useEffect(() => {
        if (finishTyping) {
        gsap.from('.scroll-down', { opacity:0, y:20});
        gsap.to('.scroll-down',{opacity:1, y:0, duration:1})
        }
    }, [finishTyping]);

    // 스크롤 감지 후 비디오보이기
    useEffect(()=>{
        if(showScrollIcon){
        setShowVideo(true);
        }
    });    
    const handlePageUp=()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className='scroll-icons'>
            <div className='scroll-down'>
                <SlArrowDown/><p>"scroll-down"</p>
            </div>
            {showScrollUp && (
            <div className='scroll-up'>
                <PiArrowFatLineUp onClick={handlePageUp}/>
            </div>
            )}
        </div>
        
    );
};

export default ScrollIcons;