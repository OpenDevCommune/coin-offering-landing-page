"use client";
import {createContext, PropsWithChildren, useContext, useState} from "react";
import {Modal} from "../index";
import SignUpForm from "@/entites/SignUPForm/ui/SignUpForm";


interface ModalContextProps {
    setIsOpened: (value: boolean) => void;
}
const defaultValue = {
    setIsOpened: () => false
}

const ModalContext = createContext<ModalContextProps>(defaultValue);

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used under <ModalContextProvider/>')
    }
    return context;
}

export function ModalContextProvider({children}:PropsWithChildren) {
    const [isOpened, setIsOpened] = useState(false);
    const value = {setIsOpened}
    return (
        <ModalContext.Provider value={value}>
            {children}
            <Modal isOpen={isOpened}>
                <SignUpForm close={() => setIsOpened(false)}/>
            </Modal>
        </ModalContext.Provider>
    )
}

