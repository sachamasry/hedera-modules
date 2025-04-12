export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Tag",
    pluralLabel: "Tags",
    alias: "article-tag",
    quickCreate: false,
    sort: {
      slug: 1,
    },
    export: true,
    import: true,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Tag name",
      },
      description: {
        type: "string",
        label: "Describe what this tag encompasses",
        textarea: true,
      },
      _articles: {
        type: "relationshipReverse",
        withType: "article",
        reverseOf: "_hedera-tags",
        withRelationships: ["_featuredImage"],
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "description"],
      },
    },
  },
};
