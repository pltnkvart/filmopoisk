import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LocalUserRates {
  [id: string]: number;
}

export const LOCALSTORAGE_USER_RATES_KEY = 'userRates';

const initialRatesStr = localStorage.getItem(LOCALSTORAGE_USER_RATES_KEY) ?? '';

const initialRates = initialRatesStr ? JSON.parse(initialRatesStr) : {};

const userRatesSlice = createSlice({
  name: 'userRates',
  initialState: initialRates,
  reducers: {
    set: (state, { payload }: PayloadAction<LocalUserRates>) => {
      return { ...state, ...payload };
    },
    setSingle: (
      state,
      { payload }: PayloadAction<{ id: string; value: number }>,
    ) => {
      return { ...state, [payload.id]: payload.value };
    },
  },
});

export const { set, setSingle } = userRatesSlice.actions;
const userRatesReducer = userRatesSlice.reducer;
export default userRatesReducer;
