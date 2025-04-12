export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Definition list",
    description: "Display a group of terms and descriptions, i.e. a glossary",
    icon: "definitionListIcon",
    openGraph: false,
  },
  icons: {
    definitionListIcon: "BookAlphabet",
  },
  fields: {
    add: {
      termsAndDefinitions: {
        label: "Terms and Definitions",
        type: "array",
        titleField: "term",
        inline: { alwaysExpand: false },
        fields: {
          add: {
            term: {
              label: "Term",
              type: "string",
              required: true,
            },
            definition: {
              label: "Definition",
              type: "string",
              textarea: true,
              required: true,
            },
          },
        },
      },
    },
  },
};
