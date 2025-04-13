export default {
  extend: "bootstrap-card-widget",
  options: {
    label: "Teaser Link Widget",
    description:
      "Teaser link to an article or page, featuring an image and content summary",
    previewImage: "png",
  },
  fields: {
    add: {
      linkType: {
        label: "Link type",
        type: "select",
        choices: [
          {
            label: "Page",
            value: "page",
          },
          {
            label: "Article",
            value: "article",
          },
          {
            label: "Author",
            value: "author",
          },
        ],
      },
      _page: {
        label: "Page to link",
        type: "relationship",
        withType: "@apostrophecms/page",
        max: 1,
        required: true,
        builders: {
          project: {
            title: 1,
            _url: 1,
          },
        },
        // Only if it's a page link
        if: {
          linkType: "page",
        },
      },
      _article: {
        label: "Article to link",
        type: "relationship",
        withType: "hedera-article",
        withRelationships: [
          "@apostrophecms/image",
          "_featuredImage",
          "_mastheadImage",
        ],
        max: 1,
        required: true,
        builders: {
          project: {
            title: 1,
            subTitle: 1,
            publishedAt: 1,
            _url: 1,
            _featuredImage: 1,
            _mastheadImage: 1,
          },
        },
        // Only if it's an article link
        if: {
          linkType: "article",
        },
      },
      _author: {
        label: "Author to link",
        type: "relationship",
        withType: "hedera-author",
        withRelationships: ["@apostrophecms/image", "_mastheadImage"],
        max: 1,
        required: true,
        builders: {
          project: {
            title: 1,
            jobTitle: 1,
            _url: 1,
            profileImage: 1,
            _mastheadImage: 1,
          },
        },
        // Only if it's an author link
        if: {
          linkType: "author",
        },
      },
      cardType: {
        type: "select",
        label: "Choose the card type",
        help: "Choose what type of card you want to create",
        def: "horizontal",
        readOnly: true,
        choices: [
          {
            label: "Simple card (body only)",
            value: "simple",
          },
          {
            label:
              "Simple card with image (mixed-content card, image, heading and text)",
            value: "mixed",
          },
          {
            label:
              "Flexible card with image (mixed-content card: image and flexible body)",
            value: "rich",
          },
          {
            label:
              "Horizontal flexible card with image (mixed-content card: image and flexible body)",
            value: "horizontal",
          },
        ],
      },
      horizontalImageLeft: {
        type: "area",
        label: "Image",
        help: "Left image on a horizontal card",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className: "img-fluid rounded-start",
            },
          },
        },
        if: {
          linkType: "page",
          horizontalCardImagePlacement: "left",
        },
      },
      horizontalImageRight: {
        type: "area",
        label: "Image",
        help: "Right image on a horizontal card",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className: "img-fluid rounded-end",
            },
          },
        },
        if: {
          linkType: "page",
          horizontalCardImagePlacement: "right",
        },
      },
      body: {
        type: "area",
        label: "Card body",
        help: "Add custom text for this teaser, in addition to the Title and Subtitle (which is automatically included in the teaser)",
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
            "hedera-testimonial": {},
            "bootstrap-list": {},
            "bootstrap-list-group": {},
            "hedera-definition-list": {},
            "hedera-button": {},
            "hedera-newsletter-subscription": {},
            "hedera-reusable-content-blocks": {},
          },
        },
        if: {},
      },
      verticalAlignment: {
        type: "select",
        label: "Vertical alignment",
        help: "Choose how column contents should be vertically aligned within the parent row",
        def: "centre",
        choices: [
          {
            label: "Align to top",
            value: "top",
          },
          {
            label: "Align to centre",
            value: "centre",
          },
          {
            label: "Align to bottom",
            value: "bottom",
          },
        ],
      },
    },
    remove: [
      "cardWidth",
      "cardHeight",
      "wrapInColumn",
      "imageContainerClass",
      "cardClass",
      "cardStyle",
      "backgroundStyle",
      "headerClass",
      "headerStyle",
    ],
    group: {
      basic: {
        label: "Basics",
        fields: ["linkType", "_page", "_article", "_author"],
      },
    },
  },
};
