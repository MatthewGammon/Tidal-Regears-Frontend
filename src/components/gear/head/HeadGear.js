import React, {useState, useEffect} from 'react';
import {fetchWithTimeout} from '../../../utils/api';
import {baseUrl} from '../../../utils/api';

export default function HeadGear() {
    const [headGear, setHeadGear] = useState(null);
    const [headGearError, setHeadGearError] = useState(null);

    useEffect(() => {
        async function loadHeadGear() {
            try {
                setHeadGearError(null);
                const response = await fetch(`${baseUrl}/headGear`);
                const data = await response.json();
                setHeadGear(data);
            } catch (error) {
                setHeadGearError(error);
            }
        }
        loadHeadGear();
    }, []);


    return (
        <>
            <div className="gear">
                <label htmlFor="gear-select">Head Gear:</label>
                <select
                    name="gear"
                    id="gear-select">
                    {
                        headGear?.map((headGear, id) => (
                            <option value={headGear.headName} key={headGear.headId}>{headGear.headName}</option>
                        ))
                    }
                </select>
            </div>
        </>

    )
}