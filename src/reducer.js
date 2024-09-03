export const initialState = {
    basket: [],
    loggedinuser: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            };
        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                // Create a copy of the basket array without the item to remove
                const newBasket = [...state.basket.slice(0, index), ...state.basket.slice(index + 1)];
                return {
                    ...state,
                    basket: newBasket
                };
            } else {
                console.log("There were errors while removing product from the cart");
                return state; // Return the current state if item not found
            }
        default:
            return state;
    }
};

export default reducer;
