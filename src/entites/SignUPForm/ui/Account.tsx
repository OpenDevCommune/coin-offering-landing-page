"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SignUpForm.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import {useEffect, useState} from "react";
import {useAccount, useDisconnect, useSignMessage} from "wagmi";
import axios from "axios";


interface AccountProps {
    classname?: string;
}

function formatAddress(address?: string) {
    if (!address) return null;
    return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}

const Account = (props: AccountProps) => {
    const {classname = ""} = props;
    const [error, setError] = useState<string>("");
    const [username, setUsername] = useState<string>("")

    const [disabled, setDisabled] = useState<boolean>(true);
    const [signedNonce, setSignedNonce] = useState("")

    const {address} = useAccount();
    const {disconnect} = useDisconnect();
    const formattedAddress = formatAddress(address);
    const {signMessageAsync} = useSignMessage()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setError("")
        }, 2000)
        return () => clearTimeout(timeoutId);
    }, [error]);

    useEffect(() => {
        const pattern = /^[A-Za-z][A-Za-z0-9_]{6,29}$/
        if (username.length < 6) {
            setError("Username must be at least 6 characters!")
        } else {
            console.log(pattern.test(username))
            if (!pattern.test(username)) {
                setError("Username must contain only letters and numbers and an underscore")
                setDisabled(true)
            } else {
                setDisabled(false)
            }
        }
    }, [username])

    const handleSubmit = async () => {
        setDisabled(true)
        let signed;
        try {
            if (!signedNonce) {
                const response = await axios.post("http://localhost:3000/api/v1/crypto/nonce", {publicAddress: address})
                signed = await signMessageAsync({message: response.data.nonce, account: address})
                setSignedNonce(signed)
            }
        } catch (error:any) {
            setError(error.response.data.message)
        }

        await axios.post("http://localhost:3000/api/v1/register", {
            username: username,
            publicAddress: address,
            signedNonce: signedNonce ? signedNonce : signed
        }).then(() => {
            window.location.reload();
            disconnect();
        })
            .catch(error => {
            setError(error.response.data.message)
        })
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
                {error.length > 0 && <p className={cls.error}>{error}</p>}
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