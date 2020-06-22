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
    ${({$loaded}) => $loaded ? css`
        display: block;
        max-width: 100%;
    ` : css`
        display: none;
    `}
`;

const ResponsiveImg = ({
    className,
    center,
    srcsetOptions = {},
    fallbackSrc,
    lqip,
    alt,
    ...htmlAttributes
}) => {
    const wrapperRef = useRef();
    const [width, setWidth] = useState(0);
    // This sets whether the HQ image element is visible. If we have a LQIP, the HQ image
    // should be invisible at the start until is has loaded.
    const [isImageLoaded, setIsImageLoaded] = useState(!lqip);

    const srcset = getSrcsetFromOptions(srcsetOptions);

    // This component keeps track of its parent's width so that it can
    // set the 'sizes' property on the image element. This enables the browser
    // to request higher res images as the parent gets larger.
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

    const onImageLoad = () => {
        // Once the HQ image has loaded, setting this will display the HQ image and
        // hide the LQIP.
        setIsImageLoaded(true);
    };

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
            {!!(lqip && !isImageLoaded) && <img width={`${width}px`} src={lqip} />}

            <StyledImg
                $loaded={isImageLoaded}
                onLoad={onImageLoad}
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
    lqip: PropTypes.string,
    alt: PropTypes.string
};

export default ResponsiveImg;
