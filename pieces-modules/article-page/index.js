export default {
  extend: "@apostrophecms/blog-page",
  options: {
    label: "Article Page",
    pluralLabel: "Article Pages",
    pieceModuleName: "article",
    previous: true,
    next: true,
  },
  fields: {
    add: {},
    group: {},
  },
};
