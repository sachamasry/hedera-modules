export default {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Notification",
    pluralLabel: "Notifications",
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
        label: "Notification name",
      },
      description: {
        type: "string",
        label: "Describe this notification's purpose and intended use case(s)",
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
        label: "Notification body",
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
            "bootstrap-columns": {},
            "bootstrap-container-block": {},
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
            "hedera-reusable-content-blocks": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "description", "_mastheadImage", "body"],
      },
    },
  },
};
