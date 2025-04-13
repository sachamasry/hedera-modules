export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Reusable Content",
    pluralLabel: "Reusable contents",
    alias: "reusable-content",
    quickCreate: false,
    sort: {
      slug: 1,
    },
    export: true,
    import: true,
    openGraph: false,
    seoFields: false,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Reusable content title",
      },
      description: {
        type: "string",
        label: "Describe this content's purpose",
        textarea: true,
      },
      body: {
        type: "area",
        label: "Reusable content body",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            "hedera-figure": {},
            "@apostrophecms/video": {},
            "hedera-html": {},
            "bootstrap-container-block": {},
            "bootstrap-columns": {},
            "bootstrap-carousel": {},
            "hedera-cover-block": {},
            "bootstrap-spacer": {},
            "hedera-horizontal-rule": {},
            "hedera-verse": {},
            "hedera-quote": {},
            "bootstrap-list": {},
            "bootstrap-list-group": {},
            "hedera-definition-list": {},
            "hedera-button": {},
            "bootstrap-card": {},
            "hedera-teaser-link": {},
            "hedera-newsletter-subscription": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "description", "body"],
      },
    },
  },
};
