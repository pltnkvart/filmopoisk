import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserRating {
  id: string;
  rating: number;
}

export interface LocalUserRates {
  [key: string]: number;
}

const LOCALSTORAGE_USER_RATES_KEY = 'userRates';

const initialUserRates: LocalUserRates = localStorage.getItem(
  LOCALSTORAGE_USER_RATES_KEY,
)
  ? JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_RATES_KEY) as string)
  : {};

console.log(initialUserRates);

const userRatesSlice = createSlice({
  name: 'userRates',
  initialState: initialUserRates,
  reducers: {
    setSingle: (state, { payload }: PayloadAction<UserRating>) => {
      state[payload.id] = payload.rating;
      localStorage.setItem(LOCALSTORAGE_USER_RATES_KEY, JSON.stringify(state));
    },
  },
});

export const { setSingle } = userRatesSlice.actions;
const userRatesReducer = userRatesSlice.reducer;
export default userRatesReducer;
