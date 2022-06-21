import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../../utils/api';

export default function ListBuilds() {
    const [buildsList, setBuildsList] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const loadBuilds = async () => {
            setFetchError(null);
            try {
                const response = await fetch(`${baseUrl}/builds`);
                const data = await response.json();
                setBuildsList(data);
            } catch (error) {
                setFetchError(error);
            }
        }
        loadBuilds();
    }, []);

    return (
        <div className="test">
            {JSON.stringify(buildsList)}
        </div>
    )

}