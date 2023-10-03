"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkTag } from "../shared";
import { setDataArticlesRequest } from "../store/articles/reducer";
import { getTagsArticles } from "../store/articles/selectors";

export interface BreadcrumsProps {
  slug: string;
  text: string;
  count: number;
}

const tags: BreadcrumsProps[] = [
  {
    slug: "huevo-tid47236",
    text: "Huevo",
    count: 13,
  },
  {
    slug: "leche-tid47244",
    text: "Leche",
    count: 9,
  },
  {
    slug: "arroz-tid47136",
    text: "Arroz",
    count: 7,
  },
  {
    slug: "manteca-tid47257",
    text: "Manteca",
    count: 7,
  },
  {
    slug: "azucar-tid47141",
    text: "Azúcar",
    count: 7,
  },
  {
    slug: "harina-0000-tid48184",
    text: "Harina 0000",
    count: 5,
  },
  {
    slug: "ajo-tid47126",
    text: "Ajo",
    count: 4,
  },
  {
    slug: "pescados-tid67216",
    text: "Pescados",
    count: 4,
  },
  {
    slug: "frutas-tid67217",
    text: "Frutas",
    count: 4,
  },
  {
    slug: "semillas-de-sesamo-tid47338",
    text: "Semillas de sésamo",
    count: 3,
  },
];

export const Breadcrum = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataArticlesRequest());
  }, []);

  const tagsArticles = useSelector(getTagsArticles);
  return (
    <div className="font-sans text-sm flex items-center text-sky-600">
      {tagsArticles.map((tag, index) => (
        <div key={tag.slug} className="relative flex items-center">
          {index > 0 && (
            <div className="h-0.5 w-0.5 mx-1 rounded-full bg-sky-500"></div>
          )}
          <LinkTag tagText={tag.text} tagCount={tag.count} tagSlug={tag.slug} />
        </div>
      ))}
    </div>
  );
};
