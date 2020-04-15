import Preview from './preview';

export const reference = 'image_extended';

export default {
    title: 'Image Extended',
    name: reference,
    type: 'image',
    fields: [
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            options: {
                isHighlighted: true
            },
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'asset.originalFilename',
            description: 'description',
            assetUrl: 'asset.url'
        },
        component: Preview
    }
};
