import React from "react";
import { DivBlack } from "./style/ModalStyle";

interface ModalProps{
    children: React.ReactNode,
};

export default function Modal({children}:ModalProps){
    document.body.style.overflow="hidden";
    return (
        <DivBlack>{children}</DivBlack>
    );
}