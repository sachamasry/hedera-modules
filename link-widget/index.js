import linkConfig from "../link.js";

export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Link (block element)",
    description:
      "Link to existing content or custom URLs. Links are block-level elements",
    icon: "linkIcon",
    openGraph: false,
  },
  icons: {
    linkIcon: "LinkVariant",
  },
  fields: {
    add: {
      ...linkConfig.link,
      alignLink: {
        label: "Change alignment",
        help: "Choose how this link should align horizontally: align to the left of the screen, to the right, or centered",
        type: "select",
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
      includeArrow: {
        label: "Insert directional arrow to the link?",
        help: "To make the link stand out more, and show progress, you can automatically insert an arrow pointing to the left or right",
        type: "boolean",
        def: true,
      },
      arrowDirection: {
        label: "Choose arrow direction",
        help: "Choose whether you want an arrow pointing forward and to the right, or one pointing back and to the left",
        type: "select",
        def: "right",
        choices: [
          {
            label: "Left arrow",
            value: "left",
          },
          {
            label: "Right arrow",
            value: "right",
          },
        ],
        if: {
          includeArrow: true,
        },
      },
      smallLink: {
        label: "Make link into small text",
        help: "Display link in finer print than regular body copy (e.g. help messages, terms, copyright, legal text)",
        type: "boolean",
        def: false,
      },
      containerClass: {
        label: "⚠️ Container class",
        type: "string",
      },
      containerStyle: {
        label: "⚠️ Container style",
        type: "string",
        textarea: true,
      },
      linkClass: {
        label: "⚠️ Link class",
        type: "string",
      },
      linkStyle: {
        label: "⚠️ Link style",
        type: "string",
        textarea: true,
      },
    },
  },
};
