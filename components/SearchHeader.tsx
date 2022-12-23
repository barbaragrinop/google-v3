import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent, useRef } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const { push, query } = useRouter();
  const searchInputRef = useRef(null);

  function search(ev: FormEvent) {
    ev.preventDefault();
    // @ts-ignore
    const term = searchInputRef.current.value;
    if (!term?.trim()) return;
    push(`/search?term=${term.trim()}&searchType=`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => push("/")}
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
          width="120"
          style={{ objectFit: "contain" }}
          height="40"
          className="cursor-pointer"
          alt="Logo do Google em letras"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center ">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={query.term}
            ref={searchInputRef}
          />
          {/* //@ts-ignore */}
          <XMarkIcon
            onClick={() => {
              //@ts-ignore
              searchInputRef.current.value = "";
            }}
            className="h-7 hidden sm:inline-flex text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-200 mr-3" />
          <MagnifyingGlassIcon className="h-6 text-blue-500" />
          <button type="submit" onClick={search} hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
