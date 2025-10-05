import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userdata:null
}
const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userdata=action.payload
            console.log(action.payload)
        },
        logout:(state,action)=>{
            state.status=false;
            state.userdata=null;
        }
        
    }
})

export const authReducer= authSlice.reducer
export default authSlice
export const {login,logout}=authSlice.actions