import React, { useState } from 'react';

interface FilterProps {
    onApplyFilters: (filters: { gender: string; size: string; priceRange: number[] }) => void;
    onResetFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({ onApplyFilters, onResetFilters }) => {
    const [gender, setGender] = useState<string>('all');
    const [size, setSize] = useState<string>('all');
    const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);

    const applyFilters = () => {
        onApplyFilters({ gender, size, priceRange });
    };

    return (
        <div>
            <h2>Фильтр товаров</h2>
            <label>
                Пол:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="all">Все</option>
                    <option value="men">Мужской</option>
                    <option value="women">Женский</option>
                </select>
            </label>
            <label>
                Размер:
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="all">Все</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </label>
            <label>
                Цена:
                <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                -
                <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
            </label>
            <button onClick={applyFilters}>Применить</button>
            <button onClick={onResetFilters}>Сбросить</button>
        </div>
    );
};

export default Filter;
