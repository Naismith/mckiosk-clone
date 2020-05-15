import React from 'react';
import styled from 'styled-components';
import Box from 'components/system/Box';
import Arches from '../assets/arches.png';
import Advert1 from '../assets/advert-1.jpg';
import Advert2 from '../assets/advert-2.jpg';
import useNavigate from '../hooks/useNavigate';

import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 3rem;
	height: 20vh;
	background-color: ${(props) => props.theme.colors.darkGray};
`;

const Text = styled.p`
	color: white;
	font-size: 5vw;
	width: 60vw;
	text-align: center;
	font-weight: 700;
	text-transform: uppercase;
`;

const StyledImg = styled.img`
	width: 25vw;
	height: 100%;
	object-fit: contain;
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const Advertisement = styled.div`
	height: 80vh;

	.slick-slider {
		height: 100%;
	}
`;

const StyledAdvert = styled.img`
	height: 80vh;
	width: 100%;
	object-fit: cover;
	object-position: top;
`;

const Splash = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplaySpeed: 5000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const navigate = useNavigate();

	return (
		<Wrapper onClick={() => navigate('/shop')}>
			<Advertisement>
				<ReactSlick {...settings}>
					<StyledAdvert src={Advert1} />
					<StyledAdvert src={Advert2} />
				</ReactSlick>
			</Advertisement>
			<Footer>
				<StyledImg src={Arches} />
				<Text>touch here or scan offer to start</Text>
			</Footer>
		</Wrapper>
	);
};

export default Splash;
