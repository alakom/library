import React from 'react';
import styled from "styled-components";
import {Advertisement} from "./components/Advertisement";
import {Catalog} from "./components/Catalog";
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
    <Navigation/>
    <Advertisement/>
    <Catalog/>
    </>
  );
}
export default App;
