import styled from "styled-components";
import {
  facebook,
  telegram,
  twitter,
  logoTextFooter,
  discord,
} from "@assets/images";
import {
  FooterWrapper,
  linkList,
  LowerFooter,
  LowerFooterText,
  StyledLink,
} from "./components";
import { useLocation } from "react-router-dom";
import { StyledHref } from "@components/Header/components";

function index() {
  const currentPath = useLocation();

  return (
    <FooterWrapper>
      <div className="w-full flex flex-col justify-center items-center gap-y-[50px] py-[76px]">
        <img src={logoTextFooter} alt="logo" />

        <div className="flex items-center gap-x-5 tablet:gap-x-[30px]">
          {linkList.map((link, idx) => (
            <StyledLink
              key={idx}
              smooth
              to={link.path}
              onClick={() => {
                link.path === "/" &&
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
              }}
              active={currentPath.pathname + currentPath.hash === link.path}
            >
              {link.name}
            </StyledLink>
          ))}

          <StyledHref href="" target="_blank">
            Docs
          </StyledHref>
        </div>

        <div className="flex items-center gap-x-5">
          <a href="" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>

          <a href="https://twitter.com/BeLaunch_" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>

          <a href="https://t.me/BeLaunchMove" target="_blank">
            <img src={telegram} alt="telegram" />
          </a>

          <a href="https://discord.gg/u2NWxZkXvD" target="_blank">
            <img src={discord} alt="reddit" />
          </a>
        </div>
      </div>

      <LowerFooter>
        <div className="w-full tablet:w-[1180px] flex justify-center items-center">
          <LowerFooterText>
            © 2021 - 2022 | All Rights Reserved - Belaunch
          </LowerFooterText>
        </div>
      </LowerFooter>
    </FooterWrapper>
  );
}

export default index;
