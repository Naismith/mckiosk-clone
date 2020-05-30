import React from 'react';
import Slider from 'react-slick';
import ProductCategory from './ProductCategory';
import { CategoryEdge } from 'types/categories';

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	vertical: true,
	centerMode: true,
	verticalSwiping: true,
	focusOnSelect: true,
};

interface Props {
	categories: CategoryEdge[];
}

const ProductCategorySlider: React.FC<Props> = ({ categories }) => {
	return (
		<Slider {...settings}>
			{categories.map(({ node: category }) => {
				return (
					<ProductCategory
						image={category.image.url}
						name={category.name}
						key={category._meta.id}
					/>
				);
			})}
		</Slider>
	);
};

export default ProductCategorySlider;
