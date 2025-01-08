
import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import Filter from '../components/Filter/Filter';
import sneakersData from '../data/sneakers.json';
import { Sneakers } from '../types';

const Home: React.FC = () => {
    const products: Sneakers[] = sneakersData.sneakersData;

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
