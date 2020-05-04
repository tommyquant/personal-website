import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

import {softAmber} from 'yorha/src/common/style/palette';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    :root {
        --page-horizontal-margin: 0.75rem;
        --page-vertical-margin: 1rem;

        @media only screen and (min-width: 25rem) {
            --page-horizontal-margin: 1.5rem;
        }

        @media only screen and (min-width: 40rem) {
            --page-horizontal-margin: 3rem;
            --page-vertical-margin: 2rem;
        }
    }

    body {
        background-color: ${softAmber};
    }
`;

export default GlobalStyle;
