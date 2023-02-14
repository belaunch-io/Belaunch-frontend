import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const linkList = [
  { name: "Home", path: "/" },
  { name: "Ecosystem", path: "/#ecosystem" },
  { name: "Features", path: "/#features" },
  { name: "Roadmap", path: "/#roadmap" },
];

export const FooterWrapper = styled.div`
  background: transparent;
  bottom: 0;

  width: 100%;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  text-transform: uppercase;

  color: #ffffff;
`;

export const Content = styled.span`
  font-family: "Poppins";
  font-style: italic;
  opacity: 0.5;
  @media (min-width: 1180px) {
    font-style: normal;
    opacity: 0.7;
  }
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
`;

export const StyledLink = styled(NavHashLink)<{ active: boolean }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;

  font-size: 14px;
  line-height: 17px;
  @media (min-width: 1180px) {
    font-size: 16px;
    line-height: 20px;
  }

  /* identical to box height */

  letter-spacing: 0.02em;

  text-transform: capitalize;

  color: ${({ active }) => (active ? "#3CD2F9" : "#ffffff")};

  &:hover {
    color: #3cd2f9;
  }

  transition: color 0.25s ease-in-out;
`;

export const LowerFooter = styled.div`
  border-top: 0.6px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 29px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LowerFooterText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;

  font-size: 12px;
  line-height: 15px;
  @media (min-width: 1180px) {
    font-size: 14px;
    line-height: 17px;
  }

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: rgba(255, 255, 255, 0.5);
`;
