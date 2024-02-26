import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Title.module.scss'

interface TitleProps {
    classname?: string;
    title: string;
}

const Title = (props: TitleProps) => {
    const {classname = "", title} = props;
    return (
        <h2 className={cNames(cls.Title, {}, [classname])}>
            <span className={cls.backTitle}>{title}</span>
            {title}
        </h2>
    )
}

export default Title;