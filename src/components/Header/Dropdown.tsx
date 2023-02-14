import { GetStartedButton, StyledHref, StyledLink } from "./components";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { linkList } from "./components";

interface DropdownProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 90px;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "338px" : "0px")};

  padding: 0 16px;

  background: rgba(3, 12, 9, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 113px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 36px 36px;

  transition: height 0.15s ease-in-out;

  z-index: 50;

  display: flex;
  flex-direction: column;
  align-items: start;

  @media (min-width: 1180px) {
    display: none;
  }
`;

function Dropdown({ isOpen, setOpen }: DropdownProps) {
  const currentPath = useLocation();

  return (
    <Wrapper isOpen={isOpen}>
      <div
        className={`mt-6 ${
          isOpen ? "flex" : "hidden"
        } flex-col items-start gap-y-5 w-full px-4 py-5`}
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
        }}
      >
        {linkList.map((link, idx) => (
          <StyledLink
            key={idx}
            smooth
            to={link.path}
            onClick={() => setOpen(!isOpen)}
            active={currentPath.pathname + currentPath.hash === link.path}
          >
            {link.name}
          </StyledLink>
        ))}

        <StyledHref href="" target="_blank">
          Docs
        </StyledHref>
      </div>

      <div
        className={`mt-[44.33px] ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center w-full`}
      >
        <GetStartedButton>
          <a href="https://dev-sui.belaunch.io/" target="_blank">
            Apply For IDO
          </a>
        </GetStartedButton>
      </div>
    </Wrapper>
  );
}

export default Dropdown;
