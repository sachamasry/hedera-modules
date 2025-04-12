export default {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Carousel",
    description:
      "Slideshow component for cycling through images or slides of text, useful for highlighting specific content",
    icon: "carouselIcon",
    openGraph: false,
  },
  icons: {
    carouselIcon: "ViewCarouselOutline",
  },
  fields: {
    add: {
      slides: {
        label: "Slides",
        help: "Create the slides which will make up this carousel",
        type: "array",
        // There are too many sub-fields within this array, and the contents
        // are likely to become too long to allow this array to be editable in-line
        inline: false,
        titleField: "title",
        fields: {
          add: {
            title: {
              type: "string",
              label: "Slide title",
              help: "If you enable slide captions, this title will be displayed on the slide, otherwise it will only be used for easier slide identification",
            },
            slideText: {
              type: "string",
              label: "Slide text",
              textarea: true,
            },
            body: {
              type: "area",
              label: "Slide body",
              help: "Create content to display in the slide",
              options: {
                widgets: {
                  "@apostrophecms/rich-text": {},
                  "hedera-image": {},
                  "hedera-figure": {},
                  "@apostrophecms/video": {},
                  "hedera-html": {},
                  "bootstrap-columns": {},
                  "bootstrap-container-block": {},
                  "hedera-cover-block": {},
                  "hedera-spacer": {},
                  "hedera-horizontal-rule": {},
                  "hedera-verse": {},
                  "hedera-quote": {},
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
            overrideSlideTransitionTime: {
              type: "boolean",
              label: "Override the default transition time for this slide",
              help: "If automatic slide transitioning is enabled, override the default time spent on this individual slide",
              def: false,
            },
            slideTransitionTime: {
              type: "range",
              label: "Time to wait before transitioning to the next slide (ms)",
              help: "If automatic slide transitioning is enabled, how long, in milliseconds, should this slide be displayed for before cycling to the next one?",
              min: 1000,
              max: 30000,
              step: 100,
              def: 7000,
              if: {
                overrideSlideTransitionTime: true,
              },
            },
          },
        },
      },
      carouselId: {
        type: "string",
        label: "Carousel unique ID",
        help: "Set a unique identifier for this carousel to function fully. The name must not contain spaces or symbols, use only characters, digits, dashes '-' or underscores '_'",
      },
      fullHeightCarousel: {
        type: "boolean",
        label: "Make the carousel full height",
        help: "Make the carousel as tall as one screen height?",
        def: false,
      },
      carouselHeight: {
        type: "range",
        label: "Height of carousel",
        help: "Select the relative height of the carousel. Setting it to zero will make the carousel as tall as the longest slide inside it",
        def: 20,
        min: 0,
        max: 60,
        step: 1,
        if: {
          fullHeightCarousel: false,
        },
      },
      showControls: {
        type: "boolean",
        label: "Show previous and next controls?",
        def: "true",
      },
      showIndicators: {
        type: "boolean",
        label: "Show slide indicators?",
        help: "Slide indicators show how many slides there are, and which slide is displayed currently",
        def: "false",
      },
      displaySlideCaptions: {
        type: "boolean",
        label: "Display captions on slides?",
        help: "It is possible to define and show a caption on each slide",
        def: "false",
      },
      displaySlideText: {
        type: "boolean",
        label: "Display text on slides?",
        help: "It is possible to define and show text on each slide",
        def: "false",
      },
      slideTransitionType: {
        type: "select",
        label: "Select your preferred slide transition animation",
        help: "How do you prefer the slides to transition from one to the other?",
        def: "slide",
        choices: [
          {
            label: "Slide",
            value: "slide",
          },
          {
            label: "Fade",
            value: "fade",
          },
        ],
      },
      autoplayRegime: {
        type: "select",
        label: "Choose the autoplay regime",
        help: "How would you like the slide animation to begin: automatically on page load, only after manual interaction, or never?",
        def: "autoplay",
        choices: [
          {
            label: "Automatically start slide transitions, on page load",
            value: "autoplay",
          },
          {
            label: "Automatic slide transitions, only after manual interaction",
            value: "manual",
          },
          {
            label: "Disable all automatic transitioning",
            value: "disabled",
          },
        ],
      },
      defaultSlideTransitionTime: {
        type: "range",
        label: "Default time to automatically transition between slides (ms)",
        help: "How long, in milliseconds, should the default slide be displayed for?",
        min: 1000,
        max: 30000,
        step: 100,
        def: 7000,
        if: {
          $or: [{ autoplayRegime: "autoplay" }, { autoplayRegime: "manual" }],
        },
      },
      pauseCyclingOnHover: {
        type: "boolean",
        label: "Pause slide transitioning on hover?",
        help: "Slides will automatically transition, but by default, hovering over a slide will pause further transitions. Disable this pause?",
        def: true,
        if: {
          $or: [{ autoplayRegime: "autoplay" }, { autoplayRegime: "manual" }],
        },
      },
      disableTouchSwiping: {
        type: "boolean",
        label: "Disable touch swiping?",
        help: "Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled here",
        def: false,
      },
      disableReactToKeyboardEvents: {
        type: "boolean",
        label: "Disable keyboard events?",
        help: "By default, the carousel reacts to keyboard events (e.g. left and right arrows to navigate). This behaviour can be disabled here",
        def: false,
      },
      loopThroughSlides: {
        type: "boolean",
        label: "Loop through existing slides",
        help: "Cycle / loop through slides continuously, or stop upon reaching last slide",
        def: true,
        toggle: {
          true: "Loop through slides continuously",
          false: "Stop after reaching the last slide",
        },
      },
      sliderVariant: {
        type: "select",
        label: "Select your preferred slider style variant",
        def: "default",
        choices: [
          {
            label: "Light foreground on dark background",
            value: "default",
          },
          {
            label: "Dark foreground on light background",
            value: "dark",
          },
        ],
      },
      carouselClass: {
        type: "string",
        label: "Carousel class",
      },
      appendToCarouselClass: {
        type: "boolean",
        label: "Append to default carousel class definitions?",
        def: "true",
        toggle: {
          true: "Append to carousel class",
          false: "Override default classes",
        },
      },
      carouselStyle: {
        type: "string",
        label: "Carousel style",
        textarea: true,
      },
    },
  },
};
