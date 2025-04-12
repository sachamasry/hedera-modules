export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Advanced Tables (Bootstrap)",
    description: "Create advanced presentation tables",
    icon: "tableIcon",
    openGraph: false,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Table name",
      },
      caption: {
        type: "string",
        label: "Table caption",
        textarea: true,
        help: "The caption should clearly and concisely describe the table's purpose",
      },
      captionPosition: {
        type: "select",
        label: "Position of table caption",
        def: "bottom",
        choices: [
          {
            label: "Above table (on top)",
            value: "top",
          },
          {
            label: "Below table (at the bottom)",
            value: "bottom",
          },
        ],
      },
      rows: {
        label: "Table rows",
        type: "array",
        inline: true,
        titleField: "columns",
        fields: {
          add: {
            columns: {
              label: "Table columns",
              type: "array",
              inline: true,
              titleField: "cellContents",
              fields: {
                add: {
                  cellContents: {
                    type: "string",
                    label: "Cell contents",
                  },
                },
              },
            },
            typeOfRow: {
              label: "Type of row: header, body or footer",
              type: "radio",
              def: "row",
              choices: [
                {
                  label: "Table header",
                  value: "header",
                },
                {
                  label: "Table footer",
                  value: "footer",
                },
                {
                  label: "Regular row",
                  value: "row",
                },
              ],
            },
          },
        },
      },
      tableOptions: {
        label: "Table presentation options",
        type: "checkboxes",
        choices: [
          {
            label: "Striped rows",
            value: "striped",
          },
          {
            label: "Hoverable rows (highlight rows hovered over)",
            value: "hoverable",
          },
          {
            label: "Compact table",
            value: "compact",
          },
        ],
      },
      tableBorder: {
        label: "Table border options",
        type: "select",
        choices: [
          {
            label: "Default",
            value: "none",
          },
          {
            label: "Bordered table (border around table and all cells)",
            value: "bordered",
          },
          {
            label: "Borderless table (no border around table or any cells)",
            value: "borderless",
          },
        ],
      },
    },
  },
};
