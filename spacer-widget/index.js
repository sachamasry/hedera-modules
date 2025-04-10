export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Spacer",
    description:
      "Add empty vertical spacing to help space your layout or content",
    icon: "spacerIcon",
    previewIcon: "spacerIcon",
    openGraph: false,
  },
  icons: {
    spacerIcon: "ArrowExpandVertical",
  },
  fields: {
    add: {
      spacerHeight: {
        label: "Change the spacer height",
        help: "The height is a relative number, not an absolute measure, dependent on the style rules and measures of your website",
        type: "range",
        def: "3",
        min: 1,
        max: 15,
        step: 1,
      },
    },
  },
};
