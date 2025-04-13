export default {
  extend: "@apostrophecms/piece-type",
  renderRoutes(self) {
    return {
      get: {
        // GET /api/v1/modal-content/rendered
        // The route rendered HTML for /modules/modal-content/views/rendered.html
        async rendered(req) {
          const criteria = {
            aposDocId: req.query.docId,
            visibility: "public",
            archived: false,
          };

          const modals = await self
            .find(req, criteria)
            .project({
              aposDocId: 1,
              slug: 1,
              title: 1,
              presentWindowCloseButton: 1,
              windowCloseButtonLabel: 1,
              body: 1,
              type: 1,
              metaType: 1,
            })
            .toObject();

          return {
            modals,
          };
        },
      },
    };
  },
  options: {
    label: "Modal window",
    pluralLabel: "Modal windows",
    alias: "modal-content",
    quickCreate: false,
    sort: {
      slug: 1,
    },
    export: true,
    import: true,
    openGraph: false,
    seoFields: false,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Modal window title",
      },
      description: {
        type: "string",
        label: "Describe this modal's purpose",
        textarea: true,
      },
      presentWindowCloseButton: {
        type: "boolean",
        label: "Include a close button for this modal?",
        help: "Apart from the 'X' in the modal window, present a dedicated, labelled close button in the modal window?",
        def: true,
      },
      windowCloseButtonLabel: {
        type: "string",
        label: "Close button label",
        help: "Enter the text to print on the close button",
        if: {
          presentWindowCloseButton: true,
        },
      },
      body: {
        type: "area",
        label: "Modal window body",
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
            "bootstrap-columns": {},
            "bootstrap-container-block": {},
            "hedera-cover-block": {},
            "bootstrap-spacer": {},
            "hedera-horizontal-rule": {},
            "hedera-verse": {},
            "hedera-quote": {},
            "bootstrap-list": {},
            "bootstrap-list-group": {},
            "hedera-definition-list": {},
            "hedera-button": {},
            "bootstrap-card": {},
            "hedera-teaser-link": {},
            "hedera-newsletter-subscription": {},
            "hedera-reusable-content-blocks": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: [
          "title",
          "description",
          "presentWindowCloseButton",
          "windowCloseButtonLabel",
          "body",
        ],
      },
    },
  },
};
