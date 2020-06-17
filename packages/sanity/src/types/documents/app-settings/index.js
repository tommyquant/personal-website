import {commonFields as portableTextCommonFields} from '../../objects/portable-text';

import {reference as postRef} from '../post';

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
        },
        {
            featured_posts: 'Featured Posts',
            name: 'featured_posts',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: postRef}
                    ]
                }
            ]
        }
    ]
};
