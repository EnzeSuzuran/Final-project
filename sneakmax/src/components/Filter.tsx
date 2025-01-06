import React from 'react';

const Filter = () => {
    return (
        <div>
            <h2>Filter Products</h2>
            <label>
                Gender:
                <select>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>
            </label>
            <label>
                Size:
                <select>
                    <option value="all">All</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </label>
            {/* Ползунок цен можно добавить с помощью nouislider-react */}
        </div>
    );
};

export default Filter;
