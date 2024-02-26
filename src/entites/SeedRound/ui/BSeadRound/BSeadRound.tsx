import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './BSeadRound.module.scss'

interface BSeadRoundProps {
    classname?: string;
}

const BSeadRound = (props: BSeadRoundProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.BSeadRound, {}, [classname])}>
            <div className={cls.info}>
                <h3>B. Private Presale</h3>
                <h4 className={cls.blue}>(For Liquidity)</h4>
                <p>
                    Invitation to more investors to participate
                    in private presale with a 5% increase in price
                    after each purchase — the earlier, the better.
                </p>
            </div>
            <div className={cls.details}>
                <h4 className={cls.blue}>Details:</h4>
                <ul>
                    <li>Name: Gyber</li>
                    <li>Symbol: $GBR</li>
                    <li>Blockchain: BSC network</li>
                    <li>Initial Price: 30m $GBR = 1 USDT</li>
                </ul>
            </div>
            <div className={cls.salesBox}>
                <p>Sales amount: $500k</p>
                <p>Date: 12th - .... February</p>
            </div>
        </div>
    )
}

export default BSeadRound;