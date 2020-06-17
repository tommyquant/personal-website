import styled from 'styled-components';

import {fuscousGray, taupeGray} from 'yorha/src/common/style/palette';
import transition from 'yorha/src/common/style/transition';

import ResponsiveImg from '../../components/responsive-img';

import HeaderTitle from './header-title';

const StyledResponsiveImg = styled(ResponsiveImg)`
    filter: sepia(1);
    transition: ${transition('filter')};
`;

const PostHeader = styled.header`
    background-color: ${taupeGray};
    color: ${fuscousGray};
    transition: ${transition('background-color', 'color')};
`;

PostHeader.Image = StyledResponsiveImg;
PostHeader.Title = HeaderTitle;

export default PostHeader;
