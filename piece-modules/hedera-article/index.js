export default {
  extend: "@apostrophecms/blog",
  options: {
    label: "Article",
    pluralLabel: "Articles",
    alias: "article",
    quickCreate: true,
    sort: {
      publishedAt: -1,
      title: 1,
    },
    perPage: 15,
    export: true,
    import: true,
  },
  fields: {
    add: {
      title: {
        type: "string",
        label: "Article title",
      },
      subTitle: {
        type: "string",
        label: "Article subtitle",
      },
      _featuredImage: {
        type: "relationship",
        help: "The featured image can be any size and will be used in article listings",
        label: "Featured image",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _mastheadImage: {
        type: "relationship",
        label: "Masthead image",
        help: "The masthead image is a dedicated letterbox image, used on the article page. If none is chosen, the featured image will be used",
        withType: "@apostrophecms/image",
        max: 1,
      },
      _topics: {
        type: "relationship",
        label: "Article topic",
        withType: "topic",
        builders: {
          project: {
            title: 1,
            _url: 1,
          },
        },
      },
      _tags: {
        type: "relationship",
        label: "Tags",
        withType: "hedera-tag",
        reverseOf: "_article",
        builders: {
          project: {
            title: 1,
            _url: 1,
          },
        },
      },
      _author: {
        type: "relationship",
        label: "Author",
        withType: "author",
        withRelationships: ["@apostrophecms/image", "profileImage"],
        builders: {
          project: {
            title: 1,
            profileImage: 1,
            _url: 1,
          },
        },
      },
      body: {
        type: "area",
        label: "Article text",
        options: {
          expanded: true,
          groups: {
            text: {
              label: "Text",
              columns: 4,
              widgets: {
                "@apostrophecms/rich-text": {},
                // 'list': {},
                // 'definition-list': {},
                // 'list-group': {},
                // 'quote': {},
                // 'verse': {},
                // 'link': {},
              },
            },
            media: {
              label: "Media",
              columns: 2,
              widgets: {
                // 'figure': {},
                image: {
                  size: "one-sixth",
                  dimensionAttrs: true,
                },
                "@apostrophecms/video": {},
                // 'cover-block': {},
              },
            },
            layout: {
              label: "Design and layout",
              columns: 2,
              widgets: {
                // 'columns': {},
                // 'container-block': {},
                // 'spacer': {},
                "horizontal-rule": {},
                // 'button': {},
                // 'card': {},
                // 'carousel': {},
              },
            },
            special: {
              label: "Special content",
              columns: 2,
              widgets: {
                // 'teaser-link': {},
                // 'testimonial': {},
                // 'newsletter-subscription': {},
              },
            },
            embeds: {
              label: "Embeds",
              widgets: {},
            },
            advanced: {
              label: "Advanced layout options",
              columns: 2,
              widgets: {
                // 'reusable-content-blocks': {},
                // 'html': {},
              },
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: [
          "title",
          "subTitle",
          "publishedAt",
          "_author",
          "_featuredImage",
          "_mastheadImage",
          "_topics",
          "_tags",
          "body",
        ],
      },
    },
  },
};
