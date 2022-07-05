import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {username:"default", password:"default",  isLoggedIn:false},
    reducers: {

        login: {
            reducer(state, action){
                state.username = action.payload.userName;
                state.password = action.payload.password;
                state.isLoggedIn = true;
            },
            prepare(userName, password){
                return {
                    payload:{
                        userName,
                        password
                    }
                }
            }
        },
        logout(state){
            state.isLoggedIn = false;
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice;