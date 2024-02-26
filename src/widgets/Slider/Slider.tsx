import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './Slider.module.scss'
import Image from "next/image";
import CardWrapper from "../../shared/ui/CardWrapper";
import StageCard from "@/entites/StageCard/ui/StageCard";

interface SliderProps {
    classname?: string;
}

const Slider = (props: SliderProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Slider, {}, [classname])}>
            <Image
                fill={true}
                src={"/images/slider.jpg"}
                alt={"slider"}
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />
            <div className={cls.mask}>
                <div className={cls.content}>

                    <h1 className={cls.title}>Coin Offering <br/>Seed Round</h1>

                    <CardWrapper>
                        <StageCard/>
                    </CardWrapper>
                </div>
            </div>
        </div>
    )
}

export default Slider;