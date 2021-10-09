import React from 'react';
import styled from 'styled-components';

const StyledCommonButton = styled.button`
	font-weight: bold;
	background-color: white;
	border: solid 3px red;
`;

const CommonButton = (props) => (
	<StyledCommonButton className="common-button" {...props} />
);

export default CommonButton;
