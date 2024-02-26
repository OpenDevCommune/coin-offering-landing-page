"use client"
import {ReactNode, useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = ({children, element}: PortalProps) => {
    const [mounted, setMounted] = useState(false);
    if (typeof document !== 'undefined' && !element) {
        element = document.body as HTMLElement;
    }
    useEffect(() => setMounted(true), []);

    return mounted ? createPortal(children, element as HTMLElement) : null;
}