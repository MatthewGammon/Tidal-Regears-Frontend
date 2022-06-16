import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../utils/api';

export default function OffHand() {
    const [offHands, setOffHands] = useState(null);
    const [offHandsError, setOffHandsError] = useState(null);

    useEffect(() => {
        async function loadOffHands() {
            try {
                setOffHandsError(null);
                const response = await fetch(`${baseUrl}/offHand`);
                const data = await response.json();
                setOffHands(data);
            } catch (error) {
                setOffHandsError(error);
            }
        }

        loadOffHands();
    }, []);

    return (
        <>
            <div className="offHands">
                <label htmlFor="offHand-select">OffHand:</label>
                <select name="offHand" id="offHand-select">
                    <option defaultValue="null">None</option>
                    {
                        offHands?.map((offHand, id) => (
                            <option value={offHand.offHandName} key={offHand.offHandId}>{offHand.offHandName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}