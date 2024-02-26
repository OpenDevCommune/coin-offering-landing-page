"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './GybernetSection.module.scss'
import Title from "@/shared/ui/Title/Title";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import {useWindowSize} from "@/shared/hooks/useWindowSize";
import Image from "next/image";

interface GybernetSectionProps {
    classname?: string;
}

const GybernetSection = (props: GybernetSectionProps) => {
    const {classname = ""} = props;
    const [width, height] = useWindowSize();
    return (
        <section className={cNames(cls.GybernetSection, {}, [classname])}>
            <Title title={"Gybernet Launch (Public Offering)"}/>
            <HWrapper columns={width >= 760 ? "two" : "one"}>
                <div className={cls.info}>
                    <h3>Experience Gybernet&#39;s public offering on our independent Blockchain network.</h3>
                    <p>Details:</p>
                    <ul>
                        <li>Public pool price: 30m GBR = 1 USDT</li>
                        <li>Liquidity: 100%</li>
                        <li>Vesting: 24hrs (public pool will be set a day after Event)</li>
                    </ul>
                </div>

                <div className={cls.image}>
                    <Image
                        fill={true}
                        src={"/images/card.jpg"}
                        style={{
                            borderRadius: 20,
                            objectFit: "cover",
                    }}
                        alt={"about-image"}
                    />
                </div>
            </HWrapper>
        </section>
    )
}

export default GybernetSection;