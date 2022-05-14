import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../Types";

export const initialState = {
  cardInfo: [
    {
      image: "https://media.istockphoto.com/photos/kefir-milk-or-turkish-ayran-drink-are-poured-into-a-glass-cup-from-a-picture-id1198789194",
      id : "1",
      name: "Leche",
      marca: "Soprole",
      precio: "990"
    },

  ],
  cart: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("agregado")
      let newItem = state.cardInfo.find(
        (product) => product.id === action.payload
      );
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
      
    }

    default:
      return state;
  }
}