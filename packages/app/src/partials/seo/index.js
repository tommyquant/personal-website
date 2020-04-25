import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const TITLE_SUFFIX = ' — Website Title';

const DEFAULTS = {
    title: ' Website Title — Full Stack Developer'
};

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
