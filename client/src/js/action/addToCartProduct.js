export const addToCartProduct = (newItem) => {
    return {
        type: 'ADD_TO_CART',
        payload: newItem,
    }
}