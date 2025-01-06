import React from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const Home = () => {
    // Здесь вы будете получать данные о продуктах
    const products = [
        { id: 1, name: 'Sneaker 1', price: 100, image: 'image1.jpg' },
        { id: 2, name: 'Sneaker 2', price: 150, image: 'image2.jpg' },
    ];

    return (
        <div>
            <h1>Welcome to SneakMax</h1>
            <Filter />
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
