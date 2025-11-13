import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// const initialState = {
// cartItems: [],
// localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
// cartTotalQuantity: 0,
// cartTotalAmount: 0,
// }

const maniSlice = createSlice({

    name: "mani",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        user: null,
    },
    reducers: {
        addtoCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.name} increased product quantity`, {
                    position: "bottom-left",
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} add to cart`, {
                    position: "bottom-left",
                })
            }
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            // state.mani.push(action.payload);
        },
        removeCart: (state, action) => {
            const itemIndex = state.cartItems.filter((p) => p.id !== action.payload.id);

            state.cartItems = itemIndex;
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} remove from cart`, {
                position: "bottom-left",
            })

        }, fetchCart: (state, action) => {
            const itemIndex = state.cartItems.filter(
                (item) => item.id === action.payload.id
            );
            
            // const iditemIndex = state.cartItems.filter((p) => p.id === action.payload.id);
            // state.cartItems = iditemIndex
            state.cartItems = itemIndex;
            // state.cartItems.push(action.payload)
            // state.mani.push(action.payload);
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            // toast.error(`${action.payload.name} remove from cart`, {
            //     position: "bottom-left",
            // })

        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            // state.cartItems = itemIndex;
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextcartItem = state.cartItems.filter((p) => p.id !== action.payload.id);
                state.cartItems = nextcartItem;

                toast.error(`${action.payload.name} remove from cart`, {
                    position: "bottom-left",
                })
            }
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            toast.error(`Cart Cleared`, {
                position: "bottom-left",
            })
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal;
                }, {
                total: 0,
                quantity: 0,
            }
            )
            state.cartTotalQuantity = quantity,
                state.cartTotalAmount = total
        },

        login: (state, action) => {
            state.user = action.payload;
            toast.success(`Login Successfully...`)
        },
        logout: (state) => {
            state.user = null;
        }

    }
})
export const { addtoCart, removeCart, decreaseCart, incrementCart, clearCart, getTotal, login, logout, fetchCart } = maniSlice.actions;
export default maniSlice.reducer;