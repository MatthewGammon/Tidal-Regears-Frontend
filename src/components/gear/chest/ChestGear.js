import React, {useState, useEffect} from 'react';
import {fetchWithTimeout} from '../../../utils/api';
import {baseUrl} from '../../../utils/api';

export default function ChestGear() {
    const [chestGear, setChestGear] = useState(null);
    const [chestGearError, setChestGearError] = useState(null);

    useEffect(() => {
        async function loadChestGear() {
            try {
                setChestGearError(null);
                const response = await fetch(`${baseUrl}/chestGear`);
                const data = await response.json();
                setChestGear(data);
            } catch (error) {
                setChestGearError(error);
            }
        }

        loadChestGear();
    }, []);

    return (
        <>
            <div className="chest-gear">
                <label htmlFor="chestGear-select">Chest Gear:</label>
                <select
                    name="chest-gear"
                    id="chestGear-select">
                    {
                        chestGear?.map((chestGear, id) => (
                            <option value={chestGear.chestName} key={chestGear.chestId}>{chestGear.chestName}</option>
                        ))
                    }
                </select>
            </div>
        </>

    )
}