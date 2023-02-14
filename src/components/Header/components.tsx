import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const linkList = [
  { name: "Home", path: "/" },
  { name: "Ecosystem", path: "/#ecosystem" },
  { name: "Features", path: "/#features" },
  { name: "Roadmap", path: "/#roadmap" },
];

export const HeaderWrapper = styled.div`
  background: #0d1714;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;

  padding: 20px 16px;
  @media (min-width: 1180px) {
    padding: 20px 0;
  }

  width: 100%;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GetStartedButton = styled.a`
  width: 200px;
  height: 41px;
  padding: 10px 25px;

  background: linear-gradient(
    88.9deg,
    #3cd2f9 -132.42%,
    rgba(46, 216, 167, 0) 199.82%
  );
  filter: drop-shadow(0px 0px 4px rgba(142, 255, 209, 0.25));
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  border: 1px solid rgba(74, 243, 248, 0.3);

  &:hover {
    background: linear-gradient(
      88.9deg,
      rgba(46, 216, 167, 0.1) -132.42%,
      rgba(46, 216, 167, 0) 199.82%
    );
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: capitalize;

  color: #ffffff;

  cursor: pointer;
`;

export const StyledLink = styled(NavHashLink)<{ active: boolean }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-transform: capitalize;

  color: ${({ active }) => (active ? "#3CD2F9" : "#ffffff")};

  &:hover {
    color: #3cd2f9;
  }

  transition: color 0.25s ease-in-out;
`;

export const StyledHref = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-transform: capitalize;

  color: #ffffff;

  &:hover {
    color: #3cd2f9;
  }

  transition: color 0.25s ease-in-out;
`;
