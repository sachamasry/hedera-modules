export default {
  extend: "@apostrophecms/image-widget",
  options: {
    label: "Advanced image",
    description:
      "Advanced image layouts and development. Prefer using the 'figure' element in most cases",
    openGraph: false,
  },
  fields: {
    add: {
      size: {
        type: "select",
        label: "Select the desired size of image to use",
        help: "This is a performance and SEO optimization; choose lower sizes to speed up the site",
        def: "two-thirds",
        choices: [
          {
            label: "Original size (can be large!)",
            value: "original",
          },
          {
            label: "Max (1600px maximum width/height)",
            value: "max",
          },
          {
            label: "full (1140px maximum width/height)",
            value: "full",
          },
          {
            label: "Two thirds (760px maximum width/height)",
            value: "two-thirds",
          },
          {
            label: "One half (570px maximum width/height)",
            value: "one-half",
          },
          {
            label: "One third (380px maximum width/height)",
            value: "one-third",
          },
          {
            label: "One sixth (190px maximum width/height)",
            value: "one-sixth",
          },
        ],
      },
      loadingAttribute: {
        type: "select",
        label: "Image loading",
        help: "How should the browser load the image?",
        def: "auto",
        choices: [
          {
            label: "Automatic (let the browser decide)",
            value: "auto",
          },
          {
            label: "Eager (load immediately)",
            value: "eager",
          },
          {
            label: "Lazy (load only when needed)",
            value: "lazy",
          },
        ],
      },
      imageClass: {
        type: "string",
        label: "⚠️ Image class",
      },
      imageStyle: {
        type: "string",
        label: "⚠️ Image style",
        textarea: true,
      },
      setDimensionAttributesToRootElement: {
        type: "boolean",
        label: "⚠️ Set image dimension attributes on the root element?",
        help: "Useful for development of complex layouts, where image dimensions must be known statically",
        def: false,
      },
    },
  },
};
