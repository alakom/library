import React from 'react';
import styled from "styled-components";

const Gallery = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 25px;
  pointer-events: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
const Wide = styled.div`
  grid-column: span 4;
  grid-row: span 2;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  
`;
const Narrow = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  background: #C680C6;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;


export function Advertisement(){
    return (
        <Gallery>
         <Wide style ={{background: '#F1EBE5'}}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81rl4O9aFXHb3yh22sNpma-zNFnZM-fr0FWvv8yroCWdktQHE8bEOiXkMJEuCti9tFiToivxSRqZHfWAFvZ62Ijr1_DY8Q=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'scale-down'}} /></Wide>
         <Narrow style ={{background: '#2E324F'}}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81roeJw7VvcgDA6c8pF1eQirro9pP3j-qmzjAJwqOFTMEYPpNHan5vhVDsVufCZKxFaiMimoFhXFDkrDf0rpQeVr6aVuGw=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>
         <Narrow style ={{background: '#C680C6'}}><img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81o6in_rTKsLt0x9-Ya_j_-WI8_Ld7XSvhtZLDspzecVZ2yH11nk3eCAgius2NGzuYtxnhkYQ1tvLLLR1AOyN6S2CJVl=w1860-h925" alt="Advertisement" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>  
        </Gallery>
    );
}