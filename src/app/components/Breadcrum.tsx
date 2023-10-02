import { LinkTag } from "../shared";

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
  return (
    <div className="font-sans text-sm flex items-center">
      {tags.map((tag, index) => (
        <div key={tag.slug} className="relative flex items-center">
          {index > 0 && (
            <div className="h-1 w-1 mx-1 rounded-full bg-black"></div>
          )}
          <LinkTag tagText={tag.text} tagCount={tag.count} tagSlug={tag.slug} />
        </div>
      ))}
    </div>
  );
};
