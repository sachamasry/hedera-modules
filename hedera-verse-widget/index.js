export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Verse",
    description:
      "Preformatted text to be presented exactly as written, such as poetry",
    icon: "verseIcon",
    openGraph: false,
  },
  icons: {
    verseIcon: "TextShort",
  },
  fields: {
    add: {
      verse: {
        type: "string",
        label: "Verse",
        required: true,
        textarea: true,
      },
    },
  },
};
