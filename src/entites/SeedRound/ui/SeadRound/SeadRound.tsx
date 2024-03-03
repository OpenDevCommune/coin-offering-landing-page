import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SeadRound.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";

interface SeadRoundProps {
    classname?: string;
}

const SeadRound = (props: SeadRoundProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.SeadRound, {}, [classname])}>
            <div className={cls.info}>
                <h3>Seed Round</h3>
                <p>
                    We are offering progressive investors
                    an opportunity to invest in Gyber&#39;s
                    seed round for increased profit rewards.</p>
                <p>Invitation to more investors to participate
                    in private presale with a 5% increase in
                    price after each purchase — the earlier,
                    the better.</p>

            </div>
            <div className={cls.condition}>
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
            </div>
            <div className={cls.salesBox}>
                <p>Sales amount: $500k</p>
                <p>Date: 1st March</p>
                <h3>
                    10 stages of investing in a seed round. Increase in price with each stage by 30%
                </h3>
            </div>
            <p>
                The seed round provides all participants with exclusive opportunities
            </p>
            <Button
                href={"https://gyber.org"}
                theme={ButtonTheme.BLUE}
                hasBackground={true}
            >Join</Button>
        </div>
    )
}

export default SeadRound;