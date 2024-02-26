"use client"
import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SappSection.module.scss'
import Image from "next/image";
import Title from "@/shared/ui/Title/Title";
import Subtitle from "@/shared/ui/Subtitle/Subtitle";
import HWrapper from "@/shared/ui/HWrapper/HWrapper";
import CardWrapper from "@/shared/ui/CardWrapper";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";
import UBLineTextBlock from "@/shared/ui/UBLineTextBlock/UBLineTextBlock";
import {useModal} from "@/shared/ui/Modal";

interface SappSectionProps {
    classname?: string;
}

const SappSection = (props: SappSectionProps) => {
    const {classname = ""} = props;
    const {setIsOpened} = useModal();
    return (
        <section className={cNames(cls.SappSection, {}, [classname])}>
            <Title title={"SAPP and Gyber Wallet Launch (MVP Utility Products)"}/>
            <Subtitle text={"Experience the leverage of a decentralized social platform with SAPP and Gyber Wallet."}/>
            <div className={cls.imageWrapper}>

                    <Image
                        src={"/images/phone.png"}
                        alt={"sapp-phone"}
                        width={280}
                        height={400}
                    />

                    <Image
                        src={"/images/tablet.png"}
                        alt={"sapp-tablet"}
                        width={650}
                        height={400}
                    />

            </div>
            <HWrapper columns={"four"}>
                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/sapp1.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Super secured chats and calls</p>
                    </div>
                </CardWrapper>
                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                        <Image
                                fill
                                src={"/icons/sapp2.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Personalized feed (Block ads and unwanted content)</p>
                    </div>
                </CardWrapper>
                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/sapp3.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Quick and convenient peer-to-peer transactions</p>
                    </div>
                </CardWrapper>
                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                        <Image
                                fill
                                src={"/icons/sapp4.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Full ownership of your content</p>
                    </div>
                </CardWrapper>
            </HWrapper>
            <HWrapper columns={"three"}>
                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/sapp5.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>AI tools to boost your learning and creativity</p>
                    </div>
                </CardWrapper>

                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/sapp6.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Easy content monetization</p>
                    </div>
                </CardWrapper>

                <CardWrapper maxWidth={280} height={300}>
                    <div className={cls.hex}>
                        <div>
                            <Image
                                fill
                                src={"/icons/sapp7.svg"}
                                alt={"icon"}
                            />
                        </div>
                    </div>
                    <div className={cls.description}>
                        <p>Opportunity to connect with Web 3 based individuals</p>
                    </div>
                </CardWrapper>
            </HWrapper>

            <h3>To become a part of the one million whitelisted users for the SAPP launch:</h3>
            <UBLineTextBlock classname={cls.purchaseBlock}>
                Purchase 1B $Gbr (Compulsory)
            </UBLineTextBlock>
            <Button theme={ButtonTheme.BLUE} hasBackground={true} onClick={() => setIsOpened(true)}>
                Sign up to SAPP
            </Button>
            <p className={"mt3"}>Done registering? Start earning by sharing personal content!</p>
        </section>
    )
}

export default SappSection;