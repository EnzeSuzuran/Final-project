import React from 'react';
import { Link } from 'react-router-dom';
import { Sneakers } from '../../types';

const ProductCard: React.FC<{ product: Sneakers }> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imgUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Цена: {product.price} ₽</p>
            <div className="buttons">
                <Link to={`/product/${product.id}`} className="view-button">Просмотр</Link>
                <button className="add-to-cart-button">Добавить в корзину</button>
            </div>
        </div>
    );
};

export default ProductCard;
