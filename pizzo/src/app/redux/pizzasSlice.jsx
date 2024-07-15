import { createSlice } from '@reduxjs/toolkit'


export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState: {
        basket: [

        ]
    },
    reducers: {
        addBasket: (state, action) => {
            const pizzadata = action.payload;
            const existingPizza = state.basket.find((pizza) => pizza.id === pizzadata.id);
            if (existingPizza) {
                existingPizza.amount += 1;
            } else {
                state.basket.push({ ...pizzadata, amount: 1 });

            }
        },
        increaseAmount: (state, action) => {
            const id = action.payload
            state.basket.map((item) => {
                if (item.id === id) {
                    item.amount += 1;
                }
            })
        },
        decreaseAmount: (state, action) => {
            const id = action.payload
            state.basket.map((item) => {
                if (item.id === id) {
                    item.amount -= 1;
                }
            })
        }



    }
})
export const { addBasket, increaseAmount,decreaseAmount } = pizzasSlice.actions;
export default pizzasSlice.reducer;