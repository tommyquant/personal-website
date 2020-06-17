import {commonFields as portableTextCommonFields} from '../../objects/portable-text';

export const reference = 'app-settings';

export default {
    title: 'App Settings',
    name: reference,
    type: 'document',
    fields: [
        {
            title: 'Environment',
            name: 'environment',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Bio',
            name: 'bio',
            ...portableTextCommonFields
        }
    ]
};
