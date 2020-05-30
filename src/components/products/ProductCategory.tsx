import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid black;
	border-radius: 1rem;
	background-color: white;
	height: 12vh;
	overflow: hidden;
	position: relative;

	.slick-current & {
		/* background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.4), white); */
	}
`;

const CategoryImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 80%;
	object-fit: contain;
`;

const CategoryName = styled.p`
	position: absolute;
	bottom: 0.5rem;
	width: 100%;
	display: block;
	text-align: center;
	margin: 0 auto;
`;

interface Props {
	name: string;
	image: string;
}
const ProductCategory: React.FC<Props> = ({ image, name }) => (
	<Container>
		<CategoryImage src={image} />
		<CategoryName>{name}</CategoryName>
	</Container>
);

export default ProductCategory;
