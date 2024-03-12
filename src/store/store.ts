import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as products } from './products/products.slice';
import { reducer as sumPrice } from './sum-price/sumPrice.slice';

const reducers = combineReducers({
	products: products,
	sumPrice: sumPrice,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
