import React from 'react';
import styled from 'styled-components';
// import placeholder from '../../assets/product.jpg';

const Container = styled.article`
	display: inline-block;
	border: 1px solid black;
	padding: 1rem;
	width: calc(80vw / 3);
	height: calc(80vw / 3);
	background-color: white;
`;

const ProductImage = styled.img`
	display: block;
	margin: 0 auto;
	width: 80%;
	object-fit: contain;
`;

const ProductName = styled.p`
	text-align: center;
`;
const ProductPreview = () => (
	<Container>
		<ProductImage src="" />
		<ProductName>Hamburger</ProductName>
	</Container>
);

export default ProductPreview;
