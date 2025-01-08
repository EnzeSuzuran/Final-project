import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { useSelector } from 'react-redux';
import { fetchSneakers } from '../../store/sheakersSlice';
import { RootState } from '../../app/store';
import { Sneakers } from '../../types';

const Catalog: React.FC = () => {
    const dispatch = useAppDispatch();
    const sneakers = useSelector((state: RootState) => state.sneakers as Sneakers[]);

    useEffect(() => {
        dispatch(fetchSneakers());
    }, [dispatch]);

    return (
        <div>
            {sneakers.map((sneaker: Sneakers) => (
                <div key={sneaker.id}>
                    <h2>{sneaker.title}</h2>
                    <p>{sneaker.description}</p>
                    <img src={sneaker.imgUrl} alt={sneaker.title} />
                    <p>Цена: {sneaker.price} руб.</p>
                </div>
            ))}
        </div>
    );
};

export default Catalog;
