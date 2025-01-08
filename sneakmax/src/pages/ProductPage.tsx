
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { RootState } from '../app/store';
import { Sneakers } from '../types';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const sneakers = useSelector((state: RootState) => state.sneakers);
    const dispatch = useDispatch();
    const product = sneakers.find((sneaker) => sneaker.id === Number(id));

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
        }
    };

    return (
        <div>
            {product ? (
                <>
                    <h2>{product.title}</h2>
                    <img src={product.imgUrl} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Цена: {product.price} ₽</p>
                    <button onClick={handleAddToCart}>Добавить в корзину</button>
                </>
            ) : (
                <p>Товар не найден.</p>
            )}
        </div>
    );
};

export default ProductPage;
