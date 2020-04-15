import Preview from './preview';

export const reference = 'youtube';

export default {
    title: 'YouTube Embed',
    name: reference,
    type: 'object',
    fields: [
        {
            title: 'YouTube video ID',
            name: 'video_id',
            type: 'string'
        }
    ],
    preview: {
        select: {
            video_id: 'video_id'
        },
        component: Preview
    }
};
