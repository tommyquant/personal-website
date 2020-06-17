import {commonFields as portableTextCommonFields} from '../../objects/portable-text';
import {reference as imageExtendedRef} from '../../objects/image-extended';
import {reference as authorRef} from '../author';
import categories from './categories';

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
            to: [{type: authorRef}],
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
                list: categories
            },
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        {
            title: 'Feature Image',
            name: 'feature_image',
            type: imageExtendedRef,
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Body',
            name: 'body',
            ...portableTextCommonFields
        }
    ],
    preview: {
        select: {
            title: 'title',
            datePosted: 'date_posted',
            media: 'feature_image'
        },
        prepare: ({datePosted, ...rest}) => ({
            ...rest,
            subtitle: new Date(datePosted).toDateString()
        })
    }
};
