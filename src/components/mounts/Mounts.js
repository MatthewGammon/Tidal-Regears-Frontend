import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../utils/api';

export default function Mounts() {
    const [mounts, setMounts] = useState(null);
    const [mountsError, setMountsError] = useState(null);

    useEffect(() => {
        async function loadMounts() {
            try {
                setMountsError(null);
                const response = await fetch(`${baseUrl}/mounts`);
                const data = await response.json();
                setMounts(data);
            } catch (error) {
                setMountsError(error);
            }
        }

        loadMounts();
    }, []);

    return (
        <>
            <div className="mounts">
                <label htmlFor="mounts-select">Mount:</label>
                <select name="mounts" id="mounts-select">
                    {
                        mounts?.map((mount, id) => (
                            <option value={mount.mountName} key={mount.mountId}>{mount.mountName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}