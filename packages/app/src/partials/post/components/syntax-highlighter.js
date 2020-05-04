import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

import {athsSpecial} from 'yorha/src/common/style/palette';

const StyledPre = styled.pre`
    line-height: 1.25em;
    padding: 0.5em;
`;

const SyntaxHighlighter = ({
    children,
    language,
    ...htmlAttributes
}) => {
    return (
        <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={theme}
        >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <StyledPre
                    className={className}
                    style={{
                        ...style,
                        backgroundColor: athsSpecial
                    }}
                    {...htmlAttributes}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                </StyledPre>
            )}
        </Highlight>
    );
};

SyntaxHighlighter.propTypes = {
    children: PropTypes.node,
    language: PropTypes.string
};

export default SyntaxHighlighter;
