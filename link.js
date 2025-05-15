const link = {
  label: {
    label: "Link text",
    help: "What text does the site visitor see?",
    type: "string",
  },
  linkType: {
    label: "Link type",
    help: "Select the type of content to to link to",
    type: "select",
    choices: [
      {
        label: "Page",
        value: "page",
      },
      {
        label: "Article",
        value: "article",
      },
      {
        label: "Author",
        value: "author",
      },
      {
        label: "Topic",
        value: "topic",
      },
      {
        label: "Tag",
        value: "tag",
      },
      {
        label: "File",
        value: "file",
      },
      {
        label: "Image",
        value: "image",
      },
      {
        label: "Custom URL",
        value: "custom",
      },
    ],
  },
  _page: {
    label: "Page to link",
    help: "Select page to link to",
    type: "relationship",
    withType: "@apostrophecms/page",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
      },
    },
    // Only if it's a page link
    if: {
      linkType: "page",
    },
  },
  _article: {
    label: "Article to link",
    help: "Select article to link to",
    type: "relationship",
    withType: "hedera-article",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
      },
    },
    // Only if it's an article link
    if: {
      linkType: "article",
    },
  },
  _author: {
    label: "Author to link",
    help: "Select author to link to",
    type: "relationship",
    withType: "hedera-author",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
      },
    },
    // Only if it's an author link
    if: {
      linkType: "author",
    },
  },
  _topic: {
    label: "Topic to link",
    help: "Select topic to link to",
    type: "relationship",
    withType: "hedera-topic",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
      },
    },
    // Only if it's a topic link
    if: {
      linkType: "topic",
    },
  },
  _tag: {
    label: "Tag to link",
    help: "Select tag to link to",
    type: "relationship",
    withType: "hedera-tag",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
      },
    },
    // Only if it's a tag link
    if: {
      linkType: "tag",
    },
  },
  _file: {
    label: "File to link",
    help: "Select file to link to",
    type: "relationship",
    withType: "@apostrophecms/file",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
        attachment: 1,
      },
    },
    // Only if it's a file link
    if: {
      linkType: "file",
    },
  },
  _image: {
    label: "Image to link",
    help: "Select image to link to",
    type: "relationship",
    withType: "@apostrophecms/image",
    max: 1,
    required: true,
    builders: {
      project: {
        title: 1,
        _url: 1,
        attachment: 1,
      },
    },
    // Only if it's a image link
    if: {
      linkType: "image",
    },
  },
  customUrl: {
    label: "URL for custom link",
    help: "Enter custom address (URL) to link to, e.g. https://example.com",
    type: "url",
    required: true,
    // Only if it's a custom link
    if: {
      linkType: "custom",
    },
  },
  // A nice option to have the link open in a new tab
  target: {
    label: "Will the link open a new browser tab?",
    help: "Should this link open in a brand new tab? Please note that doing so is useful so that the visitor doesn't lose their place, while making it more likely to lead to confusion!",
    type: "checkboxes",
    choices: [
      {
        label: "Open in new tab",
        value: "_blank",
      },
    ],
  },
  downloadLink: {
    label: "Is this a download link?",
    help: "Mark this link as a downloadable file",
    type: "boolean",
    def: false,
    if: {
      $or: [
        { linkType: "file" },
        { linkType: "image" },
        { linkType: "custom" },
      ],
    },
  },
  overrideDownloadedFileName: {
    label: "⚠️ Override the file name when downloaded",
    help: "Normally, this can be left blank and the downloaded file will have its original name. This can be overriden, resulting in a different file name when downloaded. You may want to do this if you don't want downloaded files to have the original name, or to override the name based on a marketing cmpaign, for example.",
    type: "string",
    def: "",
    if: {
      downloadLink: true,
    },
  },
};

export default { link };
