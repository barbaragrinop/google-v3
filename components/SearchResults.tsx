import React from "react";
import { GoogleSearchAPI } from "../typings/GoogleSearch";
import Parser from "html-react-parser";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

type PropsSearchResults = {
  results: GoogleSearchAPI;
};

export default function SearchResults({ results }: PropsSearchResults) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52]">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link className="tx-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
