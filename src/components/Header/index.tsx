import { logoText, logoMob } from "@assets/images";
import {
  GetStartedButton,
  HeaderWrapper,
  linkList,
  StyledHref,
  StyledLink,
} from "./components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import BurgerIcon from "./BurgerIcon";

function index() {
  const currentPath = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      {/* DESKTOP */}
      <div className="w-[1180px] hidden tablet:flex justify-between items-center ">
        <Link to="/">
          <img src={logoText} alt="logo" />
        </Link>

        <div className="flex items-center gap-x-[30px]">
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

        <GetStartedButton href="https://dev-sui.belaunch.io/" target="_blank">
          Apply For IDO
        </GetStartedButton>
      </div>

      {/* MOBILE */}
      <div className="w-full flex justify-between items-center tablet:hidden relative">
        <Link to="/">
          <img src={logoText} alt="logo" />
        </Link>

        <BurgerIcon isOpen={isOpen} setOpen={setOpen} />
      </div>

      <Dropdown isOpen={isOpen} setOpen={setOpen} />

      <div
        className={`absolute top-[90px] z-0 inset-0 h-screen cursor-default ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.15)" }}
        onClick={() => setOpen(!isOpen)}
      ></div>
    </HeaderWrapper>
  );
}

export default index;
