export const initialState = {
    basket: [],
}

// Selector 
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);



//button on click find the action.type
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        default:
            return state;
    }


    // return balik natin yung state originally was
    // babaguhin natin yung basket
}
export default reducer