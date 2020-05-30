import React from 'react';
import styled from 'styled-components';
import ProductPreview from '../components/products/ProductPreview';
import ProductCategorySlider from '../components/products/ProductCategorySlider';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CategoryEdge } from '../types/categories';

const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TopBar = styled.div`
	width: 100vw;
	height: 5vh;
	color: black;
	padding: 0 5vw;
	font-size: 3rem;
	display: flex;
	align-items: center;
`;

const Advert = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: red;
	color: white;
	font-size: 3rem;
`;

const Main = styled.div`
	height: 60vh;
	display: flex;
	overflow: hidden;
`;

const SideBar = styled.div`
	width: 20vw;
	height: 100%;
	background-color: rebeccapurple;
`;

const ProductArea = styled.div`
	width: 80vw;
	height: 100%;
	background-color: black;
	overflow-y: scroll;
	/* display: flex;
	flex-wrap: wrap; */
`;

const MyOrder = styled.div`
	background-color: red;
	display: flex;
	align-items: center;
	width: 100vw;
	color: white;
	height: 5vh;
	padding: 1rem 2rem;
	font-size: 2rem;
`;

const OrderSummary = styled.div`
	height: 10vh;
	width: 100vw;
	font-size: 3rem;
	background-color: green;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
`;

const FooterButtons = styled.div`
	background-color: grey;
	height: 10vh;
	width: 100vw;
`;

const TopBarLogo = styled.img`
	display: block;
	height: calc(4.5vh);
	width: calc(4.5vh);
	margin: 0;
	padding: 0;
`;

const categories = [
	'beef',
	'chicken',
	'sandwiches & wraps',
	'snacks & sides',
	'desserts & shakes',
	'beverages',
	'McCafe',
	'McPicks',
];

const Shop = () => {
	const { data } = useQuery<QueryInterface>(PageQuery);

	console.log(data);
	return (
		<Layout>
			<Advert>Advert</Advert>
			<TopBar>
				<TopBarLogo src="https://via.placeholder.com/40" />
			</TopBar>
			<Main>
				<SideBar>
					<ProductCategorySlider
						categories={data?.categories?.edges ?? []}
					/>
				</SideBar>
				<ProductArea>
					<ProductPreview />
					<ProductPreview />
					<ProductPreview />
					<ProductPreview />
					<ProductPreview />
					{/* <ProductPreview />
					<ProductPreview />
					<ProductPreview />
					<ProductPreview /> */}
				</ProductArea>
			</Main>
			<MyOrder>My Order - $0.00</MyOrder>
			<OrderSummary>Order Summary</OrderSummary>
			<FooterButtons>
				<button>Cancel Order</button>
				<button>Done</button>
			</FooterButtons>
		</Layout>
	);
};

interface QueryInterface {
	categories: {
		edges: CategoryEdge[];
	};
}

const PageQuery = gql`
	query Categories {
		categories: allCategorys {
			edges {
				node {
					_meta {
						id
					}
					name
					image
				}
			}
		}
	}
`;

export default Shop;
