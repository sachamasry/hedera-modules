export default {
  extend: "@apostrophecms/html-widget",
  options: {
    label: "Html Widget",
    description:
      "Insert raw HTML code. Usually used to insert embedding code from popular websites. NOTE: Using the HTML widget can be dangerous and should be avoided when possible",
    previewImage: "png",
  },
  fields: {
    add: {},
  },
};
