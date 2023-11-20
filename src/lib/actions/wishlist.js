import { WISHLIST} from "../constants";

export const wishlistController = (items) => {
    return {
        type: WISHLIST,
        items,
    };
}

