import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './CardWrapper.module.scss'
import {ReactNode} from "react";

interface indexProps {
    children?: ReactNode;
    classname?: string;
    invert?: boolean;
    alignment?: "center" | "left";
    isNotStretch?: boolean;
    maxWidth?: number;
    height?: number;
}

const index = (props: indexProps) => {
    const {
        children,
        classname = "",
        invert = false,
        alignment = "center",
        isNotStretch = false,
        maxWidth,
        height
    } = props;
    return (
        <div className={
            cNames(
                cls.CardWrapper,
                {[cls.invert]: invert, [cls.isNotStretch]: isNotStretch},
                [classname, cls[alignment]])}
             style={{maxWidth: maxWidth && maxWidth, height: height && height}}
        >
            {children}
        </div>
    )
}

export default index;