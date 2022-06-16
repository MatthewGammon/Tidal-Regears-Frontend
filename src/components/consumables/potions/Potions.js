import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../../utils/api';

export default function Potions() {
    const [potions, setPotions] = useState(null);
    const [potionsError, setPotionsError] = useState(null);

    useEffect(() => {
        async function loadPotions() {
            try {
                setPotionsError(null);
                const response = await fetch(`${baseUrl}/potions`);
                const data = await response.json();
                setPotions(data);
            } catch (error) {
                setPotionsError(error);
            }
        }

        loadPotions();
    }, []);

    return (
        <>
            <div className="potions">
                <label htmlFor="potions-select">Potion:</label>
                <select name="potions" id="potions-select">
                    {
                        potions?.map((potion, id) => (
                            <option value={potion.potionName} key={potion.potionId}>{potion.potionName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}