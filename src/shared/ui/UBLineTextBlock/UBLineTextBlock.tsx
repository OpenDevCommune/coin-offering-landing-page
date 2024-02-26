import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './UBLineTextBlock.module.scss'
import {ReactNode} from "react";

interface UBLineTextBlockProps {
    children: ReactNode;
    classname?: string;
}

const UBLineTextBlock = (props: UBLineTextBlockProps) => {
    const {classname = "", children} = props;
    return (
        <div className={cNames(cls.UBLineTextBlock, {}, [classname])}>
            {children}
        </div>
    )
}

export default UBLineTextBlock;