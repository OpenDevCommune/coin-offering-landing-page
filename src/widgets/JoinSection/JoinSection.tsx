"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './JoinSection.module.scss'
import Title from "@/shared/ui/Title/Title";
import Subtitle from "@/shared/ui/Subtitle/Subtitle";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import CardWrapper from "@/shared/ui/CardWrapper";
import {useWindowSize} from "@/shared/hooks/useWindowSize";
import Image from "next/image";

interface JoinSectionProps {
    classname?: string;
}

const JoinSection = (props: JoinSectionProps) => {
    const {classname = ""} = props;
    const [width, height] = useWindowSize();
    return (
        <section className={cNames(cls.JoinSection, {}, [classname])}>
            <Title title={"Join the community of experienced enthusiasts and developers!"}/>
            <HWrapper columns={width >= 960 ? "two" : "one"}>
                <CardWrapper height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill={true}
                                src={"/icons/joinSection1.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>

                    <p className={cls.description}>We&#39;ll empower you with resources and mentorship to bring your ambitious ideas to life for the development of society.</p>

                </CardWrapper>
                <CardWrapper height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/joinSection2.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <p className={cls.description}>We believe in driving decentralization and self-governance to enhance society.</p>
                </CardWrapper>
            </HWrapper>
            <Subtitle text={"Join the Gybernaty community and make a global impact."}/>
            <Button
                theme={ButtonTheme.BLUE}
                hasBackground={true}
                fxCenter={true}
            >Read more</Button>
        </section>
    )
}

export default JoinSection;