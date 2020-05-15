import styled from 'styled-components/macro';
import {
	space,
	color,
	layout,
	position,
	typography,
	flexbox,
	border,
	SpaceProps,
	ColorProps,
	LayoutProps,
	PositionProps,
	TypographyProps,
	BorderProps,
	FlexboxProps,
} from 'styled-system';

interface IBox
	extends SpaceProps,
		ColorProps,
		LayoutProps,
		PositionProps,
		TypographyProps,
		FlexboxProps,
		BorderProps {}

const Box = styled.div<IBox>(
	{
		boxSizing: 'border-box',
		minWidth: 0,
		padding: 0,
	},
	space,
	color,
	layout,
	border,
	position,
	typography,
	flexbox,
);

export default Box;
