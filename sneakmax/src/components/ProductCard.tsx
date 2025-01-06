import React from 'react';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
