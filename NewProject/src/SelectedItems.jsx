import React, { useState } from 'react';

const SelectedItems = () => {
    const [food, setFood]  = useState('');
    const [option, setOption] = useState([]);

    const handleChange = (e) => {
        const selectedFood = e.target.value;
        setFood(selectedFood);

        if(selectedFood === 'fruits'){
            setOption([
                {value: 'apple', label: 'Apple'},
                {value: 'banana', label: 'Banana'}
            ]);
        } else if(selectedFood === 'vegetables'){
            setOption([
                {value: 'tomato', label: 'Tomato'},
                {value: 'potato', label: 'Potato'}
            ]);
        } else if(selectedFood === 'dairy'){
            setOption([
                {value: 'milk', label: 'Milk'},
                {value: 'ghee', label: 'Ghee'}
            ]);
        } else {
            setOption([]);
        }
    }

    return (
        <div>
            <select name="food" id="food" onChange={handleChange} value={food}>
                <option value="">Select</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
            </select>

            {food && (
                <select name={food} id={food}>
                    <option value="">Select {food}</option>
                    {option.map((optio) => (
                        <option key={optio.value} value={optio.value}>{optio.label}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default SelectedItems;
