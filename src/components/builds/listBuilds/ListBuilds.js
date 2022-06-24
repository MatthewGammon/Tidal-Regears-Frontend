import React, {useState, useEffect} from 'react';
import {baseUrl, deleteBuild} from '../../../utils/buildsService';
import {useNavigate} from 'react-router-dom';
import './ListBuilds.css';

export default function ListBuilds() {
    const [buildsList, setBuildsList] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const loadBuilds = async () => {
            try {
                const response = await fetch(`${baseUrl}/builds`, {signal});
                const data = await response.json();
                setBuildsList(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setFetchError(null);
                }
            }
        }
        loadBuilds();

        return () => {
            setFetchError(null);
            controller.abort();
        };
    }, []);

    const handleDelete = async (buildId) => {
        try {
            if (
                window.confirm("Are you sure you want to delete this build? This cannot be undone.")
            ) {
                await deleteBuild(buildId);
                navigate("/");
            }
        } catch (error) {

        }

    }

    return (
        <>
            <main className="builds-list">
                <div className="build-header">
                    <h2>Currently Approved ZVZ Builds</h2>
                </div>
                {
                    buildsList?.map((build, id) => (

                        <div className="build-columns" key={build.buildId}>
                            <ul className="build" key={build.buildId}>
                                <li className="build-name">{build.buildName}</li>
                                <li className="grey">Role: {build.buildRole}</li>
                                <li>Minimum IP: {build.minimumIp}</li>
                                <li>Minimum Tier Equivalent: {build.minimumTier}</li>
                                <li>Main Hand: {build.mainHand}</li>
                                <li>Off Hand: {build.offHand != "null" ? build.offHand : "N/A"}</li>
                                <li>Head: {build.headGear}</li>
                                <li>Chest: {build.chestGear}</li>
                                <li>Shoes: {build.shoes}</li>
                                <li>Cape: {build.cape}</li>
                                <li>Food: {build.food}</li>
                                <li>Potion: {build.potion}</li>
                                <li>Mount: {build.mount}</li>

                                <button className="button">Edit</button>
                                <button className="button" onClick={() => handleDelete(build.buildId)}>Delete
                                </button>
                            </ul>
                        </div>
                    ))
                }

            </main>
        </>
    )

}