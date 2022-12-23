import React from "react";
import { GoogleSearchAPI } from "../typings/GoogleSearch";

type PropsSearchResults = {
  results: GoogleSearchAPI;
};

export default function SearchResults({
  results: {
    searchInformation: { formattedSearchTime, formattedTotalResults },
  },
}: PropsSearchResults) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52]">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedSearchTime} results ({formattedTotalResults} seconds)
      </p>
    </div>
  );
}
