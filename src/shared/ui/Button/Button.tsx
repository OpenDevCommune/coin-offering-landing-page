import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    DEFAULT = "default",
    ORANGE = "orange",
    BLUE = "blue",
    GREEN = "green_blue",
    FIRE = "fire"
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classname?: string;
    theme?: ButtonTheme;
    hasBackground?: boolean;
    href?: string;
    target?: "_self" | "_blank",
    fxCenter?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        classname = "",
        children,
        theme = ButtonTheme.DEFAULT,
        disabled = false,
        hasBackground = false,
        href,
        target = "_self",
        fxCenter = false,
        ...others
    } = props;
    return (
        <div className={cNames(
            cls.wrapper,
            {[cls.bg]: hasBackground, [cls.fxCenter]: fxCenter},
            [classname])}>
            {href ? (
                <a className={
                    cNames(
                        cls.Button,
                        {[cls.disabled]: disabled },
                        [cls[theme]])}
                   href={disabled ? "#": href}
                   target={target}
                >{children}</a>
                ) : (
                    <button
                        {...others}
                        className={
                        cNames(
                            cls.Button,
                            {[cls.disabled]: disabled },
                            [cls[theme]])}

                        disabled={disabled}
                    >{children}</button>
                )
            }
        </div>
    )
}

export default Button;