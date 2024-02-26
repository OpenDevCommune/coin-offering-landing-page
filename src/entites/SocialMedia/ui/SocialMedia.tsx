import cls from "./SocialMedia.module.scss";
import {cNames} from "@/shared/lib/classNames/cnames";
import Image from "next/image";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button";

interface SocialMediaProps {
  className?: string;
}

export const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  const icons = [
    {
      path: "/images/icons/github-icon.svg",
      link: "https://github.com/OpenDevCommune",
      title: "github",
    },
    {
      path: "/images/icons/telegram-icon.svg",
      link: "https://t.me/+ts6hNf21bwU5N2Uy",
      title: "telegram",
    },
    {
      path: "/images/icons/discord-icon.svg",
      link: "https://discord.gg/amzvJ7UTsz",
      title: "discord",
    },
    {
      path: "/images/icons/twitter-icon.svg",
      link: "https://twitter.com/gybersocial",
      title: "twitter",
    },
  ];
  return (
    <div className={cNames(cls.SocialMedia, {}, [className])}>
      {icons.map((item) => (
          <Button key={item.title} theme={ButtonTheme.CLEAR} href={item.link} target={"_blank"}>
            <Image src={item.path} alt={item.title} width={50} height={50} />
          </Button>
      ))}
    </div>
  );
};
