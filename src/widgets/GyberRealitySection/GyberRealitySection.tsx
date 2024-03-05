import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './GyberRealitySection.module.scss'
import Title from "@/shared/ui/Title/Title";
import Subtitle from "@/shared/ui/Subtitle/Subtitle";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import CardWrapper from "@/shared/ui/CardWrapper";
import Image from "next/image";
import UBLineTextBlock from "@/shared/ui/UBLineTextBlock/UBLineTextBlock";
import Button from "@/shared/ui/Button/Button";


interface GyberRealitySectionProps {
    classname?: string;
}

const GyberRealitySection = (props: GyberRealitySectionProps) => {
    const {classname = ""} = props;
    return (
        <section className={cNames(cls.GyberRealitySection, {}, [classname])}>
            <Title title={"Gyber Reality (Events)"}/>
            <Subtitle
                text={"Join us at events and conferences worldwide to celebrate the adoption and implementation of the GyberExperiment."}/>
            <HWrapper columns={"three"}>
                <CardWrapper>
                    <div className={cls.hex}>
                        <Image
                            fill={true}
                            src={"/images/asian.webp"}
                            style={{objectFit: "contain"}}
                            alt={"about-image"}
                        />
                    </div>
                    <div className={cls.description}>
                        <h2>Asian Region</h2>
                        <p>Dubai</p>
                    </div>
                </CardWrapper>
                <CardWrapper>
                    <div className={cls.hex}>
                        <Image
                            fill={true}
                            src={"/images/africa.jpg"}
                            style={{objectFit: "contain"}}
                            alt={"about-image"}
                        />
                    </div>
                    <div className={cls.description}>
                        <h2>African Region</h2>
                        <p>Lagos, Nigeria - Q2 2024</p>
                    </div>

                </CardWrapper>
                <CardWrapper>
                    <div className={cls.hex}>
                        <Image
                            fill={true}
                            src={"/images/european.jpg"}
                            style={{objectFit: "contain"}}
                            alt={"about-image"}
                        />
                    </div>
                    <div className={cls.description}>
                        <h2>European Region</h2>
                        <p>Berlin</p>
                    </div>
                </CardWrapper>
            </HWrapper>
            <UBLineTextBlock classname={cls.mt4}>
                <a className={cls.link} href={"https://gyber.org/events"} target={"_blank"}>
                    Go to the Events page on the our Website
                </a>
            </UBLineTextBlock>
        </section>
    )
}

export default GyberRealitySection;