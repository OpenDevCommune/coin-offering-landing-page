import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SeadRoundSection.module.scss'
import Title from "@/shared/ui/Title/Title";
import CardWrapper from "@/shared/ui/CardWrapper";
import {SeadRound} from "@/entites/SeedRound";

interface SeadRoundSectionProps {
    classname?: string;
}

const SeadRoundSection = (props: SeadRoundSectionProps) => {
    const {classname = ""} = props;
    return (
        <section className={cNames(cls.SeadRoundSection, {}, [classname])}>
            <Title title={"Seed Round and Private Presale of Gyber"}/>

            <CardWrapper invert={true} classname={"mt4"}>
                <SeadRound/>
            </CardWrapper>

        </section>
    )
}

export default SeadRoundSection;