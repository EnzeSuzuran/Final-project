import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { clearCart } from '../../features/counter/counterSlice';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const items = useSelector((state: RootState) => state.counter.items);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    ...formData,
                }),
            });

            if (response.ok) {
                dispatch(clearCart());
                alert('Заказ успешно оформлен!');
                setFormData({ name: '', phone: '', email: '' });
                onClose();
            } else {
                alert('Ошибка при оформлении заказа');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при оформлении заказа');
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Корзина</h2>
                {items.length === 0 ? (
                    <p>Ваша корзина пуста.</p>
                ) : (
                    <div>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </li>
                            ))}
                        </ul>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Имя:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Телефон:
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </label>
                            </div>
                            <button type="submit">Оформить заказ</button>
                        </form>
                    </div>
                )}
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default CartModal;
