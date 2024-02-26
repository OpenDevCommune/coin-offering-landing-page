import {NameSvg} from "./NameSvg";
import {LogoSvg} from "./LogoSvg";

import cls from './Logo.module.scss';


interface LogoProps {
    isShowName?: boolean
}

export const Logo = ({isShowName = true}: LogoProps) => {
    return (
        <div className={cls.Logo}>
            <LogoSvg/>
            { isShowName &&  <NameSvg /> }
        </div>
    )
}