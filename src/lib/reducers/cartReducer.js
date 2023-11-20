import { QUANTITY_INCREASE, QUANTITY_DECREASE, ADD_TO_CART, REMOVE_FROM_CART,ADD_PRODUCT } from "../constants";
import { useEffect, useState } from "react";

const initialState = {
	items: [],
	addedItems: [],
	total: 0,
	totalNumberOfItems: 0,
};

export default cartReducer = (state = initialState, action) => {
	



	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				items: [...state.items, ...action.product],
			};

		case ADD_TO_CART:
			let addedItem = state.items.find((item) => item.id === action.id);

			if (!addedItem) {
				// Item not found in state.items
				console.error(`Item with id ${action.id} not found in state.items`);
				return state;
			}

			let existed_item = state.addedItems.find((item) => action.id === item.id);
			if (existed_item) {
				addedItem.totalItem += 1;
				return {
					...state,
					total: state.total + addedItem.price,
				};
			} else {
				addedItem.totalItem = 1;

				let newTotal = state.total + addedItem.price;

				return {
					...state,
					addedItems: [...state.addedItems, addedItem],
					total: newTotal,
				};
			}
		case REMOVE_FROM_CART:
			let itemToRemove = state.addedItems.find((item) => action.id === item.id);
			let new_items = state.addedItems.filter((item) => action.id !== item.id);

			let newTotal = state.total - itemToRemove.price * itemToRemove.totalItem;
			console.log(itemToRemove);
			return {
				...state,
				addedItems: new_items,
				total: newTotal,
			};

		case QUANTITY_INCREASE:
			let addeItem = state.items.find((item) => item.id === action.id);
			addeItem.totalItem += 1;
			let neoTotal = state.total + addeItem.price;
			return {
				...state,
				total: neoTotal,
				totalNumberOfItems: state.totalNumberOfItems + 1,
			};
		case QUANTITY_DECREASE:
			let addItem = state.items.find((item) => item.id === action.id);

			if (addItem.totalItem === 1) {
				let new_items = state.addedItems.filter(
					(item) => item.id !== action.id
				);
				let newTotal = state.total - addItem.price;
				return {
					...state,
					addedItems: new_items,
					total: newTotal,
					totalNumberOfItems: state.totalNumberOfItems - 1,
				};
			} else {
				addItem.totalItem -= 1;
				let newTotal = state.total - addItem.price;
				return {
					...state,
					total: newTotal,
					totalNumberOfItems: state.totalNumberOfItems - 1,
				};
			}

		default:
			return state;
	}
};