import styled from 'styled-components';

import PageDivider from 'yorha/src/components/graphics/page-divider';

import {PAGE_HORIZONTAL_EDGE_SPACING} from '../../common/style/constants';

const StyledPageDivider = styled(PageDivider)`
    padding: 0 ${PAGE_HORIZONTAL_EDGE_SPACING};
`;

export default StyledPageDivider;
