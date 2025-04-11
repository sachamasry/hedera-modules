export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Reusable content block",
    pluralLabel: "Reusable content blocks",
    description: "Insert an existing block of reusable content",
    previewImage: "png",
    icon: "reusableContentIcon",
  },
  icons: {
    reusableContentIcon: "Repeat",
  },
  fields: {
    add: {
      _linkedContent: {
        type: "relationship",
        label: "Select reusable content block to display here",
        withType: "reusable-content",
        max: 1,
      },
    },
  },
};
