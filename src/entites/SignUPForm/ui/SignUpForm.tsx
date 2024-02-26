"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SignUpForm.module.scss'
import CardWrapper from "@/shared/ui/CardWrapper";
import {useAccount} from "wagmi";
import Account from "@/entites/SignUPForm/ui/Account";
import ConnectMetamask from "@/entites/SignUPForm/ui/ConnectMetamask";
import Button from "@/shared/ui/Button/Button";


interface SignUpFormProps {
    classname?: string;
    close: () => void;
}

const SignUpForm = (props: SignUpFormProps) => {
    const {classname = "", close} = props;

    const {isConnected} = useAccount();

    return (
        <div className={cNames(cls.SignUpForm, {}, [classname])}>
            <Button onClick={close}>X</Button>
            <CardWrapper>
                {isConnected ? <Account /> : <ConnectMetamask />}
            </CardWrapper>
        </div>
    )
}

export default SignUpForm;