import React, { useEffect } from "react";
import styled from "styled-components";
import { Banner, Ecosystem, Features, Roadmap, Team } from "./components";

const AppWrapper = styled.div`
  min-height: 100vh;
`;

function index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Banner />
      <Ecosystem />
      <Features />
      <Roadmap />
      <Team />
    </AppWrapper>
  );
}

export default index;
