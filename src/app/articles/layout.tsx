import { Breadcrum } from "../components";
import { Title } from "../shared";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-32 w-screen"></div>
      <div className="flex">
        <div className="flex-none lg:w-1/6"></div>
        <div className="grow h-full px-1 ">
          <Title title={"Acumulado Grilla"} underline={true} />
          <Breadcrum />
          {children}
        </div>
        <div className="flex-none lg:w-2/6">
          <div className="w-72 h-full bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
}
