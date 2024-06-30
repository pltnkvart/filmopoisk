import { type PayloadAction, createSlice } from '@reduxjs/toolkit/react';

export const LOCALSTORAGE_AUTH_KEY = 'userToken';

type State = { logged: false } | { logged: true; token: string };

const initialToken = localStorage.getItem(LOCALSTORAGE_AUTH_KEY);

export const initialState: State = initialToken?.length
  ? { logged: true, token: initialToken }
  : { logged: false };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setState: (_, action: PayloadAction<typeof initialState>) => action.payload,
    setToken: (_, action: PayloadAction<string>) => {
      if (action.payload.length) {
        localStorage.setItem(LOCALSTORAGE_AUTH_KEY, action.payload);
        return {
          logged: true,
          token: action.payload,
        };
      } else {
        localStorage.removeItem(LOCALSTORAGE_AUTH_KEY);
        return {
          logged: false,
        };
      }
    },
  },
});

export const { setState, setToken } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
