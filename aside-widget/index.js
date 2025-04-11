export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Aside",
    description: "Insert an existing block of reusable content",
    icon: "sidebarIcon",
  },
  icons: {
    sidebarIcon: "PageLayoutSidebarRight",
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
