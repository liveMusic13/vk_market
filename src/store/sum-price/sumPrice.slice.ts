import { createSlice } from '@reduxjs/toolkit';
import { ISumPrice } from '../../types/slice.types';

const initialState: ISumPrice = {
	summa: 0,
	arrProducts: [],
};

export const sumPrice = createSlice({
	name: 'sumPrice',
	initialState,
	reducers: {
		addAllId: (state, { payload }) => {
			state.arrProducts = payload.arr;
			state.summa = payload.price;
		},
		addPrice: (state, { payload }) => {
			const matches = state.arrProducts.filter(
				product => product === payload.id
			);

			if (matches.length < 10) {
				state.summa += payload.price;
				state.arrProducts.push(payload.id);
			}
		},
		deletePrice: (state, { payload }) => {
			const matches = state.arrProducts.filter(
				product => product === payload.id
			);

			if (matches.length > 1) {
				const index = state.arrProducts.findIndex(
					product => product === payload.id
				);

				if (index !== -1) {
					state.summa -= payload.price;
					state.arrProducts.splice(index, 1);
				}
			}
		},
	},
});

export const { actions, reducer } = sumPrice;
