import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const DEFAULTS = {
    title: process.env.GATSBY_WEBSITE_TITLE || 'Website Title'
};

const TITLE_SUFFIX = ` — ${DEFAULTS.title}`;

const SEO = ({
    title
}) => {

    return (
        <Helmet>
            <title>{title ? `${title}${TITLE_SUFFIX}` : DEFAULTS.title}</title>
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
