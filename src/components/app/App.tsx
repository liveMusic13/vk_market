import axios from 'axios';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as productsAction } from '../../store/products/products.slice';
import { RootState } from '../../store/store';
import { actions as sumPriceAction } from '../../store/sum-price/sumPrice.slice';
import { IProduct } from '../../types/product.types';
import Product from '../product/Product';
import styles from './App.module.scss';

const App: FC = () => {
	const dispatch = useDispatch();
	const products = useSelector((state: RootState) => state.products);
	const { summa } = useSelector((state: RootState) => state.sumPrice);

	const getData = async () => {
		try {
			const response = await axios.get('https://fakestoreapi.com/products');

			console.log(response);
			dispatch(productsAction.addProducts(response.data));
		} catch (error) {
			console.log(error);
		}
	};

	const getIdProduct = () => {
		const arr: number[] = [];
		let fullPrice = 0;

		products.forEach((elem: IProduct) => {
			arr.push(elem.id);
			fullPrice += elem.price;
		});
		console.log({ arr, fullPrice });
		return { arr, fullPrice };
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		dispatch(
			sumPriceAction.addAllId({
				arr: getIdProduct().arr,
				price: getIdProduct().fullPrice,
			})
		);
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<h1>Корзина</h1>
			<div className={styles.block__content}>
				<div className={styles.block__products}>
					{products.map(product => {
						return <Product key={product.id} {...product} />;
					})}
				</div>
				<div className={styles.block__prices}>Итого: {summa} руб.</div>
			</div>
		</div>
	);
};

export default App;
