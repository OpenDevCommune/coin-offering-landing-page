"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './PartnerSection.module.scss'
import Title from "@/shared/ui/Title/Title";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import {useWindowSize} from "@/shared/hooks/useWindowSize";
import Image from "next/image";

interface PartnerSectionProps {
    classname?: string;
}

const PartnerSection = (props: PartnerSectionProps) => {
    const {classname = ""} = props;
    const [width, height] = useWindowSize();
    return (
        <section className={cNames(cls.PartnerSection, {}, [classname])}>
            <Title title={"Influencers, ambassadors, and partners"}/>

            <HWrapper columns={width >= 760 ? "two": "two"}>
                <div className={cls.info}>
                    <p>
                        Calling all influencers, ambassadors, and partners!
                    </p>
                    <p>
                        Become a part of the Gybernaty movement,
                        promote the impact of GyberExperiment on society,
                        and earn referral bonuses and affiliate rewards.
                    </p>
                    <p>
                        Join us and utilize your skills on a global scale.
                    </p>
                </div>

                    <div className={cls.card}>
                        <Image
                            fill={true}
                            src={"/images/Ambassadors.jpg"}
                            style={{borderRadius: 20, objectFit: "cover"}}
                            alt={"about-image"}
                        />
                    </div>

            </HWrapper>
            <Button
                href={"https://gyber.org"}
                theme={ButtonTheme.BLUE}
                hasBackground={true}
                fxCenter={true}
            >Read more</Button>
        </section>
    )
}

export default PartnerSection;