import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

import {softAmber} from 'yorha/src/common/style/palette';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    body {
        background-color: ${softAmber};
        margin: 0;
        padding: 0;
    }

    p, li {
        line-height: 1.8em;
    }
`;

export default GlobalStyle;
