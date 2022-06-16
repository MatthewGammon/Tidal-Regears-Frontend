import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../utils/api';

export default function MainHand() {
    const [mainHands, setMainHands] = useState(null);
    const [mainHandsError, setMainHandsError] = useState(null);

    useEffect(() => {
        async function loadMainHands() {
            try {
                setMainHandsError(null);
                const response = await fetch(`${baseUrl}/mainHand`);
                const data = await response.json();
                setMainHands(data);
            } catch (error) {
                setMainHandsError(error);
            }
        }

        loadMainHands();
    }, []);

    return (
        <>
            <div className="mainHands">
                <label htmlFor="mainHand-select">MainHand:</label>
                <select name="mainHand" id="mainHand-select">
                    {
                        mainHands?.map((mainHand, id) => (
                            <option value={mainHand.main_hand_id}
                                    key={mainHand.mainHandId}>{mainHand.mainHandName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}
