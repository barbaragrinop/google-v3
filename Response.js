export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - linerita",
        totalResults: "225000",
        searchTerms: "linerita",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "12b8e6fc05b39b2de",
        searchType: "image",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - linerita",
        totalResults: "225000",
        searchTerms: "linerita",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "12b8e6fc05b39b2de",
        searchType: "image",
      },
    ],
  },
  context: {
    title: "go-v3",
  },
  searchInformation: {
    searchTime: 0.169026,
    formattedSearchTime: "0.17",
    totalResults: "225000",
    formattedTotalResults: "225,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title:
        "C É L I N E R I T A on Instagram: “The Tallulah Jumpsuit in Salted ...",
      htmlTitle:
        "C É <b>L I N E R I T A</b> on Instagram: “The Tallulah Jumpsuit in Salted ...",
      link: "https://i.pinimg.com/originals/c1/04/03/c1040347a89a3276cd5d9ed3c6e5ba98.jpg",
      displayLink: "www.pinterest.com",
      snippet:
        "C É L I N E R I T A on Instagram: “The Tallulah Jumpsuit in Salted ...",
      htmlSnippet:
        "C É <b>L I N E R I T A</b> on Instagram: “The Tallulah Jumpsuit in Salted ...",
      mime: "image/jpeg",
      fileFormat: "image/jpeg",
      image: {
        contextLink: "https://www.pinterest.com/pin/432978951674764579/",
        height: 720,
        width: 1080,
        byteSize: 166114,
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmQJFKGW5lvAoWrx9uzyChgdCqGRt87AORd7EI1G0eKrYhYjsJnmzMjg&s",
        thumbnailHeight: 100,
        thumbnailWidth: 150,
      },
    },
  ],
};
