import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    users : [],
    loading: false
}

export const login = createAsyncThunk('login', async(requestJson, {rejectWithValue})=>{
    let responseData = await fetch(`http://localhost:3000/api/user`,{
        method: "POST",
        body: JSON.stringify(requestJson)
    })
    try{
        responseData = await responseData.json();
        return responseData ; 
    }catch(error){
        return rejectWithValue(error) ;
    }
})

const slice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{
        logout:(state, action)=>{
            state.users = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending, (state)=>{
            state.loading = true;
        }),
        builder.addCase(login.fulfilled, (state,action)=>{
            state.loading = false;
            state.users.push(action.meta.arg)
        }),
        builder.addCase(login.rejected, (state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        })
    }
})
export const {logout} = slice.actions;
export default slice.reducer;