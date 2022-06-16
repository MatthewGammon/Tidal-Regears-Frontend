import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../utils/api';

export default function Capes(){
    const [capes, setCapes] = useState(null);
    const [capesError, setCapesError] = useState(null);

    useEffect(() => {
        async function loadCapes(){
            try {
                setCapesError(null);
                const response = await fetch(`${baseUrl}/capes`);
                const data = await response.json();
                setCapes(data);
            } catch (error){
                setCapesError(error)
            }
        }

        loadCapes();
    },[]);

    return (
        <>
            <div className="capes">
                <label htmlFor="capes-select">Cape</label>
                <select name="capes" id="capes-select">
                    {
                        capes?.map((cape, id) => (
                            <option value={cape.capeName} key={cape.capeId}>{cape.capeName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}