export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Testimonial",
    description: "Insert client testimonials into your content",
    icon: "quoteIcon",
    openGraph: false,
  },
  fields: {
    add: {
      testimonialImage: {
        type: "area",
        label: "Image",
        options: {
          widgets: {
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
              aspectRatio: [1, 1],
            },
          },
        },
      },
      testimonialName: {
        type: "string",
        label: "Name of person giving testimonial",
      },
      testimonialCredentials: {
        type: "string",
        label: "Credentials, title or position",
        help: "This is a subtitle to the person's name and effectively establishes authority. It is valuable information to display",
      },
      testimonialBody: {
        type: "area",
        label: "Testimonial body",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "hedera-image": {
              size: "one-sixth",
              dimensionAttrs: true,
            },
            figure: {},
            "@apostrophecms/video": {},
            "@apostrophecms/html": {},
            "bootstrap-columns": {},
            "container-block": {},
            spacer: {},
            "horizontal-rule": {},
            verse: {},
            quote: {},
            list: {},
            "list-group": {},
            "definition-list": {},
            "hedera-button": {},
            "reusable-content-blocks": {},
          },
        },
      },
      testimonialImageClass: {
        type: "string",
        label: "Image container class",
      },
      testimonialImageStyle: {
        type: "string",
        label: "Image container CSS style",
        textarea: true,
      },
      testimonialNameClass: {
        type: "string",
        label: "Name class",
      },
      testimonialNameStyle: {
        type: "string",
        label: "Name CSS style",
        textarea: true,
      },
      testimonialCredentialsClass: {
        type: "string",
        label: "Credentials class",
      },
      testimonialCredentialsStyle: {
        type: "string",
        label: "Credentials CSS style",
        textarea: true,
      },
      testimonialBodyClass: {
        type: "string",
        label: "Testimonial body class",
      },
      testimonialBodyStyle: {
        type: "string",
        label: "Testimonial body CSS style",
        textarea: true,
      },
      testimonialContainerClass: {
        type: "string",
        label: "Testimonial class",
      },
      testimonialContainerStyle: {
        type: "string",
        label: "Testimonial CSS style",
        textarea: true,
      },
      testimonialId: {
        type: "string",
        label: "Testimonial ID",
      },
    },
  },
};
