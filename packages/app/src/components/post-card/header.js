import styled from 'styled-components';

import {fuscousGray, taupeGray} from 'yorha/src/common/style/palette';
import transition from 'yorha/src/common/style/transition';

import ResponsiveImg from '../../components/responsive-img';

import HeaderTitle from './header-title';

const StyledResponsiveImg = styled(ResponsiveImg)`
    filter: sepia(1);
    height: 0;
    padding-bottom: 56.25%; /* Fixes the image to a 16:9 ratio even if it hasn't loaded yet */
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
