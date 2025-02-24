import React, { useEffect, useState } from 'react';

const Background = () => {
  const [mousePos, setMousePos] =useState({ x: window.innerWidth/2, y: window.innerHeight/2});
  let [isMouseDown, setIsMouseDown] =useState(false);
  let [lastMousePos, setLastMousePos] =useState({x:0, y:0});

  useEffect(()=>{
    const canvas = document.getElementById('bg-star'); //그릴 캔버스
    const ctx = canvas.getContext('2d'); //그리는 도구
    const stars = []; //별들의 배열
    const colors =[
      `rgba(226, 250, 254, alpha)`,
      `rgba(211, 215, 239, alpha)`,
      `rgba(238, 252, 254, alpha)`,
      `rgba(255, 255, 255, alpha)`,
      `rgba(111, 120, 150, alpha)`,
      `rgba(160, 174, 179, alpha)`,
      `rgba(151, 160, 173, alpha)`
    ]

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const handleMouseMove =(e)=>{
    //   setMousePos({x: e.clientX, y: e.clientY});
    // };
    const handleMouseDown = ()=>{ 
      // console.log('mouseee');
      setIsMouseDown(true);
      setLastMousePos({x: mousePos.x, y: mousePos.y});
    };
    const handleMouseUp = ()=> {
      // console.log('^^');
      setIsMouseDown(false);
    }

    // canvas.addEventListener('mousemove',handleMouseMove);
    canvas.addEventListener('mousedown',handleMouseDown);
    canvas.addEventListener('mouseup',handleMouseUp);

    // window.addEventListener('mousemove',handleMouseMove);

    //별 클래스
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width; //가로 위치 랜덤
        this.y = Math.random() * canvas.height; //세로 위치 랜덤
        this.size = Math.random() * 1.5+1; // 별 크기 랜덤
        this.alpha = Math.random() * 0.5 + 0.5; //투명도 랜덤
        this.alphaSpeed = Math.random() * 0.5 + 0.5; //투명도 변화 속도
        this.brightness = Math.random() * 0.5 + 0.7; //밝기랜덤
        this.speedY = Math.random() * 0.3 + 0.1; // 세로 이동 속도 랜덤
        this.direction = Math.random() > 0.5 ? 1 : -1; // 위 또는 아래로 이동 방향
        this.fadeDirection = Math.random() > 0.3 ? 1 : -1; // 별의 밝기 변화 방향
        this.scale = 1;
        this.scaleSpeed = Math.random() * 0.5;
        this.speedX = (Math.random() - 0.5) * 1.2; // 좌우 랜덤 속도
        this.speedY = (Math.random() - 0.5) * 1.2; // 상하 랜덤 속도
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      draw() {
        const spikes = 8; // 별의 꼭짓점 개수
        const outerRadius = this.size * 2.5; // 외부 반지름
        const innerRadius = this.size; // 내부 반지름
        // const rotation = Math.random() * Math.PI; // 랜덤 회전

        ctx.save(); //현재 상태 저장
        ctx.beginPath(); //새로 그릴 경로 시작점
        ctx.translate(this.x, this.y);//별 중심점 이동
        // ctx.rotate(rotation); //회전
        ctx.scale(this.scale, this.scale);

        for(let i = 0; i < spikes *2; i++){
          const angle = (Math.PI / spikes) *i; //각 꼭짓점의 각도
          const radius = i % 2 ===0 ? outerRadius : innerRadius; //번갈아가며 크기 변경
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = this.color.replace('alpha',this.alpha*this.brightness);
        ctx.fill();
        ctx.restore(); // 이전 상태 복원
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1); //별의 지름, 원형으로 만들기
        // ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha* this.brightness})`;
        // ctx.fill();
      }
      //별 상태 업데이트
      update() {
        this.y += this.speedY * this.direction; //세로롤 이동
        if (this.y > canvas.height) this.y = 0; //화면벗어나면 위로 다시
        if (this.y < 0) this.y = canvas.height; // 화면 벗어나면 아래로 다시
        
        this.alpha = Math.sin(this.y / 100) * 0.5 + 0.5; //밝기 변화
        this.scale = 1+ Math.sin(Date.now() * this.scaleSpeed)*0.3;
        this.alpha += this.fadeDirection*0.3; //밝기 점멸 속도 조정

        if(this.alpha <= 0.4 || this.alpha >=1){
          this.alphaSpeed = -this.alphaSpeed;
          this.fadeDirection *= -1;
        }
        // 별의 가로 위치도 불규칙하게 이동
        this.x += Math.sin(this.y / 100) * 0.5;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;

        // // 마우스 방향으로 부드럽게 이동하도록 적용
        const dx = (mousePos.x- canvas.width /2) *0.001;  // 마우스와 화면 중앙 거리
        const dy = (mousePos.y - canvas.height / 2) * 0.001; // 마지막 좌표 업데이트

        this.x += dx;
        this.y += dy;

        if (isMouseDown) {
          const mouseXDelta = mousePos.x - lastMousePos.x;
          this.x +=mouseXDelta * 0.02; //좌우 이동 비율
          this.x +=(mousePos.y - lastMousePos.y) * 0.02; //상하 이동 비율
          setLastMousePos({x: mousePos.x, y: mousePos.y});
        }
      }
    }
        // 별 생성 : 100개
        for (let i = 0; i < 100; i++) {
          stars.push(new Star());
        }
        // 애니메이션
        const animate=()=> {
          ctx.clearRect(0, 0, canvas.width, canvas.height); //캔버스 깨끗하게 정리
          stars.forEach(star => {
            star.draw(); //별 그리기
            star.update(); //상태 업데이트 (움직임)
          });
          requestAnimationFrame(animate); //부드러운 애니메이션
        }
        animate();

        //mouse event
        return ()=>{
          // canvas.addEventListener('mousemove',handleMouseMove);
          canvas.removeEventListener('mousedown',handleMouseDown);
          canvas.removeEventListener('mouseup',handleMouseUp);  
        }
  }, [mousePos , isMouseDown]);
  return (
    <div id='bg-star-container'>
      <canvas id='bg-star'></canvas>
    </div>
  );
};

export default Background;