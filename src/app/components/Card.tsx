"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import { setDataArticlesRequest } from "../store/articles/reducer";
import { getFilteredArticles } from "../store/articles/selectors";
import { Loader } from "../shared";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataArticlesRequest());
  }, []);

  const filteredArticles = useSelector(getFilteredArticles);

  console.log(filteredArticles, "filtered");

  return (
    <>
      {filteredArticles.length ? (
        <div className="flex justify-center items-center py-10">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="max-w-sm bg-white shadow-lg transform hover:scale-105 transition duration-500"
              >
                <div className="relative">
                  <Image
                    src={article.promo_items?.basic.url!}
                    width={900}
                    height={600}
                    alt={article.headlines.basic}
                    priority={false}
                  />
                </div>
                <h1
                  className={`${inter.className} mt-4 text-gray-800 text-2xl font-serif font-normal cursor-pointer`}
                >
                  {article.headlines.basic}
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 font-sans text-sm items-center text-gray-400">
                    <p>{article.display_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
