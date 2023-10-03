import style from "./Shared.module.css";

export const Loader = () => {
  return (
    <div className="relative">
      <div className="w-20 h-20 border-sky-200 border-2 rounded-full"></div>
      <div className="w-20 h-20 border-sky-600 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
  );
};
