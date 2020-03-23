
import Preview from './component';

export const reference = 'youtube';

export default {
    title: 'YouTube Embed',
    name,
    type: 'object',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'YouTube video URL'
        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
};
