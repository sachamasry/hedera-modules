import colourPalette from "../colourPalette.js";

export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Card",
    description:
      "Flexible and customisable content container, useful for visually presenting summarised information",
    previewImage: "png",
    icon: "cardIcon",
    openGraph: false,
  },
  icons: {
    cardIcon: "CardAccountDetailsOutline",
  },
  fields: {
    add: {
      cardType: {
        type: "select",
        label: "Choose card type",
        help: "What type of card you want to create",
        def: "",
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
              "Card with image as background, and text overlaid on the image",
            value: "overlay",
          },
          {
            label:
              "Horizontal flexible card with image (mixed-content card: image and flexible body)",
            value: "horizontal",
          },
        ],
      },
      horizontalCardColumnSplit: {
        type: "select",
        label: "Select column split",
        help: "Choose the horizontal width the image and content will take, proportionally",
        def: "16-84",
        choices: [
          {
            label: "16-84",
            value: "16-84",
          },
          {
            label: "25-75",
            value: "25-75",
          },
          {
            label: "33-67",
            value: "33-67",
          },
          {
            label: "50-50",
            value: "50-50",
          },
        ],
        if: {
          cardType: "horizontal",
        },
      },
      imageCapPlacement: {
        type: "select",
        label: "Select where to append the image cap to the card",
        help: "Should the image cap the top or bottom of the card?",
        def: "top",
        choices: [
          {
            label: "Append image to the top of a vertical card",
            value: "top",
          },
          {
            label: "Append image to the bottom of a vertical card",
            value: "bottom",
          },
        ],
        if: {
          $or: [{ cardType: "mixed" }, { cardType: "rich" }],
        },
      },
      horizontalCardImagePlacement: {
        type: "select",
        label: "Select where to display the image on a horizontal card",
        help: "Should the image display to the left, or to the right, of text?",
        def: "left",
        choices: [
          {
            label: "Display image on the left of a horizontal card",
            value: "left",
          },
          {
            label: "Display image on the right of a horizontal card",
            value: "right",
          },
        ],
        if: {
          cardType: "horizontal",
        },
      },
      topImage: {
        type: "area",
        label: "Image",
        help: "Top image in a vertical card",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className: "card-img-top",
            },
          },
        },
        if: {
          imageCapPlacement: "top",
          $or: [{ cardType: "mixed" }, { cardType: "rich" }],
        },
      },
      bottomImage: {
        type: "area",
        label: "Image",
        help: "Bottom image in a vertical card",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className: "card-img-bottom",
            },
          },
        },
        if: {
          imageCapPlacement: "bottom",
          $or: [{ cardType: "mixed" }, { cardType: "rich" }],
        },
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
              className: "img-fluid rounded-border-start",
            },
          },
        },
        if: {
          cardType: "horizontal",
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
              className: "img-fluid rounded-border-end",
            },
          },
        },
        if: {
          cardType: "horizontal",
          horizontalCardImagePlacement: "right",
        },
      },
      backgroundImage: {
        type: "area",
        label: "Image",
        help: "Background card image",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              className: "img-fluid rounded-border",
            },
          },
        },
        if: {
          cardType: "overlay",
        },
      },
      drawImageBorders: {
        type: "boolean",
        label: "Draw border around image?",
        help: "The card has an automatic border around it, but the image hasn't. Should the image have its own full border drawn around it (it will be the same colour as the card border)?",
        def: false,
        if: {
          $or: [
            { cardType: "mixed" },
            { cardType: "rich" },
            { cardType: "horizontal" },
          ],
        },
      },
      cardTitle: {
        type: "string",
        label: "Card title",
        if: {
          $or: [
            { cardType: "simple" },
            { cardType: "mixed" },
            { cardType: "overlay" },
          ],
        },
      },
      cardSubtitle: {
        type: "string",
        label: "Card subtitle",
        if: {
          $or: [
            { cardType: "simple" },
            { cardType: "mixed" },
            { cardType: "overlay" },
          ],
        },
      },
      cardText: {
        type: "string",
        label: "Card text",
        textarea: true,
        if: {
          $or: [
            { cardType: "simple" },
            { cardType: "mixed" },
            { cardType: "overlay" },
          ],
        },
      },
      textClass: {
        type: "string",
        label: "⚠️ Text class",
        if: {
          $or: [
            { cardType: "simple" },
            { cardType: "mixed" },
            { cardType: "overlay" },
          ],
        },
      },
      useCardHeader: {
        type: "boolean",
        label: "Create a card header",
        help: "You can create an optional header within a card",
        def: false,
        if: {
          $or: [{ cardType: "simple" }, { cardType: "mixed" }],
        },
      },
      cardHeader: {
        type: "area",
        label: "Card heaader",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-html": {},
          },
        },
        if: {
          useCardHeader: true,
        },
      },
      useCardFooter: {
        type: "boolean",
        label: "Create a card footer",
        help: "You can create an optional footer within a card",
        def: false,
        if: {
          $or: [{ cardType: "simple" }, { cardType: "mixed" }],
        },
      },
      cardFooter: {
        type: "area",
        label: "Card footer",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-html": {},
          },
        },
        if: {
          useCardFooter: true,
        },
      },
      body: {
        type: "area",
        label: "Card body",
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
            { cardType: "rich" },
            { cardType: "overlay" },
            { cardType: "horizontal" },
          ],
        },
      },
      cardLinks: {
        label: "Card links",
        type: "array",
        inline: { alwaysExpand: false },
        titleField: "linkTitle",
        fields: {
          add: {
            linkTitle: {
              type: "string",
              label: "Link title",
            },
            link: {
              type: "area",
              label: "link",
              options: {
                widgets: {
                  "bootstrap-card-link": {},
                },
              },
            },
          },
        },
        if: {
          $or: [{ cardType: "simple" }, { cardType: "mixed" }],
        },
      },
      cardWidth: {
        type: "select",
        label: "Card width",
        help: "By default, this card will take the full width (100%) of it's parent element. Choose a different width, or leave it on auto to automatically determine it's width with other cards, for example",
        def: "auto",
        choices: [
          {
            label: "25% width",
            value: "25",
          },
          {
            label: "50% width",
            value: "50",
          },
          {
            label: "75% width",
            value: "75",
          },
          {
            label: "100% width",
            value: "100",
          },
          {
            label: "Automatic width",
            value: "auto",
          },
        ],
        if: {
          $or: [
            { cardType: "simple" },
            { cardType: "mixed" },
            { cardType: "rich" },
            { cardType: "overlay" },
          ],
        },
      },
      cardProportionalHeight: {
        label: "Card height",
        help: "By default, this card will have a height automatically determined by its content (set to 0). Otherwise, you can set the card full height (100% of screen height), or to any percentage of the scren height (1-99%), e.g. to have multiple side-by-side cards with equal height.",
        type: "range",
        min: 0,
        max: 100,
        step: 1,
        def: 0,
      },
      cardAlignment: {
        type: "select",
        label: "Select card alignment",
        help: "How should this card be aligned on the page (if it isn't full width)?",
        def: "none",
        choices: [
          {
            label: "None",
            value: "none",
          },
          {
            label: "Align left",
            value: "left",
          },
          {
            label: "Align centre",
            value: "centre",
          },
          {
            label: "Align right",
            value: "right",
          },
        ],
        if: {
          $or: [{ cardWidth: "25" }, { cardWidth: "50" }, { cardWidth: "75" }],
        },
      },
      verticalAlignment: {
        type: "select",
        label: "Vertical alignment",
        help: "Choose how column contents should be vertically aligned within the parent row",
        def: "top",
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
        if: {
          cardType: "horizontal",
        },
      },
      overlayPosition: {
        type: "select",
        label: "Overlay position",
        help: "Choose how you'd like to position the overlay (foreground) text. Positions are relative to the card itself",
        def: "tl",
        choices: [
          {
            label: "Top left",
            value: "tl",
          },
          {
            label: "Top centre",
            value: "tc",
          },
          {
            label: "Top right",
            value: "tr",
          },
          {
            label: "Centre left",
            value: "cl",
          },
          {
            label: "Centre",
            value: "centre",
          },
          {
            label: "Centre right",
            value: "cr",
          },
          {
            label: "Bottom left",
            value: "bl",
          },
          {
            label: "Bottom centre",
            value: "bc",
          },
          {
            label: "Bottom right",
            value: "br",
          },
        ],
        if: {
          cardType: "overlay",
        },
      },
      horizontalAlignment: {
        type: "select",
        label: "Horizontal alignment",
        help: "How should contents be horizontally aligned within the card?",
        def: "left",
        choices: [
          {
            label: "None",
            value: "none",
          },
          {
            label: "Left-align",
            value: "left",
          },
          {
            label: "Centre content",
            value: "centre",
          },
          {
            label: "Right-align",
            value: "right",
          },
        ],
      },
      wrapInColumn: {
        type: "boolean",
        label: "⚠️ Wrap card in column",
        help: "Should this card be laid out within a column wrapper?",
      },
      columnClass: {
        type: "string",
        label: "⚠️ Class of wrapping column element",
        help: "Override the class of the containing column element",
        if: {
          wrapInColumn: true,
        },
      },
      backgroundColour: {
        type: "color",
        label: "Card background colour",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      textColour: {
        type: "color",
        label: "Foreground text colour",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      headerBackgroundColour: {
        type: "color",
        label: "Card header and footer background colour",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      headerTextColour: {
        type: "color",
        label: "Header and footer text colour",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      cardBorderColour: {
        type: "color",
        label: "Card border colour",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      imageContainerClass: {
        type: "string",
        label: "⚠️ Image container class",
      },
      cardClass: {
        type: "string",
        label: "⚠️ Card class",
      },
      cardStyle: {
        type: "string",
        label: "⚠️ Card CSS styling",
        textarea: true,
      },
      backgroundStyle: {
        type: "string",
        label: "⚠️ Background CSS styling",
        textarea: true,
      },
      headerClass: {
        type: "string",
        label: "⚠️ Header class",
      },
      headerStyle: {
        type: "string",
        label: "⚠️ Header and footer CSS styling",
        textarea: true,
      },
    },
    group: {
      basic: {
        label: "Basics",
        fields: [
          "cardType",
          "imageCapPlacement",
          "horizontalCardColumnSplit",
          "horizontalCardImagePlacement",
          "topImage",
          "bottomImage",
          "horizontalImageLeft",
          "horizontalImageRight",
          "backgroundImage",
          "drawImageBorders",
          "cardTitle",
          "cardSubtitle",
          "cardText",
          "useCardHeader",
          "cardHeader",
          "useCardFooter",
          "cardFooter",
          "body",
          "cardLinks",
          "cardWidth",
          "cardProportionalHeight",
          "cardAlignment",
          "cardHeight",
          "verticalAlignment",
          "overlayPosition",
          "horizontalAlignment",
          "wrapInColumn",
          "backgroundColour",
          "textColour",
          "headerBackgroundColour",
          "headerTextColour",
          "cardBorderColour",
        ],
      },
      advanced: {
        label: "Advanced",
        fields: [
          "cardClass",
          "cardStyle",
          "imageContainerClass",
          "textClass",
          "backgroundStyle",
          "headerClass",
          "headerStyle",
          "columnClass",
        ],
      },
    },
  },
};
