import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../../utils/api';

export default function Food() {
    const [food, setFood] = useState(null);
    const [foodError, setFoodError] = useState(null);

    useEffect(() => {
        async function loadFood() {
            try {
                setFoodError(null);
                const response = await fetch(`${baseUrl}/food`);
                const data = await response.json();
                setFood(data);
            } catch (error) {
                setFoodError(error);
            }
        }

        loadFood();
    }, []);

    return (
        <>
            <div className="food">
                <label htmlFor="food-select">Food:</label>
                <select name="food" id="food-select">
                    {
                        food?.map((food, id) => (
                            <option value={food.foodName} key={food.foodId}>{food.foodName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}