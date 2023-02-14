import React from "react";
import {
  titleTeam,
  mem1,
  mem2,
  mem3,
  mem4,
  twitterTeam,
  teleTeam,
  instaTeam,
  linkedinTeam,
  titlePartners,
  blocto,
  atodex,
  pontem,
  bechain,
  hyperpay,
  ellipsePartners,
} from "@assets/images";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  padding: 60px 0;
  @media (min-width: 1180px) {
    height: 1207px;
    padding: 60px 0 131px 0;
  }

  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);

  display: flex;
  justify-content: center;
  align-items: start;
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

const MemberWrapper = styled.div`
  width: 180px;
  height: 176px;
  @media (min-width: 1180px) {
    width: 308px;
    height: 238px;
  }

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(142, 255, 209, 0.02) 100%
  );
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  @media (min-width: 1180px) {
    width: 140px;
    height: 140px;
  }

  border-radius: 50%;

  background: #0e1815;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemName = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;

  font-size: 20px;
  line-height: 24px;
  @media (min-width: 1180px) {
    font-size: 24px;
    line-height: 29px;
  }

  /* identical to box height */

  text-align: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #ffffff;
`;

const MemTitle = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;

  font-size: 14px;
  line-height: 17px;
  @media (min-width: 1180px) {
    font-size: 16px;
    line-height: 19px;
  }

  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #ffffff;
`;

const SocialWrapper = styled.a`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background-color: rgba(237, 237, 237, 0.1);
  &:hover {
    background-color: #3cd2f9;
  }

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Member = ({
  mem,
  name,
  title,
}: {
  mem: string;
  name: string;
  title: string;
}) => {
  return (
    <MemberWrapper>
      <ImageWrapper className="mt-[-60px] tablet:mt-[-70px]">
        <img src={mem} alt="mem" className="w-[85%] tablet:w-full" />
      </ImageWrapper>

      <MemName className="mt-3 tablet:mt-6">{name}</MemName>
      <MemTitle className="mt-[2px] tablet:mt-[10px]">{title}</MemTitle>

      <div className="flex gap-x-[15px] tablet:gap-x-5 items-center mt-4 tablet:mt-[22px]">
        <SocialWrapper>
          <img src={twitterTeam} alt="" />
        </SocialWrapper>
        <SocialWrapper>
          <img src={teleTeam} alt="" />
        </SocialWrapper>
        <SocialWrapper>
          <img src={instaTeam} alt="" />
        </SocialWrapper>
        <SocialWrapper>
          <img src={linkedinTeam} alt="" />
        </SocialWrapper>
      </div>
    </MemberWrapper>
  );
};

const PartnerWrapper = styled.div`
  width: 100%;
  @media (min-width: 1180px) {
    width: 1307px;
  }
  height: 178px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(142, 255, 209, 0.02) 100%
  );
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Team() {
  return (
    <AppWrapper>
      <img src={ellipsePartners} alt="" className="absolute z-0 tablet:w-1/3" />

      <div className="w-full tablet:w-[1180px] flex flex-col items-center z-10 px-3 tablet:px-0">
        {/* TEAM */}
        <img src={titleTeam} alt="title" />
        <Title className="mt-[10px]">Dedicated members</Title>

        {/* <div className="hidden tablet:flex items-center gap-x-[25px] mt-[174px]">
          <Member mem={mem1} name="Kristin Watson" title="Founder" />
          <Member mem={mem2} name="Savannah Nguyen" title="Founder" />
          <Member mem={mem3} name="Cameron Williamson" title="Founder" />
          <Member mem={mem4} name="Jane Cooper" title="Founder" />
        </div>

        <div className="grid tablet:hidden grid-cols-2 gap-x-5 gap-y-[90px] mt-[116px]">
          <Member mem={mem1} name="Kristin Watson" title="Founder" />
          <Member mem={mem2} name="Savannah Nguyen" title="Founder" />
          <Member mem={mem3} name="Jane Cooper" title="Founder" />
          <Member mem={mem4} name="Jane Cooper" title="Founder" />
        </div> */}
        <PartnerWrapper className="mt-[55px] tablet:mt-[70px]">
          <Title>COMING SOON</Title>
        </PartnerWrapper>

        {/* PARTNERS */}
        <img
          src={titlePartners}
          alt="title"
          className="mt-[122px] tablet:mt-[148px]"
        />
        <Title className="mt-[10px]">Backed by the best</Title>

        <PartnerWrapper className="mt-[55px] tablet:mt-[70px]">
          <div className="flex items-center gap-x-20">
            {/* <img src={blocto} alt="blocto" />
            <img src={atodex} alt="atodex" />
            <img src={pontem} alt="pontem" />
            <img src={bechain} alt="bechain" />
            <img src={hyperpay} alt="hyperpay" /> */}
            <Title>COMING SOON</Title>
          </div>
        </PartnerWrapper>
      </div>
    </AppWrapper>
  );
}

export default Team;
