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
         <Wide style ={{background: '#F1EBE5'}}><img src="https://1.downloader.disk.yandex.ru/preview/dbdba02d7c10522fd5829fbbe10ac77f969ed28f4dd2249fcb4405abd8054985/inf/_9eH7_X8pOAOUHOq3EPBMw6I4Mj_W3WRcdlmm_q9cVOZ2vbKrTapUOnQnAlaqg-pH3b1kbAZW2Igrp4GtOD3gA%3D%3D?uid=808179730&filename=bAdv.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=808179730&tknv=v2&size=893x887" alt="some example image" style={{width: '100%',height: '100%',objectFit: 'scale-down'}} /></Wide>
         <Narrow style ={{background: '#2E324F'}}><img src="https://1.downloader.disk.yandex.ru/preview/7d1d555f57dd041b7c534aa5bf26d5e7671e4a236468de6ccad00e96f655a035/inf/QAkcq0DptRs0M3CxLi_xBg6I4Mj_W3WRcdlmm_q9cVOCKosLrCdqcy2egUosx3SZD9Rtol9qJdNON7MxOanLoQ%3D%3D?uid=808179730&filename=sAdv1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=808179730&tknv=v2&size=893x887" alt="some example image" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>
         <Narrow style ={{background: '#C680C6'}}><img src="https://3.downloader.disk.yandex.ru/preview/61b10e123d3513825f57b0c693bf0680a188ac75d527133cc66191c957823d1a/inf/vvZ52O61WzgqhJTJU2lzvw6I4Mj_W3WRcdlmm_q9cVNX-TAqHo_haKo_XUrSQacJOcImROQglK65AeR7zx8t3g%3D%3D?uid=808179730&filename=sAdv2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=808179730&tknv=v2&size=893x887" alt="some example image" style={{width: '100%',height: '100%',objectFit: 'contain'}} /></Narrow>  
        </Gallery>
    );
}