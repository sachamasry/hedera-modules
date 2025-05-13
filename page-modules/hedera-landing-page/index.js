export default {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Landing Page",
  },
  fields: {
    add: {
      // _pageSection: {
      //   label: "Page section",
      //   help: "To which section of the website does this page belong (if any)?",
      //   type: "relationship",
      //   withType: "website-section",
      //   max: 1,
      //   withRelationships: ["_sectionMastheadImage"],
      // },
      _pageMastheadImage: {
        label: "Page background image",
        help: "If this page has a section, then it will take that background image by default; override it by specifying a different image here",
        type: "relationship",
        withType: "@apostrophecms/image",
        max: 1,
      },
      main: {
        type: "area",
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
            "hedera-reusable-content-blocks": {},
            "hedera-testimonial": {},
            "@apostrophecms/form": {
              max: 1,
            },
          },
        },
      },
      suppressPageHeading: {
        type: "boolean",
        label: "Hide page heading on this page",
        help: "By default, landing pages display their headings. Turn this on to suppress this page's heading",
        def: false,
      },
      excludeFromSearch: {
        type: "boolean",
        label: "Exclude this page from search results",
        help: "By default, all pages are included in internal search results. Use this to remove this page from all internal (not search engine) searches",
        def: false,
      },
      pageBodyContainerClass: {
        type: "string",
        label: "Page body container class",
      },
      appendToPageBodyContainerClass: {
        type: "boolean",
        label: "Append to default page body container class definitions?",
        def: true,
        toggle: {
          true: "Append to default class",
          false: "Override default classes",
        },
      },
      pageBodyContainerStyle: {
        type: "string",
        label: "Page body container style",
        textarea: true,
      },
      pageBodyColumnClass: {
        type: "string",
        label: "Page body column class",
      },
      appendToPageBodyColumnClass: {
        type: "boolean",
        label: "Append to default page body column class definitions?",
        def: true,
        toggle: {
          true: "Append to default class",
          false: "Override default classes",
        },
      },
      pageBodyColumnStyle: {
        type: "string",
        label: "Page body column style",
        textarea: true,
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: [
          "title",
          "suppressPageHeading",
          "_pageSection",
          "_pageMastheadImage",
          "main",
        ],
      },
      advanced: {
        label: "Advanced",
        fields: [
          "pageBodyContainerClass",
          "appendToPageBodyContainerClass",
          "pageBodyContainerStyle",
          "pageBodyColumnClass",
          "appendToPageBodyColumnClass",
          "pageBodyColumnStyle",
          "excludeFromSearch",
        ],
      },
    },
  },
};
