
import Preview from './preview';

export const reference = 'youtube';

export default {
    title: 'YouTube Embed',
    name: reference,
    type: 'object',
    fields: [
        {
            title: 'YouTube video URL',
            name: 'url',
            type: 'url'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
};
