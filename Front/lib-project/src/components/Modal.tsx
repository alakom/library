import styled from "styled-components";
import React from "react";


const DivBlack = styled.div`
position: fixed;
display: flex;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.70);
align-items: center;
 justify-content: center;
 top:0px;
 bottom: 0px;
 right:0px;
 left: 0px;
 margin: 0;
 z-index:2;
`;

interface ModalProps{
    children: React.ReactNode,
};

export function Modal({children}:ModalProps){
    document.body.style.overflow="hidden";
return (
<DivBlack>{children}</DivBlack>
);
}