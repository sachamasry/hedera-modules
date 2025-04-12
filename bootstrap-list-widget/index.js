export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "List",
    description: "Flexible layout for numbered, bullet-point, and inline lists",
    icon: "listIcon",
    openGraph: false,
  },
  icons: {
    listIcon: "FormatListBulletedSquare",
  },
  fields: {
    add: {
      listItems: {
        label: "List items",
        help: "If the list is an inline list, add any prefix numbering characters, as well as any suffix delimiters",
        type: "array",
        // Do not use inline array field editing as it clutters the editing dialog
        // with all the sub-fields exposed in the array
        inline: false,
        titleField: "listItem",
        fields: {
          add: {
            useSpecialListItem: {
              label: "Use plain text to format list item?",
              help: "Plain text is the default for simple and short list items. Select 'Special item' to use rich text or to insert a link",
              type: "boolean",
              toggle: {
                false: "Plain text",
                true: "Special item",
              },
              def: false,
            },
            listItem: {
              type: "string",
              label: "Item",
              if: {
                useSpecialListItem: false,
              },
            },
            specialItem: {
              label: "Special list item",
              help: "Select the rich text widget for richer and more flexible list items, or a link, e.g. to create a table of contents",
              type: "area",
              options: {
                widgets: {
                  "@apostrophecms/rich-text": {},
                },
                max: 1,
              },
              if: {
                useSpecialListItem: true,
              },
            },
            nestListWithinItem: {
              label: "Nest another list within this item?",
              type: "boolean",
              def: false,
            },
            nestedList: {
              label: "List to nest",
              type: "area",
              options: {
                widgets: {
                  list: {},
                  "definition-list": {},
                },
              },
              if: {
                nestListWithinItem: true,
              },
            },
          },
        },
      },
      listType: {
        label: "List type",
        help: "Select the type of list you want to construct. It can be an inline list, where all the items appear sequentially in one line; an unordered list, such as a classical bullet-point list; an ordered list, where each item is numbered; a tree, useful for tables of contents, FAQs, or other types of content where you interactively expand the branches of the tree to discover more information",
        type: "select",
        def: "unordered",
        choices: [
          {
            label: "Unordered list (bulleted)",
            value: "unordered",
          },
          {
            label: "Ordered list (numbered)",
            value: "ordered",
          },
          {
            label: "Inline list",
            value: "inline",
          },
          {
            label: "Tree list",
            value: "tree",
          },
        ],
      },
      unorderedListType: {
        label: "Select the marker to use for list items",
        type: "select",
        def: "disc",
        if: {
          listType: "unordered",
        },
        choices: [
          {
            label: "None",
            value: "none",
          },
          {
            label: "Disc (filled circle bullet)",
            value: "disc",
          },
          {
            label: "Circle (hollow circle)",
            value: "circle",
          },
          {
            label: "Square (filled square)",
            value: "square",
          },
          {
            label: "Custom symbol",
            value: "custom",
          },
        ],
      },
      customListMarker: {
        label: "Custom list marker",
        help: "",
        type: "string",
        def: "-",
        if: {
          unorderedListType: "custom",
        },
      },
      orderedListType: {
        label: "Select the numbering type for list items",
        type: "select",
        def: "1",
        if: {
          listType: "ordered",
        },
        choices: [
          {
            label: "Lowercase letters (a, b, c, ...)",
            value: "a",
          },
          {
            label: "Uppercase letters (A, B, C, ...)",
            value: "A",
          },
          {
            label: "Lowercase Roman numerals (i, ii, iii, ...)",
            value: "i",
          },
          {
            label: "Uppercase Roman numerals (I, II, III, ...)",
            value: "I",
          },
          {
            label: "Numbers (1, 2, 3, ...)",
            value: "1",
          },
        ],
      },
      orderedListStart: {
        label: "Number to start list count from",
        help: "Even when the list is not numbered, a number selects the starting point in the count",
        type: "integer",
        def: 1,
        required: true,
        min: 1,
        step: 1,
        if: {
          listType: "ordered",
        },
      },
      reverseNumbering: {
        label: "Number items in reverse order",
        help: "Numbers items from high to low, such as in a countdown; the order of items in the list will not change",
        type: "boolean",
        def: false,
        if: {
          listType: "ordered",
        },
      },
      enumerateInlineListItems: {
        label: "Number inline items?",
        help: "Do you want to number the items in this inline list?",
        type: "boolean",
        def: false,
        if: {
          listType: "inline",
        },
      },
      inlineListDelimiter: {
        label: "Inline list delimiter",
        help: "Character to insert between items in an inline list",
        type: "string",
        def: ";",
        if: {
          listType: "inline",
        },
      },
      expandedTree: {
        label: "Expand the tree by default?",
        help: "When creating a tree list, by default it will be collapsed, inviting the user to expand it. You can change this behaviour to display this branch of the tree in an automatically expanded state",
        type: "boolean",
        def: false,
        toggle: {
          false: "Collapsed",
          true: "Expanded",
        },
        if: {
          listType: "tree",
        },
      },
      listClass: {
        type: "string",
        label: "⚠️ List class",
      },
      listStyle: {
        type: "string",
        label: "⚠️ List CSS styling",
        textarea: true,
      },
    },
  },
};
