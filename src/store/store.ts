import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "./authSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		userSlice: userReducer,
		modalSlice: modalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
