import {ReactNode} from "react";
import {createConfig, http} from "wagmi";
import {bsc, mainnet } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { injected, metaMask } from 'wagmi/connectors'

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}

type WagmiProviderType = {
    children: ReactNode;
}

const config = createConfig({
    chains: [mainnet, bsc],
    connectors: [
        injected()
    ],
    transports: {
        [mainnet.id]: http(),
        [bsc.id]: http()
    }
})

const Web3Provider = ({children}: WagmiProviderType) => {
    return (
        <WagmiProvider config={config}>
            {children}
        </WagmiProvider>
    )
}
export default Web3Provider;