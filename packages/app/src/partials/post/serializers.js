/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import Blockquote from 'yorha/src/components/blockquote';

import {getImageUrl, getSrcsetOptions} from '../../common/sanity-image';
import ResponsiveImg from '../../components/responsive-img';
import SyntaxHighlighter from '../../components/syntax-highlighter';

import Link from './components/link';
import Youtube from './components/youtube';

const BlockRenderer = (props) => {
    const {style = 'normal'} = props.node;

    switch (style) {
        case 'blockquote':
            return <Blockquote>{props.children}</Blockquote>;
    
        default:
            // Fall back to default handling
            return BlockContent.defaultSerializers.types.block(props);
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

export default serializers;
