import { type PayloadAction, createSlice } from "@reduxjs/toolkit/react";

const modalSlice = createSlice({
	name: "modal",
	initialState: false,
	reducers: {
		setOpen: (_, action: PayloadAction<boolean>) => action.payload,
	},
});

export const { setOpen } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
