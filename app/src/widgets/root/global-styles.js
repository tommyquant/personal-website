import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

import {softAmber} from 'yorha/src/common/style/palette';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    body {
        background-color: ${softAmber};
    }
`;

export default GlobalStyle;
