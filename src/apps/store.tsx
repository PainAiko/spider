import { configureStore, createAction,createReducer } from "@reduxjs/toolkit";

export interface IAppState {
  currentUser: UserModel | null;
  tokenStatus: boolean;
  accessTokenState: ITokenState  | null
}

interface  UserModel {
    id: number;
    name: string;
}


const initialState: IAppState = {
    currentUser: null,
    tokenStatus:false,
    accessTokenState: {
        refreshed: false,
        valid:false
    }
}

interface ITokenState {
    refreshed: boolean
    valid: boolean
  }

export const setCurrentUser = createAction<UserModel | null>('user/setCurrent')  
export const setAccessTokenState = createAction<ITokenState | null>('user/setCurrent')  
const userReducer = createReducer(initialState.currentUser, (builder) => {
    return builder
    .addCase(setCurrentUser, (_state, action) => {
      return action.payload
    })
})

const accessTokenReducer = createReducer(initialState.accessTokenState, (builder) => {
    return builder
    .addCase(setAccessTokenState, (_state, action) => {
      return action.payload
    })
})

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    accessTokenState:accessTokenReducer
  },
});
