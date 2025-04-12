export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Article topic",
    pluralLabel: "Article topics",
    alias: "topic",
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
        label: "Topic name",
      },
      description: {
        type: "string",
        label: "Describe what this topic encompasses",
        textarea: true,
      },
      _articles: {
        type: "relationshipReverse",
        withType: "article",
        reverseOf: "_topics",
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
