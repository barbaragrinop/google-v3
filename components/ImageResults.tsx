import Link from "next/link";
import React from "react";
import { GoogleSearchAPI } from "../typings/GoogleSearch";
import { GoogleImagesSearch } from "../typings/GoogleImagesSearch";
import Image from "next/image";
import PaginationButtons from "./PaginationButtons";

type PropsSearchResults = {
  results: any;
};

export default function ImageResults({ results }: PropsSearchResults) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((item) => (
          <div className="mb-8 " key={item.link}>
            <div className="group">
              <Link className="" href={item.image.contextLink}>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                  src={item.link}
                  alt={item.title}
                />
              </Link>
              <Link
                className="group-hover:underline"
                href={item.image.contextLink}
              >
                <h2 className="truncate text-xl">{item.title}</h2>
              </Link>
              <Link
                className="group-hover:underline"
                href={item.image.contextLink}
              >
                <p className="text-gray-600">{item.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
