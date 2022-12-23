export type Url = {
  type: string;
  template: string;
};

export type Request = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type NextPage = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type Queries = {
  request: Request[];
  nextPage: NextPage[];
};

export type Context = {
  title: string;
};

export type SearchInformation = {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
};

export type CseThumbnail = {
  src: string;
  width: string;
  height: string;
};

export type CseImage = {
  src: string;
};

export type Pagemap = {
  cse_thumbnail: CseThumbnail[];
  cse_image: CseImage[];
};

export type Item = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
};

export interface GoogleSearchAPIPropSSR {
  results: GoogleSearchAPI;
}

export interface GoogleSearchAPI {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}
