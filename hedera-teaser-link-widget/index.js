import linkConfig from "../link.js";

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
      ...linkConfig.link,
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
        help: "Left (or main) image on a horizontal card",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className:
                "c-teaser-link-card--horizontal__image c-teaser-link-card--horizontal__image--image-on-left",
            },
          },
        },
        if: {
          // linkType: "page",
          // horizontalCardImagePlacement: "left",
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
              className:
                "c-teaser-link-card--horizontal__image c-teaser-link-card--horizontal__image--image-on-right",
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
        if: {
          $or: [
            { horizontalCardColumnSplit: "16-84" },
            { horizontalCardColumnSplit: "25-75" },
            { horizontalCardColumnSplit: "33-67" },
            { horizontalCardColumnSplit: "50-50" },
          ],
        },
      },
      verticalAlignment: {
        type: "select",
        label: "Vertical alignment",
        help: "Choose how column contents should be vertically aligned within the parent row",
        def: "default",
        choices: [
          {
            label: "Default",
            value: "default",
          },
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
      "label",
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
        fields: [
          "linkType",
          "_page",
          "_article",
          "_author",
          "_topic",
          "_tag",
          "_file",
          "_image",
          "customUrl",
          "downloadLink",
          "overrideDownloadedFileName",
          "target",
        ],
      },
    },
  },
};
