import { createSlice } from '@reduxjs/toolkit'


export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState: {
        basket: [

        ],
        total:0,
        totalprice:0,
        login:[{
            name:"",
            password:""
        }],
        signup:[{
            name:"",
            password:"",
            password2:""
        }]
    },
    reducers: {
        addBasket: (state, action) => {
            const pizzadata = action.payload;
            const existingPizza = state.basket.find((pizza) => pizza.id === pizzadata.id);
            if (existingPizza) {
                existingPizza.amount += 1;
                state.total =0
                state.totalprice += pizzadata.price
             
            } else {
                state.basket.push({ ...pizzadata, amount: 1 });
                state.total =0
                state.totalprice += pizzadata.price
            
              

            }
        },
        increaseAmount: (state, action) => {
            const id = action.payload
            state.basket.map((item) => {
                if (item.id === id) {
                    item.amount += 1;
                    state.total+=1
                    state.totalprice += item.price
                }
            })
        },
        decreaseAmount: (state, action) => {
            const id = action.payload
           const itemIndex = state.basket.findIndex(item => item.id ===id);
           if(itemIndex !== -1){
            const item = state.basket[itemIndex];
            if(item.amount>1){
                item.amount -= 1;
                state.total-=1
                state.totalprice -= item.price
            }else{
                state.basket.splice(itemIndex,1) // Remove when it is <=0
                state.total-=1
                state.totalprice -= item.price
            }
           }
        },
        calculateTotal : (state)=> {
            state.basket.map((item) => {
              if(item.amount >0){
                state.total +=item.amount

              }
            })
        },
        updateLogin:(state,action) =>{
const {name,password} = action.payload;
state.login = { name, password };
        },
        updateSignup:(state,action) => {
const {name,password,password2} = action.payload;
state.signup = {name,password,password2}
        }
        



    }
})
export const { addBasket, increaseAmount,decreaseAmount,calculateTotal,updateLogin,updateSignup } = pizzasSlice.actions;
export default pizzasSlice.reducer;