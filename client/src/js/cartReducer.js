const initialState = {
    cartItems: [],
    total: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productToAdd = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(item => item.id === productToAdd.id);
      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        const existingCartItem = updatedCartItems[existingCartItemIndex];
        existingCartItem.quantityPurchased += 1;
        return {
          ...state,
          cartItems: updatedCartItems,
          total: state.total + Number(productToAdd.priceProduct),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...productToAdd }],
          total: state.total + Number(productToAdd.priceProduct),
        };
      }
    case 'REMOVE_FROM_CART':
      const productId = action.payload;
      const removedProduct = state.cartItems.find(item => item.id === productId);
      if (!removedProduct) {
        return state;
      }
      const updatedCartItems = state.cartItems.filter(item => item.id !== productId);
      const updatedTotal = state.total - removedProduct.priceProduct * removedProduct.quantityPurchased;
      return {
        ...state,
        cartItems: updatedCartItems,
        total: updatedTotal,
      };
    default:
      return state;
  }
};

export default cartReducer;