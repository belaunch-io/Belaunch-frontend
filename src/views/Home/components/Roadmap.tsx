import React from "react";
import styled from "styled-components";
import {
  titleRoadmap,
  r1,
  r2,
  r3,
  r4,
  content1,
  content2,
  content3,
  content4,
  arrowRoadmap,
  ellipseRoadmap,
} from "@assets/images";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;

  padding: 60px 0;
  @media (min-width: 1180px) {
    height: 1207px;
    padding: 120px 0;
  }

  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;

  font-size: 28px;
  line-height: 34px;
  @media (min-width: 1180px) {
    font-size: 42px;
    line-height: 50px;
  }

  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #ffffff;
`;

const Phase = ({ phase, content }: { phase: string; content: string }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={phase} alt="phase" className="w-[61.5%] tablet:w-auto" />
      <img
        src={arrowRoadmap}
        alt="arrow"
        className="mt-[18.64px] tablet:mt-[30px]"
      />
      <img
        src={content}
        alt="content"
        className="mt-[15.19px] tablet:mt-[39.41px]"
      />
    </div>
  );
};

function Roadmap() {
  return (
    <Wrapper id="roadmap">
      <div className="w-full flex flex-col items-center px-4 tablet:px-0">
        <img
          src={ellipseRoadmap}
          alt="ellipseRoadmap"
          className="absolute z-0 left-0 bottom-[5px]"
        />
        <img src={titleRoadmap} alt="title" className="z-10" />
        <Title className="z-10 mt-[10px]">See What Are Waiting For You</Title>

        <AnimationOnScroll
          animateIn="animate__zoomIn"
          className="w-full hidden tablet:flex justify-center items-center mt-[101px]"
        >
          <div className="flex items-start gap-x-[25px]">
            <Phase phase={r1} content={content1} />
            <Phase phase={r2} content={content2} />
            <Phase phase={r3} content={content3} />
            <Phase phase={r4} content={content4} />
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__zoomIn"
          className="w-full flex tablet:hidden justify-center items-center mt-[53px]"
        >
          <div className="grid grid-cols-2 gap-5">
            <Phase phase={r1} content={content1} />
            <Phase phase={r2} content={content2} />
            <Phase phase={r3} content={content3} />
            <Phase phase={r4} content={content4} />
          </div>
        </AnimationOnScroll>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
