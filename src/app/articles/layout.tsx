import { Breadcrum } from "../components";
import { Title } from "../shared";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-32 w-screen bg-amber-100"></div>
      <div className="flex h-screen">
        <div className="flex-none lg:w-1/6  bg-sky-300">01</div>
        <div className="grow h-14 bg-slate-200 px-1 ">
          <Title title={"Acumulado Grilla"} underline={true} />
          <Breadcrum />
          {children}
        </div>
        <div className="flex-none lg:w-2/6 bg-sky-300">
          <div className="h-screen w-72 bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
}
