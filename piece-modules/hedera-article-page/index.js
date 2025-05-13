export default {
  extend: "@apostrophecms/blog-page",
  options: {
    label: "Article Page",
    pluralLabel: "Article Pages",
    pieceModuleName: "hedera-article",
    previous: true,
    next: true,
  },
  fields: {
    add: {
      _pageMastheadImage: {
        label: "Page background image",
        help: "If this page has a section, then it will take that background image by default; override it by specifying a different image here",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "_pageMastheadImage", "main"],
      },
    },
  },
};
