export interface CategoryNode {
	_meta: {
		id: string;
	};
	name: string;
	image: {
		url: string;
	};
}

export interface CategoryEdge {
	node: CategoryNode;
}
