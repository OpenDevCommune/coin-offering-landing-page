import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Footer.module.scss'
import {Logo} from "@/shared/ui/Logo";
import {SocialMedia} from "@/entites/SocialMedia";
;
import { Grape_Nuts } from "next/font/google";

const grape_nuts = Grape_Nuts({
    subsets: ['latin'],
    weight: ['400']
})

interface FooterProps {
    classname?: string;
}

const Footer = (props: FooterProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Footer, {}, [classname])}>
            <div className={cls.wrapper}>
                <div className={cls.logo}>
                    <Logo/>
                </div>
                <div className={cls.social}>
                    <SocialMedia />
                </div>
                <div className={cls.Copyright}>
                    <span className={grape_nuts.className}>Copyright © Gybernaty Community</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;