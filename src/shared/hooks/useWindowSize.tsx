"use client"
import {useCallback, useEffect, useState} from "react";
import {useEventListener} from "./useEventListener";


const INITIAL_SIZE  = [0,0]
export function useWindowSize() {
    const [size, setSize] = useState(INITIAL_SIZE);

    useEffect(() => {
        const {innerWidth, innerHeight} = window;
        setSize([innerWidth, innerHeight])
    }, []);

    useEventListener(
        'resize',
        useCallback((event:any) => {
            const { innerWidth, innerHeight } = event.target;
            setSize([innerWidth, innerHeight]);
        }, [])
    )
    return size;
}