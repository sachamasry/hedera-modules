export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Author",
    pluralLabel: "Authors",
    alias: "author",
    quickCreate: false,
    sort: {
      title: 1,
    },
    export: true,
    import: true,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Name",
      },
      jobTitle: {
        type: "string",
        label: "Job title",
      },
      _mastheadImage: {
        type: "relationship",
        label: "Background image",
        withType: "@apostrophecms/image",
        max: 1,
      },
      profileImage: {
        type: "area",
        label: "Profile image",
        options: {
          widgets: {
            "hedera-image": {
              aspectRatio: [1, 1],
            },
          },
          max: 1,
        },
      },
      body: {
        type: "area",
        label: "Biography and information",
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
        reverseOf: "_author",
        withRelationships: ["_featuredImage", "_mastheadImage"],
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "jobTitle", "profileImage", "_mastheadImage", "body"],
      },
    },
  },
};
