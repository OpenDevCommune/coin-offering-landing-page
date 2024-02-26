"use client"
import Web3Provider from "@/app/providers/Web3Provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactNode} from "react";
import {ModalContextProvider} from "@/shared/ui/Modal";

const queryClient = new QueryClient()

type ProviderType = {
    children: ReactNode
}




const Providers = ({children}: ProviderType) => {
    return (
            <Web3Provider>
                <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
                    {children}
        </ModalContextProvider>
                </QueryClientProvider>
            </Web3Provider>
    )
}
export default Providers;