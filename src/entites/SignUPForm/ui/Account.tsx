"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SignUpForm.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import {useEffect, useState} from "react";
import {useAccount, useDisconnect, useEnsAvatar, useEnsName, useSignMessage} from "wagmi";
import {tryCatch} from "standard-as-callback/built/utils";
import axios from "axios";

interface AccountProps {
    classname?: string;
}
function formatAddress(address?:string) {
    if (!address) return null;
    return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}

const Account = (props: AccountProps) => {
    const {classname = ""} = props;
    const [error, setError] = useState<string>("");
    const [username, setUsername] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(true);

    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const formattedAddress = formatAddress(address);
    const { signMessageAsync } = useSignMessage()

    useEffect(() => {
        if (username.length > 5) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [username])
    const handleSubmit = async () => {
        try {
            const signedMessage = await signMessageAsync({message: username, account: address})
            const data = {
                signedMessage,
                username,
                address
            }
            await axios.post("http://localhost:3000/api/v1/register", data)
        } catch (e) {
            setError("Ошибка отправки сообщения");
        }
    }
    return (
        <div className={cNames(cls.Account, {}, [classname])}>
            <div className={cls.header}>
                <p>Your address:</p>
                {address && (
                    <span className={cls.wallet}>
                        {formattedAddress}
                    </span>
                )}
            </div>
            <div className={cls.formGroup}>
                <label>Username:</label>
                <input
                    className={cls.Input}
                    type="text"
                    value={username}
                    placeholder={"Input your name"}
                    onChange={e => setUsername(e.target.value)}
                />
                {error.length > 0 && <p className={cls.error}>Username must not be empty!</p>}
            </div>
            <Button
                theme={ButtonTheme.GREEN}
                onClick={() => handleSubmit()}
                disabled={disabled}
            >Sign up</Button>
        </div>
    )
}

export default Account;