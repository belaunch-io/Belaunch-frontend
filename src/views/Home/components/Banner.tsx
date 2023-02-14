import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  bgBanner,
  bgBannerMob,
  missile,
  missileMob,
  start,
  textBanner,
} from "@assets/images";
import Typewriter from "typewriter-effect";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  background-image: url(${bgBannerMob});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 81px 0 60px 0;

  @media (min-width: 1180px) {
    height: 836px;
    background-image: url(${bgBanner});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 81px 0 0 0;
  }

  display: flex;
  justify-content: center;

  @media (min-width: 1180px) {
    align-items: center;
  }
`;

const StartButton = styled.img`
  &:hover {
    box-shadow: rgba(0, 202, 244, 0.5) -5px 5px,
      rgba(0, 202, 220, 0.287) -10px 10px, #2352df72 -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
    padding: 4px;
  }

  transition: box-shadow 0.3s ease-in-out;
`;

const MovingMissile = styled.img<{ isMob?: boolean }>`
  -webkit-animation: mover 1.5s infinite alternate;
  animation: mover 1.5s infinite alternate;

  @-webkit-keyframes mover {
    0% {
      transform: ${({ isMob }) => (isMob ? "translateY(0)" : "translateX(0)")};
    }
    100% {
      transform: ${({ isMob }) =>
        isMob ? "translateY(-15px)" : "translateX(-25px)"};
    }
  }

  @keyframes mover {
    0% {
      transform: ${({ isMob }) => (isMob ? "translateY(0)" : "translateX(0)")};
    }
    100% {
      transform: ${({ isMob }) =>
        isMob ? "translateY(-15px)" : "translateX(-25px)"};
    }
  }
`;

function Banner() {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    setTimeout(handleShow, 300);
  }, []);

  return (
    <Wrapper id="/">
      <div className="hidden w-[1180px] tablet:flex justify-between items-center">
        <div className="flex flex-col items-start w-1/2">
          <img src={textBanner} alt="text" className="mb-[25px]" />

          <Typewriter
            options={{
              strings: ["Automated", "Decentralized", "For Everyone!"],
              autoStart: true,
              loop: true,
              wrapperClassName:
                "font-[Lato] italic text-4xl tablet:text-5xl text-[#3CD2F9]",
              cursorClassName:
                "ml-1 font-[Lato] italic text-4xl tablet:text-5xl text-[#3CD2F9]",
            }}
          />

          <a
            href="https://dev-sui.belaunch.io/"
            target="_blank"
            className="z-10"
          >
            <StartButton
              src={start}
              alt="start"
              className="mt-10 cursor-pointer z-10 p-1"
            />
          </a>
        </div>

        <MovingMissile
          src={missile}
          alt="missile"
          className="w-[60%] mr-[-100px]"
        />
      </div>

      <div className="w-full tablet:hidden flex flex-col items-center pt-14 px-4">
        <MovingMissile
          src={missileMob}
          isMob
          alt="missile"
          className="w-[90%]"
        />

        <div className="flex flex-col items-center mt-5">
          <img src={textBanner} alt="text" className="mb-5" />

          <Typewriter
            options={{
              strings: ["Automated", "Decentralized", "For Everyone!"],
              autoStart: true,
              loop: true,
              wrapperClassName: "font-[Inter] italic text-5xl text-[#3CD2F9]",
              cursorClassName:
                "ml-1 font-[Inter] italic text-5xl text-[#3CD2F9]",
            }}
          />

          <a href="https://dev-sui.belaunch.io/" target="_blank">
            <StartButton
              src={start}
              alt="start"
              className="mt-5 cursor-pointer p-1"
            />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
