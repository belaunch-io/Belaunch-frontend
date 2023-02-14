import {
  arrowFeatures,
  coin1,
  coin2,
  coin3,
  coin4,
  coin5,
  coin6,
  ellipseFe,
  titleFeatures,
} from "@assets/images";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  padding: 60px 0;
  @media (min-width: 1180px) {
    height: 1230px;
    padding: 120px 0;
  }

  background: #0b100f;

  z-index: 10;

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

// Box
const BoxWrapper = styled.div`
  width: 100%;

  padding: 38px 24px;
  @media (min-width: 1180px) {
    width: 390px;
    padding: 38px 29px;
  }

  height: 395px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(142, 255, 209, 0.02) 100%
  );
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

const BoxTitle = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 125% */

  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #ffffff;
`;

const BoxContent = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  letter-spacing: 0.01em;
  text-transform: capitalize;
`;

const View = styled.button`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;

  color: #3cd2f9;

  &:hover {
    box-shadow: rgba(26, 187, 114, 0.4) -5px 5px,
      rgba(17, 217, 137, 0.224) -10px 10px, rgba(35, 223, 157, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px;
    padding: 0 4px 4px 4px;
  }

  transition: box-shadow 0.3s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = ({
  coin,
  title,
  content,
}: {
  coin: string;
  title: string;
  content: string;
}) => {
  return (
    <BoxWrapper>
      <img src={coin} alt="coin" width={78} height={90} />
      <BoxTitle className="mt-7 tablet:mt-[38px]">{title}</BoxTitle>
      <BoxContent className="mt-5 h-[86px]">{content}</BoxContent>

      <View className="mt-[30px]">
        <span>View more</span>
        <img src={arrowFeatures} alt="coin" className="ml-[7px]" />
      </View>
    </BoxWrapper>
  );
};

function Features() {
  return (
    <Wrapper id="features">
      <div className="w-full flex flex-col items-center px-4 tablet:px-0 overflow-y-hidden">
        <img
          src={ellipseFe}
          alt="ellipse"
          className="absolute z-0 bottom-[5px]"
        />
        <img src={titleFeatures} alt="title" />
        <Title className="mt-[10px] mb-[90px] tablet:mb-[70px]">
          Access The Future
        </Title>

        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          className="hidden tablet:block"
        >
          <div className="grid grid-cols-3 gap-x-[25px] gap-y-[30px] z-10">
            <Box
              coin={coin1}
              title="BeDEX (Coming soon)"
              content="Trade your assets on the BeDEX decentralized exchange."
            />
            <Box
              coin={coin2}
              title="Governance"
              content="Join the BeEcosystem and participate in ecosystem governance."
            />
            <Box
              coin={coin3}
              title="Stake BeEcosystem Token"
              content="Stake & access the benefits of BeEcosystem holders."
            />
            <Box
              coin={coin4}
              title="Yield Farming & Vesting"
              content="Access Yield Farming & vesting distribution solutions."
            />
            <Box
              coin={coin5}
              title="Community Launchpad"
              content="BeEcosystem Token stakers can vote for potential startups and win guaranteed allocations."
            />
            <Box
              coin={coin6}
              title="And furthermore"
              content="We will keep expanding our product ecosystem…"
            />
          </div>
        </AnimationOnScroll>

        <div className="flex tablet:hidden flex-col gap-y-[30px] z-10">
          <Box
            coin={coin1}
            title="BeDEX"
            content="Trade your assets on the BeDEX decentralized exchange."
          />
          <Box
            coin={coin2}
            title="Governance"
            content="Join the BeEcosystem and participate in ecosystem governance."
          />
          <Box
            coin={coin3}
            title="Stake BeEcosystem Token"
            content="Stake & access the benefits of BeEcosystem holders."
          />
          <Box
            coin={coin4}
            title="Yield Farming & Vesting"
            content="Access Yield Farming & vesting distribution solutions."
          />
          <Box
            coin={coin5}
            title="Community Launchpad"
            content="BeEcosystem Token stakers can vote for potential startups and win guaranteed allocations."
          />
          <Box
            coin={coin6}
            title="And furthermore"
            content="We will keep expanding our product ecosystem…"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Features;
