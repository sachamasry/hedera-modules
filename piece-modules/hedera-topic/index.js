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
        label: "Describe what this topic encompasses (internal use only)",
        textarea: true,
      },
      _mastheadImage: {
        type: "relationship",
        label: "Background image",
        withType: "@apostrophecms/image",
        max: 1,
      },
      body: {
        type: "area",
        label: "Information about this topic (published)",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {},
            "hedera-figure": {},
            "@apostrophecms/video": {},
            "hedera-html": {},
            "bootstrap-container-block": {},
            "hedera-cover-block": {},
            "bootstrap-spacer": {},
            "hedera-horizontal-rule": {},
            "hedera-verse": {},
            "hedera-quote": {},
            "bootstrap-list": {},
            "bootstrap-list-group": {},
            "hedera-definition-list": {},
            "hedera-link": {},
            "hedera-button": {},
            "bootstrap-card": {},
            "hedera-teaser-link": {},
            "hedera-reusable-content-blocks": {},
          },
        },
      },
      _articles: {
        type: "relationshipReverse",
        withType: "hedera-article",
        reverseOf: "_topics",
        withRelationships: ["_featuredImage", "_mastheadImage"],
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
