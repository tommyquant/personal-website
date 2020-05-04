import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const StyledPre = styled.pre`
    line-height: 1.25em;
    padding: 0.5em;
`;

const Preview = ({value}) => {
    const {code, language} = value;

    return (
        <Highlight
            {...defaultProps}
            code={code}
            language={language}
            theme={theme}
        >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <StyledPre className={className} style={style}>
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

Preview.propTypes = {
    value: PropTypes.shape({
        code: PropTypes.string,
        language: PropTypes.string
    })
};

export default Preview;
