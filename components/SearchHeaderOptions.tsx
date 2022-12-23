import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const { query } = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={query.searchType === "" || !query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={query.searchType === "image"}
      />
    </div>
  );
}
