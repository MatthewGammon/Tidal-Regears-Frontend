import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../../utils/api';

export default function Shoes() {
    const [shoes, setShoes] = useState(null);
    const [shoesError, setShoesError] = useState(null);

    useEffect(() => {
        async function loadShoes() {
            try {
                setShoesError(null);
                const response = await fetch(`${baseUrl}/shoes`);
                const data = await response.json();
                setShoes(data);
            } catch (error) {
                setShoesError(error);
            }
        }

        loadShoes();
    }, []);

    return (
        <>
            <div className="shoes">
                <label htmlFor="shoes-select">Shoes:</label>
                <select name="shoes" id="shoes-select">
                    {
                        shoes?.map((shoe, id) => (
                            <option value={shoe.shoeName} key={shoe.shoeId}>{shoe.shoeName}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}