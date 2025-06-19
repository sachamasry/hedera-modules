export default {
  extend: "@apostrophecms/piece-page-type",
  options: {
    label: "Topic Page",
    pluralLabel: "Topic Pages",
    pieceModuleName: "hedera-topic",
    perPage: 25,
  },
  fields: {
    add: {},
    group: {},
  },
};
