import {createSlice} from '@reduxjs/toolkit';
import { IUser} from '../components/data/models';

interface userState{
    "user": IUser,
    "authorization":boolean,
    "visibleSignIn": boolean,
    "visibleCreateAccount": boolean,
}

const initialState:userState={
    "user": {
        "email": "string",
        "username": "string",
        "password": "string",
        "name":{
            "firstname":"string",
            "lastname":"string",
        },
        "address":{
            "city":"string",
            "street":"string",
            "number":0,
            "zipcode":"string",
            "geolocation":{
                "lat":"string",
                "long":"string",
            }
        },
        "phone":"string",
    },
    "authorization":false,
    "visibleSignIn": false,
    "visibleCreateAccount": false,
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        openWindowSignIn(state){
            state.visibleSignIn = !state.visibleSignIn;
            if (!state.visibleSignIn){
                document.body.style.overflow ="auto";
            }
        },
        openWindowCreateAccount(state){
            state.visibleCreateAccount = !state.visibleCreateAccount;
            state.visibleSignIn = !state.visibleSignIn;
            if (!state.visibleCreateAccount){
                document.body.style.overflow ="auto";
            }
        },
        signIn(state,actions){

            fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        },
        
    },
})

export const {openWindowSignIn,signIn,openWindowCreateAccount} = userSlice.actions
export default userSlice.reducer;