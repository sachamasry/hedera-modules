export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Figure",
    description:
      "Figures are commonly used for images, but should be used with any type of content with an optional caption",
    className: false,
    icon: "image-icon",
    dimensionAttrs: false,
    openGraph: false,
  },
  fields: {
    add: {
      enclosedContent: {
        type: "area",
        label: "Figure content",
        help: "Figures are commonly used to present images or any other content, usually with a legend or caption attached. For example, a figure can present illustrations, diagrams, graphics, charts, reference tables, videos, poems, code snippets, etc.",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            "@apostrophecms/video": {},
            "hedera-quote": {},
            "hedera-html": {},
            "bootstrap-columns": {},
            "bootstrap-container-block": {},
            "hedera-horizontal-rule": {},
            "hedera-verse": {},
            "bootstrap-card": {},
            "hedera-teaser-link": {},
            "hedera-reusable-content-blocks": {},
          },
        },
      },
      figureTitle: {
        label: "Figure title",
        halp: "Display a title for this figure",
        type: "string",
      },
      displayCaption: {
        label: "Display a caption next to the figure?",
        help: "Would you like to display a caption for the figure?",
        type: "boolean",
        def: false,
      },
      figureCaption: {
        label: "Figure caption",
        help: "Write the caption you want displayed for this figure",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
          },
        },
        if: {
          displayCaption: true,
        },
      },
      displayCredit: {
        label: "Display credit in the caption?",
        help: "Would you like to display the credit and credit URL (if they exist), for this content, if it is an image?",
        type: "boolean",
        def: false,
        if: {
          displayCaption: true,
        },
      },
      figureWidth: {
        label: "Change width",
        help: "If you don't want the figure to display full width, select a different width here. This option is most useful when used together with the 'Change alignment' option, or the figure will sit crowded to the left",
        type: "select",
        def: "100",
        choices: [
          {
            label: "20%",
            value: "20",
          },
          {
            label: "25%",
            value: "25",
          },
          {
            label: "33%",
            value: "33",
          },
          {
            label: "40%",
            value: "40",
          },
          {
            label: "50%",
            value: "50",
          },
          {
            label: "60%",
            value: "60",
          },
          {
            label: "66%",
            value: "66",
          },
          {
            label: "75%",
            value: "75",
          },
          {
            label: "80%",
            value: "80",
          },
          {
            label: "100%",
            value: "100",
          },
        ],
      },
      alignFigure: {
        type: "select",
        label: "Change alignment",
        help: "If you have changed the figure's width, this option is useful to more nicely align the figure on the page. Align left and right will allow any following text to flow into the space made available on the right or left of the figure, respectively",
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
      },
      figureClass: {
        label: "⚠️ Figure class",
        type: "string",
      },
      appendToFigureClass: {
        label: "⚠️ Append to default figure class definitions?",
        help: "By default, the figure class will be appended to a predefined class. Use this to override default classes with your own",
        type: "boolean",
        def: "true",
        toggle: {
          true: "Append to figure class",
          false: "Override default classes",
        },
      },
      figureStyle: {
        label: "⚠️ Figure style",
        type: "string",
        textarea: true,
      },
    },
  },
};
