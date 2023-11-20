import {
	QUANTITY_INCREASE,
	QUANTITY_DECREASE,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	ADD_PRODUCT,
} from '../constants';

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		id,
	};
};

export const removeItem = (id) => {
	return {
		type: REMOVE_FROM_CART,
		id,
	};
};

export const cartIncrement = (id) => {
	return {
		type: QUANTITY_INCREASE,
		id,
	};
};

export const cartDecrement = (id) => {
	return {
		type: QUANTITY_DECREASE,
		id,
	};
};

export const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		product,
	};
};
