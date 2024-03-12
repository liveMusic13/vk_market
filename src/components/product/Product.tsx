import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as productsAction } from '../../store/products/products.slice';
import { RootState } from '../../store/store';
import { actions as sumPriceActions } from '../../store/sum-price/sumPrice.slice';
import { IProduct } from '../../types/product.types';
import styles from './Product.module.scss';

const Product: FC<IProduct> = props => {
	const dispatch = useDispatch();
	const { arrProducts } = useSelector((state: RootState) => state.sumPrice);

	const count = arrProducts.filter(idProduct => idProduct === props.id).length;

	return (
		<div key={props.id} className={styles.wrapper_product}>
			<img className={styles.img_product} src={props.image} alt='img' />
			<h2 className={styles.title}>{props.title}</h2>
			<p className={styles.description}>{props.description}</p>
			<p className={styles.count}>Количество: {count}</p>
			<p className={styles.price}>Стоимость: {props.price}</p>
			<div className={styles.block__buttons}>
				<button
					onClick={() => {
						dispatch(
							sumPriceActions.addPrice({ price: props.price, id: props.id })
						);
					}}
				>
					+
				</button>
				<button
					onClick={() => {
						dispatch(
							sumPriceActions.deletePrice({ price: props.price, id: props.id })
						);
					}}
				>
					-
				</button>
				<button
					onClick={() => dispatch(productsAction.deleteProduct(props.id))}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default Product;
