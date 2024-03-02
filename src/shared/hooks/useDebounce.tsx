"use client"
import {useEffect, useState} from "react";


function useDebounce(value:any, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeoutHandle = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(timeoutHandle)
        }
    }, [value, delay]);
    return debouncedValue;
}

export default useDebounce;