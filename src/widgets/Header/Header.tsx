
"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Header.module.scss'
import {Logo} from "../../shared/ui/Logo";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import {useModal} from "@/shared/ui/Modal";

interface HeaderProps {
    classname?: string;
}

const Header = (props: HeaderProps) => {
    const {setIsOpened} = useModal();
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Header, {}, [classname])}>
            <div className={cls.content}>
                <Logo/>

                <div className={cls.controls}>
                    <Button theme={ButtonTheme.BLUE} onClick={() => setIsOpened(true)}>
                        Sign up to SAPP
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;