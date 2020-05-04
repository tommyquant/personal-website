import prismComponents from 'prismjs/components';

import Preview from './preview';

export const reference = 'syntax_highlighter';

// eslint-disable-next-line no-unused-vars
const {meta, ...languages} = prismComponents.languages;

export default {
    title: 'Syntax Highlighter',
    name: reference,
    type: 'object',
    fields: [
        {
            name: 'code',
            type: 'text',
            title: 'Code',
            options: {
                isHighlighted: true
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'language',
            type: 'string',
            title: 'Language',
            options: {
                isHighlighted: true,
                list: Object.entries(languages)
                    .map(([key, value]) => ({
                        title: value.title,
                        value: key
                    }))
            }
        }
    ],
    preview: {
        select: {
            code: 'code',
            language: 'language'
        },
        component: Preview
    }
};
