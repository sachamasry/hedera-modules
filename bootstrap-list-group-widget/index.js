export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "List group",
    description:
      "Flexible component for displaying a series of any type of content",
    icon: "listGroupIcon",
    openGraph: false,
  },
  icons: {
    listGroupIcon: "FormatListText",
  },
  fields: {
    add: {
      alignList: {
        type: "select",
        label: "Change list alignment",
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
          {
            label: "Align flush",
            value: "flush",
          },
        ],
      },
      listType: {
        type: "select",
        label: "Type of list",
        def: "ul",
        required: true,
        choices: [
          {
            label: "Itemised",
            value: "ul",
          },
          {
            label: "Numbered",
            value: "ol",
          },
        ],
      },
      listItems: {
        label: "List items",
        type: "array",
        // Do not use inline array field editing as it clutters the editing dialog
        // with the 'area' sub-fields exposed in the array
        inline: { alwaysExpand: false },
        titleField: "listLabel",
        fields: {
          add: {
            listLabel: {
              label: "Item label",
              help: "Label this item, to make it easy to see which item is which, in a list. NOTE: This label is not published on the page.",
              type: "string",
            },
            listItem: {
              type: "area",
              label: "Item",
              required: true,
              options: {
                widgets: {
                  "@apostrophecms/rich-text": {},
                  "hedera-image": {
                    size: "one-sixth",
                    dimensionAttrs: true,
                  },
                  "hedera-figure": {},
                  "@apostrophecms/video": {},
                  "hedera-html": {},
                  "bootstrap-spacer": {},
                  "hedera-horizontal-rule": {},
                  "bootstrap-list": {},
                  "bootstrap-list-group": {},
                  "hederaezdefinition-list": {},
                  "hedera-button": {},
                  "bootstrap-card": {},
                  "hedera-teaser-link": {},
                  "hedera-reusable-content-blocks": {},
                },
              },
            },
          },
        },
      },
    },
  },
};
