import colourPalette from "../colourPalette.js";

export default {
  extend: "link-widget",
  options: {
    label: "Button",
    description:
      "A graphical link to existing content or a custom URL. Buttons are block-level elements with flexible options, often used as calls to action (CTA)",
    icon: "ctaButton",
    openGraph: false,
  },
  icons: {
    ctaButton: "GestureTapButton",
  },
  fields: {
    add: {
      buttonType: {
        type: "select",
        label: "Button type",
        help: "CTA buttons are site-specific Call-To-Action buttons, while the flexible button lets you build more customisable buttons",
        def: "cta",
        choices: [
          {
            label: "CTA Button (Call-To-Action)",
            value: "cta",
          },
          {
            label: "Customisable button",
            value: "custom",
          },
        ],
      },
      label: {
        label: "Button text",
        help: "What should the button say?",
        type: "string",
      },
      buttonClass: {
        label: "⚠️ Button class",
        type: "string",
        if: {
          buttonType: "custom",
        },
      },
      buttonFillStyle: {
        type: "select",
        label: "Button fill style",
        choices: [
          {
            label: "Filled button",
            value: "filled",
          },
          {
            label: "Outlined button",
            value: "outlined",
          },
        ],
        if: {
          buttonType: "custom",
        },
      },
      buttonFillColour: {
        type: "color",
        label: "Button fill colour (background)",
        if: {
          buttonFillStyle: "filled",
          buttonType: "custom",
        },
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      buttonBorderColour: {
        type: "color",
        label: "Button border colour",
        if: {
          buttonType: "custom",
        },
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
      buttonTextColour: {
        type: "color",
        label: "Button text colour (foreground)",
        if: {
          buttonType: "custom",
        },
        options: {
          pickerOptions: {
            presetColors: colourPalette,
          },
        },
      },
    },
    remove: ["alignLink", "linkClass", "linkStyle"],
    group: {
      basics: {
        label: "Basics",
        fields: [
          "buttonType",
          "label",
          "linkType",
          "_page",
          "_article",
          "_author",
          "_topic",
          "_tag",
          "_modal",
          "_file",
          "_image",
          "customUrl",
          "target",
          "downloadLink",
          "overrideDownloadedFileName",
          "includeNextArrow",
          "smallLink",
          "buttonFillStyle",
          "buttonFillColour",
          "buttonBorderColour",
          "buttonTextColour",
          "buttonClass",
          "containerClass",
          "containerStyle",
        ],
      },
    },
  },
};
