import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './HWrapper.module.scss'
import {ReactNode} from "react";

interface HWrapperProps {
    children: ReactNode;
    classname?: string;
    columns?: "one" | "two" | "three" | "four";
}

const HWrapper = (props: HWrapperProps) => {
    const {classname = "", children, columns = "one"} = props;
    return (
        <div className={cNames(cls.HWrapper, {}, [classname, cls[columns]])}>
            {children}
        </div>
    )
}

export default HWrapper;