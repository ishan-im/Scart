import { legacy_createStore as createStore, combineReducers } from 'redux';

import cartReducer from "../reducers/cartReducer";
import wishlistReducer from '../reducers/wishlistReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;