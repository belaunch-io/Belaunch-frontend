import React, { useState } from "react";
import { titleEco, ellipse, belaunch, benft, bedex } from "@assets/images";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

interface OptionProps {
  name: string;
  value: "belaunch" | "marketplace" | "bedex";
}

const options: OptionProps[] = [
  {
    name: "BeLaunchpad",
    value: "belaunch",
  },
  {
    name: "BeNFT",
    value: "marketplace",
  },
  {
    name: "BeDEX",
    value: "bedex",
  },
];

const content = {
  ["belaunch"]: {
    title: "Be Launchpad",
    content:
      "Screen and help best IDO and crypto projects to launch through our trusted launchpad platform. If you have a crypto project defined and need last round of investments, apply through BeLaunch.",
  },
  ["marketplace"]: {
    title: "Be NFT (Coming soon)",
    content:
      "As the trustworthy marketplace for Non-Fungible Tokens and Semi-Fungible Tokens on Sui, BeNFT provides a first-class developer platform that includes APIs, SDKs, and developer guides. Feel free to browse around and get familiar with developing smart contracts and interacting with NFT data.",
  },
  ["bedex"]: {
    title: "BeDex (Coming soon)",
    content:
      "BeDEX will be the first aggregator dex with a referral mechanism. One of the first mainnet DEXes on Sui - one of the blockchains that has lately received a lot of attention. Using the Automated Market Maker (AMM) mechanism which is similar to Uniswap or Pancakeswap and the high security of the Move language, BeDEX promises to bring users great experiences when entering this billion dollar industry.",
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: 1021px;
  overflow: hidden;

  background: #0b100f;

  padding: 60px 16px;
  @media (min-width: 1180px) {
    padding: 120px 0;
  }

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

const Selection = styled.button<{ active?: boolean }>`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;

  font-size: 18px;
  line-height: 22px;
  @media (min-width: 1180px) {
    font-size: 20px;
    line-height: 25px;
  }

  /* identical to box height */

  letter-spacing: -0.03em;

  color: ${({ active }) => (active ? "#3CD2F9" : "#ffffff")};

  &:hover {
    color: #3cd2f9;
  }

  transition: color 0.25s ease-in-out;
`;

const Line = styled.div<{ active: boolean }>`
  width: ${({ active }) => (active ? "100%" : "0")};
  height: 3px;

  background: linear-gradient(
    88.9deg,
    rgba(60, 210, 249, 0.9) -132.42%,
    rgba(60, 210, 249, 0) 199.82%
  );
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  transition: width 0.2s ease-in-out;
`;

const OptionTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.01em;
  text-transform: capitalize;

  padding: 4px;
  box-shadow: rgba(0, 202, 244, 0.5) -5px 5px,
    rgba(0, 202, 220, 0.287) -10px 10px, #2352df72 -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

  color: #ffffff;
`;

const OptionContent = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  letter-spacing: 0.01em;

  color: #ffffff;
`;

const StyledButton = styled.button`
  width: 168px;
  height: 40px;

  border: 1px solid rgba(74, 243, 248, 0.4);
  background: linear-gradient(
    88.9deg,
    rgba(46, 216, 167, 0.1) -132.42%,
    rgba(46, 216, 167, 0) 199.82%
  );
  filter: drop-shadow(0px 0px 4px rgba(142, 161, 255, 0.25));
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.01em;

  &:hover {
    background: linear-gradient(
      88.9deg,
      #3cd2f9 -132.42%,
      rgba(46, 216, 167, 0) 199.82%
    );
  }

  color: #ffffff;
`;

function Ecosystem() {
  const [option, setOption] = useState<"belaunch" | "marketplace" | "bedex">(
    "belaunch"
  );

  return (
    <Wrapper id="ecosystem">
      <div className="w-full tablet:w-[1180px] flex flex-col items-center">
        <img src={titleEco} alt="title" className="z-10" />
        <Title className="mt-[10px] z-10 text-center">Our Best Ecosystem</Title>

        <div className="w-full flex flex-col tablet:flex-row justify-center tablet:justify-between items-center mt-7 gap-y-[38.16px]">
          <img
            src={ellipse}
            alt="ellipse"
            width="80%"
            className="absolute z-0"
          />
          <div className="flex flex-col items-center tablet:ml-[-100px]">
            <img src={belaunch} alt="belaunch" />
            <img src={benft} alt="benft" className="mt-[-20px]" />
            <img src={bedex} alt="bedex" className="mt-[-40px]" />
          </div>

          <div className="flex flex-col items-start z-10 tablet:w-1/2">
            <div className="flex justify-between gap-x-[14px] tablet:gap-x-[50px]">
              {options.map((o, idx) => {
                const active = o.value === option;

                return (
                  <div
                    className="flex flex-col"
                    onClick={() => setOption(o.value)}
                  >
                    <Selection key={idx} active={active}>
                      {o.name}
                    </Selection>
                    <Line className="mt-[9px]" active={active} />
                  </div>
                );
              })}
            </div>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <div className="flex flex-col items-left">
                <OptionTitle className="ml-4 tablet:ml-0 mt-[47px]">
                  {content[option].title}
                </OptionTitle>
                <OptionContent className="mt-[34px] tablet:h-[168px]">
                  {content[option].content}
                </OptionContent>
              </div>
            </AnimationOnScroll>

            <StyledButton className="mt-10">
              <a href="https://dev-sui.belaunch.io/" target="_blank">
                Explore More
              </a>
            </StyledButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Ecosystem;
