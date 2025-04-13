export default {
  extend: "@apostrophecms/search",
  options: {
    label: "Custom search page",
    alias: "custom-search",
    perPage: 10,
    label: "apostrophe:searchLabel",
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Page title",
      },
      backgroundMedia: {
        type: "area",
        label: "Background media",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            "@apostrophecms/video": {},
            "hedera-html": {},
            "bootstrap-container-block": {},
            "bootstrap-columns": {},
            "bootstrap-carousel": {},
            "hedera-cover-block": {},
            "bootstrap-card": {},
            "hedera-reusable-content-blocks": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "backgroundMedia"],
      },
    },
  },
};
