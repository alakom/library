import React from 'react';
import styled from "styled-components";
import {Advertisement} from "./components/Advertisement";
import {Catalog} from "./components/Catalog";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  height: 25px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #F1F1F2;
  background: #F8F8FA;
`;
function App() {
  return (
    <>
    <Wrapper>
    <Title>Мой сайтииик!!</Title>
    </Wrapper>
    <Advertisement/>
    <Catalog/>
    </>
  );
}
export default App;
