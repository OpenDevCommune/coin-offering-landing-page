"use client"
import {useEffect, useRef} from "react";


export function useEventListener(eventName: string, handler: (event: Event) => void, element: HTMLElement | Window | null = null) {
    const savedHandler = useRef<(event: Event) => void>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const targetElement = element || window;

        const isSupported = targetElement && (targetElement instanceof HTMLElement || targetElement === window);
        if (!isSupported) {
            throw new Error("addEventListener is not supported by " + targetElement);
        }

        const eventListener = (event: Event) => {
            if (savedHandler.current) {
                savedHandler.current(event);
            }
        };

        if (targetElement instanceof HTMLElement) {
            targetElement.addEventListener(eventName, eventListener);
        } else if (targetElement === window) {
            window.addEventListener(eventName, eventListener);
        }

        return () => {
            if (targetElement instanceof HTMLElement) {
                targetElement.removeEventListener(eventName, eventListener);
            } else if (targetElement === window) {
                window.removeEventListener(eventName, eventListener);
            }
        };
    }, [eventName, element]);
}
//
// export function useEventListener(eventName: string, handler: (event: Event) => void, element: HTMLElement | Window = window) {
//     const savedHandler = useRef<(event: Event) => void>();
//
//     useEffect(() => {
//         savedHandler.current = handler;
//     }, [handler]);
//
//     useEffect(() => {
//         const isSupported = element && element.addEventListener;
//         if (!isSupported) {
//             throw new Error("addEventListener is not supported by " + element);
//         }
//
//         const eventListener = (event: Event) => {
//             if (savedHandler.current) {
//                 savedHandler.current(event);
//             }
//         };
//
//         element.addEventListener(eventName, eventListener);
//
//         return () => {
//             element.removeEventListener(eventName, eventListener);
//         };
//     }, [eventName, element]);
// }