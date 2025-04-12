export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Columns (Bootstrap)",
    description:
      "Use colums for full control of content you want to lay out side by side",
    icon: "columnIcon",
    previewImage: "jpg",
    openGraph: false,
  },
  icons: {
    columnIcon: "FormatColumns",
  },
  fields: {
    add: {
      columnCount: {
        type: "select",
        label: "How many columns?",
        help: "Choose how many columns you need in your layout",
        def: "1",
        choices: [
          {
            label: "1 column",
            value: "1",
          },
          {
            label: "2 columns",
            value: "2",
          },
          {
            label: "3 columns",
            value: "3",
          },
          {
            label: "4 columns",
            value: "4",
          },
          {
            label: "5 columns",
            value: "5",
          },
          {
            label: "6 columns",
            value: "6",
          },
          {
            label: "7 columns",
            value: "7",
          },
          {
            label: "8 columns",
            value: "8",
          },
        ],
      },
      sectionClass: {
        label: "⚠️ Column-containing section class",
        help: "Columns are wrapped in section elements; specify class(es) for the section element",
        type: "string",
      },
      sectionContainer: {
        label: "⚠️ Is this section a container?",
        help: "Should this section element be a CSS container, containing the width of its content, padding and aligning it in the viewport?",
        type: "boolean",
        def: true,
      },
      rowClass: {
        label: "⚠️ Row class",
        help: "Specify a class element for the column-containing row",
        type: "string",
      },
      verticalAlignment: {
        label: "Vertical alignment",
        help: "Choose how column contents should be vertically aligned within the parent row",
        type: "select",
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
          $or: [
            { columnCount: "2" },
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "6" },
            { columnCount: "8" },
          ],
        },
      },
      twoColumnSplit: {
        label: "Select 2 column split",
        help: "Choose the proportions of your two columns",
        type: "select",
        def: "50-50",
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
          {
            label: "67-33",
            value: "67-33",
          },
          {
            label: "76-25",
            value: "76-25",
          },
          {
            label: "84-16",
            value: "84-16",
          },
        ],
        if: {
          columnCount: "2",
        },
      },
      threeColumnSplit: {
        label: "Select 3 column split",
        help: "Choose the proportions of your three columns",
        type: "select",
        def: "33-33-33",
        choices: [
          {
            label: "16-68-16",
            value: "16-68-16",
          },
          {
            label: "25-50-25",
            value: "25-50-25",
          },
          {
            label: "33-33-33",
            value: "33-33-33",
          },
        ],
        if: {
          columnCount: "3",
        },
      },
      columnOne: {
        label: "Column 1",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "container-block": {},
            "bootstrap-columns": {},
            carousel: {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
      },
      columnOneClass: {
        label: "⚠️ Column 1 class",
        type: "string",
      },
      appendToColumnOneClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
      },
      columnOneStyle: {
        label: "⚠️ Column 1 style",
        type: "string",
      },
      columnTwo: {
        label: "Column 2",
        contextual: true,
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [
            { columnCount: "2" },
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnTwoClass: {
        label: "⚠️ Column 2 class",
        type: "string",
        if: {
          $or: [
            { columnCount: "2" },
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      appendToColumnTwoClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [
            { columnCount: "2" },
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnTwoStyle: {
        label: "⚠️ Column 2 style",
        type: "string",
        if: {
          $or: [
            { columnCount: "2" },
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnThree: {
        label: "Column 3",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnThreeClass: {
        label: "⚠️ Column 3 class",
        type: "string",
        if: {
          $or: [
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      appendToColumnThreeClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnThreeStyle: {
        label: "⚠️ Column 3 style",
        type: "string",
        if: {
          $or: [
            { columnCount: "3" },
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFour: {
        label: "Column 4",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFourClass: {
        label: "⚠️ Column 4 class",
        type: "string",
        if: {
          $or: [
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      appendToColumnFourClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFourStyle: {
        label: "⚠️ Column 4 style",
        type: "string",
        if: {
          $or: [
            { columnCount: "4" },
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFive: {
        label: "Column 5",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFiveClass: {
        label: "⚠️ Column 5 class",
        type: "string",
        if: {
          $or: [
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      appendToColumnFiveClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnFiveStyle: {
        label: "⚠️ Column 5 style",
        type: "string",
        if: {
          $or: [
            { columnCount: "5" },
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnSix: {
        label: "Column 6",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnSixClass: {
        label: "⚠️ Column 6 class",
        type: "string",
        if: {
          $or: [
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      appendToColumnSixClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnSixStyle: {
        label: "⚠️ Column 6 style",
        type: "string",
        if: {
          $or: [
            { columnCount: "6" },
            { columnCount: "7" },
            { columnCount: "8" },
          ],
        },
      },
      columnSeven: {
        label: "Column 7",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          $or: [{ columnCount: "7" }, { columnCount: "8" }],
        },
      },
      columnSevenClass: {
        label: "⚠️ Column 7 class",
        type: "string",
        if: {
          $or: [{ columnCount: "7" }, { columnCount: "8" }],
        },
      },
      appendToColumnSevenClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          $or: [{ columnCount: "7" }, { columnCount: "8" }],
        },
      },
      columnSevenStyle: {
        label: "⚠️ Column 7 style",
        type: "string",
        if: {
          $or: [{ columnCount: "7" }, { columnCount: "8" }],
        },
      },
      columnEight: {
        label: "Column 8",
        type: "area",
        contextual: true,
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            "cover-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            card: {},
            "teaser-link": {},
            "newsletter-subscription": {},
            "reusable-content-blocks": {},
          },
        },
        if: {
          columnCount: "8",
        },
      },
      columnEightClass: {
        label: "⚠️ Column 8 class",
        type: "string",
        if: {
          columnCount: "8",
        },
      },
      appendToColumnEightClass: {
        label: "⚠️ Append to default column class definitions?",
        type: "boolean",
        def: true,
        toggle: {
          true: "Append to column class",
          false: "Override default classes",
        },
        if: {
          columnCount: "8",
        },
      },
      columnEightStyle: {
        label: "⚠️ Column 8 style",
        type: "string",
        if: {
          columnCount: "8",
        },
      },
    },
  },
};
