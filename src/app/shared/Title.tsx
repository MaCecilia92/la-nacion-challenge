import style from "./Shared.module.css";
import { Roboto_Slab } from "next/font/google";

const inter = Roboto_Slab({ subsets: ["latin"] });

interface TitleProps {
  title: string;
  underline: boolean;
}

export const Title = ({ title, underline }: TitleProps) => {
  return (
    <h1
      className={`font-serif text-xl ${inter.className} ${
        underline && style["underlineTitle"]
      } `}
    >
      {title}
    </h1>
  );
};
