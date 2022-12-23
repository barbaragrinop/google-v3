import { useRouter } from "next/router";
import React from "react";

type PropsSearchHeaderOption = {
  title: string;
  Icon: any;
  selected: boolean;
};

export default function SearchHeaderOption({
  title,
  Icon,
  selected,
}: PropsSearchHeaderOption) {
  const { push, query } = useRouter();

  function selectTab(title: string) {
    push(
      `/search?term=${query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  }

  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer pb-3 hover:border-blue-500 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
