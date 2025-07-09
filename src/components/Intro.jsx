// src/components/Intro.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 스크롤 진행도에 따라 변화
  const y = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 90]); // x축으로 회전 각도
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]); // 스크롤할 때 글자 크기 비율

  return (
    <div
      ref={containerRef}
      style={{
        height: "250vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "15vh",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          y,
          rotateX,
          scale,
          transformOrigin: "center bottom",
          textAlign: "center",
          color: "#ffe81f",
          maxWidth: "600px",
          fontSize: "2rem",
          lineHeight: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <p>
          안녕하세요. 저는 사용자 경험을 최우선으로 생각하는
          <br />
          프론트엔드 개발자입니다. <br />
          <br />
          React, TypeScript, CSS 마법을 다뤄
          <br />
          사용자가 사랑하는 UI를 만듭니다.
        </p>
        <p>
          안녕하세요. 저는 사용자 경험을 최우선으로 생각하는
          <br />
          프론트엔드 개발자입니다. <br />
        </p>
        <br />
        <p>
          <p style={{ color: "#fff" }}>학력 및 활동</p>
          컴퓨터공학과 4학년 재학중
          <div>2020.03 ~ 2026.02</div>
          <br />
          구름톤 유니브 4기(전국 대학 연합 IT 동아리)
          <div>2025.03 ~ 2025.11</div>
          <br />
          TABA 9기(대학/기업 협력형 SW 아카데미)
          <div>2020.05 ~ 2025.08</div>
        </p>
        <p>
          <p style={{ color: "#fff" }}>자격증</p>
          <div>정보처리기사</div>
          <br />
          <div>OPic/영어 - IH(Intermidiate High)</div>
        </p>
      </motion.div>
    </div>
  );
};

export default Intro;
