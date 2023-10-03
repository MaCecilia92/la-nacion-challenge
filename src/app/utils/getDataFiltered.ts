import type { Articles } from "./interfaces";

export const getDataFiltered = (data: Articles[]) => {
  const dataFiltered = data
    .filter((article) => article.subtype === "7")
    .map((article) => ({
      ...article,
      display_date: new Date(article.display_date).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));
  return dataFiltered;
};
