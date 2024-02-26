"use client"
import {cNames} from "@/shared/lib/classNames/cnames";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";

import {useConnect} from "wagmi";
import { injected } from 'wagmi/connectors'

import cls from './SignUpForm.module.scss'

interface ConnectMetamaskProps {
    classname?: string;
}

const ConnectMetamask = (props: ConnectMetamaskProps) => {
    const {classname = ""} = props;
    const { connect } = useConnect()
    return (
        <div className={cNames(cls.wrapperMetamask, {}, [classname])}>
            <div className={cls.connect}>
                <h3>Connect your MetaMask account to continue</h3>
                <Button
                    onClick={() => connect({connector: injected()})}
                    theme={ButtonTheme.ORANGE}
                >MetaMask</Button>
            </div>
            <div className={cls.separator}>OR</div>

            <a className={cls.install}
                href="https://metamask.io/download/"
                target={"_blank"}
            >Install MetaMask</a>
        </div>
    )
}

export default ConnectMetamask;