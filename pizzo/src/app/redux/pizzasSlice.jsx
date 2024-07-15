import { createSlice } from '@reduxjs/toolkit'

export const pizzasSlice = createSlice({
    name :'pizza',
    initialState:{
        basket : [
            
        ]
    },
    reducers:{
        addBasket:(state,action) =>{
            const pizzadata = action.payload;
state.basket.push(pizzadata);
        }

    }
})
export const {addBasket} = pizzasSlice.actions;
export default pizzasSlice.reducer;