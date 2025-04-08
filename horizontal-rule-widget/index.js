export default {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Horizontal Rule',
        description: 'Use a horizontal rule to introduce a thematic break in your content: a change of scene or shift of topic',
        icon: 'ruleIcon',
        ignoreNoCodeWarning: true,
        openGraph: false,
    },
    icons: {
        ruleIcon: 'RulerSquare'
    },
    // fields: {
    //     add: {
    //         ruleColour: {
    //             type: 'color',
    //             label: 'Horizontal rule colour',
    //             help: 'Choose a colour for the rule; the default is grey',
    //             options: {
    //                 pickerOptions: {
    //                     presetColors: import palette from '../../lib/colourScheme.js';
    //                 }
    //             }
    //         },
    //     }
    // }
};
