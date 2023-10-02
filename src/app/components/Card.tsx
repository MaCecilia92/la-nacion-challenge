import React from "react";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const Card = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <div className="max-w-sm bg-white shadow-lg transform hover:scale-105 transition duration-500">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              width={900}
              height={600}
              alt={"colors"}
              priority={false}
            />
          </div>
          <h1
            className={`${inter.className} mt-4 text-gray-800 text-2xl font-serif font-normal cursor-pointer`}
          >
            Write a Gatsby plugin using Typescript
          </h1>
          <div className="my-4">
            <div className="flex space-x-1 font-sans text-sm items-center text-gray-400">
              <p>1:34:23 Minutes</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg transform hover:scale-105 transition duration-500">
          <div className="relative">
            <Image
              className="w-full"
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              width={900}
              height={600}
              alt={"colors"}
              priority={false}
            />
          </div>
          <h1
            className={`${inter.className} mt-4 text-gray-800 text-2xl font-serif font-normal cursor-pointer`}
          >
            Write a Gatsby plugin using Typescript
          </h1>
          <div className="my-4">
            <div className="flex space-x-1 font-sans text-sm items-center text-gray-400">
              <p>1:34:23 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
