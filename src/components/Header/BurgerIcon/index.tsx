import React from "react";
import "./index.css";

interface BurgerIconProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerIcon({ isOpen, setOpen }: BurgerIconProps) {
  return (
    <div
      id="nav-icon3"
      className={`${isOpen ? "open" : ""} tablet:hidden`}
      onClick={() => setOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerIcon;
