import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product.types';

const initialState: IProduct[] = [];

export const products = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, { payload }) => {
			state.push(...payload);
		},
		deleteProduct: (state, { payload }) => {
			const index = state.findIndex(product => product.id === payload);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const { actions, reducer } = products;
