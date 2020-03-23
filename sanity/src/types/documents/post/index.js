import { reference as authorRef } from '../author';
import { reference as youtubeRef } from '../../objects/youtube';

export const reference = 'post';

export default {
    title: 'Post',
    name: reference,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        },
        {
            title: 'Date Posted',
            name: 'date_posted',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: authorRef }],
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Feature Image',
            name: 'feature_image',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                },
                {
                    type: youtubeRef
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            datePosted: 'date_posted',
            media: 'feature_image'
        },
        prepare: ({ datePosted, ...rest }) => ({
            ...rest,
            subtitle: new Date(datePosted).toDateString()
        })
    }
};
