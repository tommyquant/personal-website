import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import throttle from 'lodash/throttle';

import resizeObserver from 'yorha/src/common/resize-observer';

import {getSrcsetFromOptions} from '../../common/srcset';

const ImageWrapper = styled.div`
    width: 100%;

    ${({$center}) => $center && css`
        display: flex;
        justify-content: center;
    `}
`;

const StyledImg = styled.img`
    display: block;
    max-width: 100%;
`;

const ResponsiveImg = ({
    className,
    center,
    srcsetOptions = {},
    fallbackSrc,
    alt,
    ...htmlAttributes
}) => {
    const wrapperRef = useRef();
    const imageRef = useRef();
    const [width, setWidth] = useState(0);

    const srcset = getSrcsetFromOptions(srcsetOptions);

    const throttledOnResize = throttle((entry) => {
        const wrapperWidth = entry.contentRect.width;
        const srcsetOptionsKeys = Object.keys(srcsetOptions);
        const largestImageWidth = srcsetOptionsKeys[srcsetOptionsKeys.length - 1];

        if (largestImageWidth < wrapperWidth) {
            setWidth(largestImageWidth);
        } else {
            setWidth(wrapperWidth);
        }
    }, 250);

    useEffect(() => {
        resizeObserver.observe(throttledOnResize, wrapperRef.current);

        return () => {
            resizeObserver.unobserve(wrapperRef.current);
            throttledOnResize.cancel();
        };
    }, []);

    return (
        <ImageWrapper
            className={className}
            ref={wrapperRef}
            $center={center}
            {...htmlAttributes}
        >
            <StyledImg
                ref={imageRef}
                srcSet={(width && srcset) ? srcset : null}
                sizes={`${width}px`}
                src={width ? fallbackSrc : null}
                alt={alt}
            />
        </ImageWrapper>
    );
};

ResponsiveImg.propTypes = {
    className: PropTypes.string,
    center: PropTypes.bool,
    srcsetOptions: PropTypes.object,
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string
};

export default ResponsiveImg;
