import {cNames} from "@/shared/lib/classNames/cnames";

import cls from './SignUpForm.module.scss'
import Image from "next/image";


interface UserRegisteredProps {
    classname?: string;
}

const UserRegistered = (props: UserRegisteredProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.UserRegistered, {}, [classname])}>
            <div className={cls.ImageSuccess}>
                <Image fill src={"/images/logo.svg"} alt={"success"} />
            </div>
            <p>Congratulations<br/> You&apos;re already registered!</p>
        </div>
    )
}

export default UserRegistered;