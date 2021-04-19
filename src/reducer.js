export const initialState = {
    basket: [],
    user: null,
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
        case 'REMOVE_TO_CART':
            // find the index
            // hanapin mo yung index nung same na sinend via dispatch ng onClick remove.
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product (id ${action.id})`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }


    // return balik natin yung state originally was
    // babaguhin natin yung basket
}
export default reducer