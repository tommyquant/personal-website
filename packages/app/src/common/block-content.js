/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import SanityBlockContent from '@sanity/block-content-to-react';

import Blockquote from 'yorha/src/components/blockquote';

import Link from '../components/link';
import ResponsiveImg from '../components/responsive-img';
import SyntaxHighlighter from '../components/syntax-highlighter';
import Youtube from '../components/youtube';

import {getImageUrl, getSrcsetOptions} from './sanity-image';

const BlockRenderer = (props) => {
    const {style = 'normal'} = props.node;

    switch (style) {
        case 'blockquote':
            return <Blockquote>{props.children}</Blockquote>;
    
        default:
            // Fall back to default handling
            return SanityBlockContent.defaultSerializers.types.block(props);
    }
};

const serializers = {
    types: {
        block: BlockRenderer,
        image_extended: ({node}) => (
            <ResponsiveImg
                center
                srcsetOptions={getSrcsetOptions(node)}
                fallbackSrc={getImageUrl(node)}
                alt={node.description}
            />
        ),
        syntax_highlighter: ({node}) => <SyntaxHighlighter language={node.language}>{node.code}</SyntaxHighlighter>,
        youtube: ({node}) => <Youtube videoId={node.video_id} />
    },
    marks: {
        code: ({children}) => <code>{children}</code>,
        link: ({children, mark}) => <Link href={mark.href}>{children}</Link>
    }
};

const BlockContent = (props) => (
    <SanityBlockContent
        projectId={process.env.GATSBY_SANITY_PROJECT_ID}
        dataset={process.env.GATSBY_SANITY_DATASET}
        serializers={serializers}
        {...props}
    />
);

export default BlockContent;
