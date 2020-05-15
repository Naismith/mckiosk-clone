import React from 'react';
import styled from 'styled-components';
import ProductPreview from '../components/products/ProductPreview';

const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TopBar = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: yellow;
	color: black;
	font-size: 3rem;
`;

const Advert = styled.div`
	width: 100vw;
	height: 15vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: red;
	color: white;
	font-size: 3rem;
`;

const Main = styled.div`
	height: 50vh;
	display: flex;
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

const Shop = () => {
	return (
		<Layout>
			<Advert>Advert</Advert>
			<TopBar>Top Bar</TopBar>
			<Main>
				<SideBar>Side Bar</SideBar>
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

export default Shop;
