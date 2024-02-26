import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Subtitle.module.scss'

interface SubtitleProps {
    classname?: string;
    text: string;
}

const Subtitle = (props: SubtitleProps) => {
    const {classname = "", text} = props;
    return (
        <div className={cNames(cls.Subtitle, {}, [classname])}>
            <div className={cls.blurBg}/>
            <h2 className={cls.text}>{text}</h2>
        </div>
    )
}

export default Subtitle;