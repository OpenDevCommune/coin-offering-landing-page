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
            <Title title={"GyberNet Launch (Public Offering)"}/>
            <HWrapper columns={width >= 760 ? "two" : "one"}>
                <div className={cls.info}>
                    <h3>Experience GyberNet&#39;s Public Offering on our Independent Blockchain Network (Gybernet).</h3>
                    <p>Details:</p>
                    <ul>
                        <li>Blockchain 3.0 created as part of a new type of distributed networks</li>
                        <li>SocialChain adoption</li>
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
                    <p className={cls.gybernet}>
                        GyberNet Blockchain
                    </p>
                </div>
            </HWrapper>
        </section>
    )
}

export default GybernetSection;