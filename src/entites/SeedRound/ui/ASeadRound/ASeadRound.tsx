import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './ASeadRound.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";

interface ASeadRoundProps {
    classname?: string;
}

const ASeadRound = (props: ASeadRoundProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.ASeadRound, {}, [classname])}>
            <div className={cls.info}>
                <h3>A.Seed Round</h3>
                <h4 className={cls.blue}>(For Project Development)</h4>
                <p>
                    We are offering progressive investors
                    an opportunity to invest in Gyber&#39;s seed
                    round for increased profit rewards.
                </p>
            </div>
            <div className={cls.details}>
                <h4 className={cls.blue}>Details:</h4>
                <ul>
                    <li>Name: Gyber</li>
                    <li>Symbol: $GBR</li>
                    <li>Blockchain: BSC network</li>
                </ul>
            </div>
            <div className={cls.price}>
                <h4 className={cls.blue}>Price for:</h4>
                <ul>
                    <li>$100k &gt; — 5m $GBR = 1 USDT</li>
                    <li>$10k &gt; — 10m $GBR = 1 USDT</li>
                    <li>$100 &gt; — 30m $GBR = 1 USDT</li>
                </ul>
            </div>
            <div className={cls.salesBox}>
                <p>Sales amount: $500k</p>
                <p>Date: 12th - .... February</p>
            </div>
            <p>
                The seed round provides all participants with exclusive opportunities
            </p>
            <Button
                theme={ButtonTheme.BLUE}
                hasBackground={true}
                fxCenter={true}
            >Join</Button>
        </div>
    )
}

export default ASeadRound;