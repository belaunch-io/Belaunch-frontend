import React, { ReactNode } from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  justify?: "start" | "end" | "around" | "between" | "center";
  items?: "start" | "end" | "center";
  flexDirection?: "col" | "row";
  style?: any;
  onClick?: () => void;
}

const Flex = ({
  onClick,
  children,
  className,
  justify = "start",
  items = "start",
  flexDirection = "row",
  style = {},
}: FlexProps) => {
  const handleClick = () => {
    if (!onClick) return;
    else onClick();
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-${flexDirection} items-${items} justify-${justify} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export const Column = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className: string;
  style?: any;
}) => {
  return (
    <Flex style={style} flexDirection="col" className={`${className}`}>
      {children}
    </Flex>
  );
};

export default Flex;
