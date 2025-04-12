import colourPalette from "../colourPalette.js";

export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Container Block",
    description:
      "Versatile container element for 'wrapping' many kinds of content. Use to group cards, create a grid of items, create a section with an image background, and much more",
    icon: "containerIcon",
    previewImage: "png",
    openGraph: false,
  },
  icons: {
    containerIcon: "Contain",
  },
  fields: {
    add: {
      containerPurpose: {
        type: "select",
        label: "Choose this container's purpose",
        help: "The container may be a simple wrapper providing one layer of HTML around the content; it can be a flexbox parent element; it can be either a card grouping container or card grid; it can be a container presenting a (usually graphical) background",
        choices: [
          {
            label: "Regular container",
            value: "container",
          },
          {
            label: "Simple containing block",
            value: "containing-block",
          },
          {
            label:
              "Flexible container: manage layout and alignment of children",
            value: "flexbox",
          },
          {
            label: "Card-grouping container",
            value: "card-group-container",
          },
          {
            label: "Card grid container",
            value: "card-grid-container",
          },
          {
            label: "Container with background (image, video, misc. content)",
            value: "container-with-background",
          },
        ],
      },
      containerBackground: {
        type: "area",
        label: "Container background",
        help: "Choose the background for this container, e.g. an image",
        options: {
          widgets: {
            "hedera-image": {},
            "hedera-figure": {},
            "@apostrophecms/video": {},
            "hedera-html": {},
            "bootstrap-columns": {},
            "bootstrap-container-block": {},
            "bootstrap-spacer": {},
            "hedera-horizontal-rule": {},
          },
        },
        if: {
          containerPurpose: "container-with-background",
        },
      },
      containerContents: {
        type: "area",
        label: "Contained contents",
        help: "In a container with a background, this is the foreground content, e.g. text",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {},
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
          },
        },
      },
      containerJustifyContent: {
        type: "select",
        label: "Change x-axis alignment of children items",
        help: "How should multiple contained elements be aligned: all to the left of the container; all to the right of it; all centered within it; or, justified to fill the container with spacing choices?",
        choices: [
          {
            label: "Justify to left of container",
            value: "start",
          },
          {
            label: "Justify to right of container",
            value: "end",
          },
          {
            label: "Justify to centre of container",
            value: "centre",
          },
          {
            label: "Justify to container edges with equal spaces between item",
            value: "between",
          },
          {
            label: "Justify to fill container with equal spaces around items",
            value: "around",
          },
          {
            label:
              "Justify to fill container with equal space between items and edges",
            value: "evenly",
          },
        ],
        if: {
          containerPurpose: "flexbox",
        },
      },
      columnsPerRowExtraSmall: {
        type: "integer",
        label: "Number of columns (extra small screens)",
        help: "How many columns should be displayed on extra small screens?",
        min: 1,
        max: 6,
        def: 1,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      columnsPerRowSmall: {
        type: "integer",
        label: "Number of columns (small screens)",
        help: "How many columns should be displayed on small screens?",
        min: 1,
        max: 6,
        def: 1,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      columnsPerRowMedium: {
        type: "integer",
        label: "Number of columns (medium screens)",
        help: "How many columns should be displayed on medium screens?",
        min: 1,
        max: 6,
        def: 1,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      columnsPerRowLarge: {
        type: "integer",
        label: "Number of columns (large screens)",
        help: "How many columns should be displayed on large screens?",
        min: 1,
        max: 6,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      columnsPerRowExtraLarge: {
        type: "integer",
        label: "Number of columns (extra large screens)",
        help: "How many columns should be displayed on extra large screens?",
        min: 1,
        max: 6,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      columnsPerRowExtraExtraLarge: {
        type: "integer",
        label: "Number of columns (extra, extra large screens)",
        help: "How many columns should be displayed on extra, extra large screens?",
        min: 1,
        max: 6,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      containerContentGap: {
        label: "Change gapping between children items",
        help: "This is a relative number, not an absolute measure, finer at the low end of the scale, growing more coarse towards the upper end",
        type: "range",
        def: 3,
        min: 0,
        max: 6,
        if: {
          containerPurpose: "flexbox",
        },
      },
      containerContentGutter: {
        label: "Change the gutter width between children items",
        help: "Gutters are the spaces between your columns of content. This is a relative number, not an absolute measure, finer at the low end of the scale, growing more coarse towards the upper end",
        type: "range",
        def: 3,
        min: 0,
        max: 6,
        if: {
          containerPurpose: "card-grid-container",
        },
      },
      backgroundColour: {
        label: "Background colour",
        help: "Background colour of the container",
        type: "color",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      borderColour: {
        label: "Border colour",
        help: "Border colour of the container",
        type: "color",
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      borderRadius: {
        label: "Border radius",
        help: "Adds a roundedness to the container's border. A value of 0 results in perfectly perpendicular (sharp) borders, with each increment adding more curvature",
        type: "range",
        def: 0,
        min: 0,
        max: 15,
      },
      containerClass: {
        type: "string",
        label: "⚠️ Container block class",
      },
      containerStyle: {
        type: "string",
        label: "⚠️ Container style",
        textarea: true,
      },
      containerId: {
        type: "string",
        label: "⚠️ Container block ID",
      },
      containerBackgroundClass: {
        type: "string",
        label: "⚠️ Container background class",
      },
      containerBackgroundStyle: {
        type: "string",
        label: "⚠️ Container background style",
        textarea: true,
      },
      containerBackgroundId: {
        type: "string",
        label: "⚠️ Container background ID",
      },
      containerContentsClass: {
        type: "string",
        label: "⚠️ Container contents class",
      },
      containerContentsStyle: {
        type: "string",
        label: "⚠️ Container contents style",
        textarea: true,
      },
      containerContentsId: {
        type: "string",
        label: "⚠️ Container contents ID",
      },
    },
  },
};
