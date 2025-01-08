
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const CartPage: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    return (
        <div>
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.price} ₽</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
