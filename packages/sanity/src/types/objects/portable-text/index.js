import {reference as imageExtendedRef} from '../image-extended';
import {reference as syntaxHighlighterRef} from '../syntax-highlighter';
import {reference as youtubeRef} from '../youtube';

export const commonFields = {
    type: 'array',
    of: [
        {
            type: 'block'
        },
        {
            type: imageExtendedRef
        },
        {
            type: syntaxHighlighterRef
        },
        {
            type: youtubeRef
        }
    ]
};
