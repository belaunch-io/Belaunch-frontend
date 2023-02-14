import React from "react";
import { logo } from "assets/images";
import { Flex } from "components/Widgets";

function Loading() {
  return (
    <Flex
      justify="center"
      items="center"
      className=" h-screen"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid #2A2D34",
      }}
    >
      <img src={logo} className="animate-move-left-and-right" />
    </Flex>
  );
}

export default Loading;
