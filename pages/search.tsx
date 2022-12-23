import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import {
  GoogleSearchAPI,
  GoogleSearchAPIPropSSR,
} from "../typings/GoogleSearch";

export default function search({ results }: GoogleSearchAPIPropSSR) {
  console.log("results", results);
  const { query, push } = useRouter();

  return (
    <div>
      <Head>
        <title>{query.term} - Search Page</title>
      </Head>
      {/* search Header */}
      <SearchHeader />
      {/* search Result */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const startIndex = context.query.start || 1;
  const mockData = false;
  const data: GoogleSearchAPI = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
