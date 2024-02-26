"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './AboutSection.module.scss'
import Title from "@/shared/ui/Title/Title";
import Subtitle from "@/shared/ui/Subtitle/Subtitle";
import Image from "next/image";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import {useWindowSize} from "@/shared/hooks/useWindowSize";

interface AboutSectionProps {
    classname?: string;
}

const AboutSection = (props: AboutSectionProps) => {
    const {classname = ""} = props;
    const [width, height] = useWindowSize();
    return (
        <section className={cNames(cls.AboutSection, {}, [classname])}>
            <Title title={"About the project - GyberExperiment"}/>
            <Subtitle text={"Discover the beginning of it all — the Theory of Cybersocium developed by Gybernaty."}/>

            <HWrapper columns={width >= 760 ? "two" : "one"}>
                <div className={cls.imageWrapper}>
                    <Image
                        fill={true}
                        src={"/images/aboutschere.jpg"}
                        style={{borderRadius: 20, objectFit: "cover"}}
                        alt={"about-image"}
                    />
                </div>
                <div className={cls.aboutWrapper}>
                    <div className={cls.about}>
                        <p>
                            This theory reveals an interconnected world
                            in which humans and machines come together
                            for a socio-economic revolution leading to
                            the cosmic development of society.
                        </p>
                        <p>
                            Join Gybernaty&#39;s core community project,
                            which uses artificial intelligence and blockchain
                            to leverage community skills and resources
                            to overcome global financial constraints.
                        </p>
                    </div>
                    <Button
                        href={"https://gyber.org"}
                        target={"_blank"}
                        theme={ButtonTheme.BLUE}
                        hasBackground={true}
                    >Learn more</Button>
                </div>
            </HWrapper>
        </section>
    )
}

export default AboutSection;