import { WISHLIST } from '../constants';

const initialState = {
	wishlistItems: [],
};

export default wishlistReducer = (state = initialState, action) => {
	switch (action.type) {
		case WISHLIST:
			
			// If the id exists in the addedItems, remove it; otherwise, add it
			
             let addedItem = state.wishlistItems.find(
                (item) => item.id === action.items.id
            );
            
            // If the id exists in the addedItems, remove it; otherwise, add it
            if (addedItem) {
                return {
									...state,
									wishlistItems: state.wishlistItems.filter(
										(item) => item.id !== action.items.id
									),
								};
            } else {
                // Assuming action.id represents the new item to be added
                return {
                    ...state,
                    wishlistItems: [...state.wishlistItems, action.items]
                };
            }


		default:
			return state;
	}
};
