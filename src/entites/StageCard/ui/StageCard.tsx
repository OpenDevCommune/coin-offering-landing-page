import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './StageCard.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";

interface StageCardProps {
    classname?: string;
}

const StageCard = (props: StageCardProps) => {
    const  disabled = true;
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.StageCard, {}, [classname])}>
            <div>
                <div className={cls.head}>
                    <h4>Current Stage</h4>
                    <h4>Total Raised</h4>
                </div>
                <div className={cNames(cls.score, {}, [cls.mb2])}>
                    <h3 className={cls.yellow}>Stage 0</h3>
                    <h3>$0</h3>
                </div>
                <div className={cls.score}>
                    <h3 className={cls.yellow}>0 Sold</h3>
                    <h3>1,5 T Gbr</h3>
                </div>
                <div className={cls.remaining}>
                    <h4>Remaining</h4>
                </div>
            </div>
            <div className={cls.bar}>
                <div className={cls.progress}></div>
            </div>
            <div className={cls.prices}>
                <p><span className={cls.yellow}>0.0223</span> USDT - 1 GBR</p>
                <p className={cls.mb2}>Next Stage: 0.023</p>

                <p className={cls.mb2}><span className={cls.blue}>0</span> Tokens Sold</p>
            </div>
            <Button
                theme={ButtonTheme.ORANGE}
                hasBackground={true}
                fxCenter={true}
                disabled={disabled}
            >{disabled ? "Coming soon" : "Buy Tokens"}</Button>
        </div>
    )
}

export default StageCard;