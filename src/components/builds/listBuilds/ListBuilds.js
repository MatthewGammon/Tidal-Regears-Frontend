import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../../utils/api';
import './ListBuilds.css';

export default function ListBuilds() {
    const [buildsList, setBuildsList] = useState(null);
    const [fetchError, setFetchError] = useState(null);

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

    return (
        <>
            <main className="builds-list">
                <div className="build-header">
                    <h2>Currently Approved ZVZ Builds</h2>
                </div>
                {
                    buildsList?.map((build, id) => (
                        <div className="build" key={build.buildId}>
                            <h3 className="build-name">Build Name: {build.buildName}</h3>
                            <h4 className="build-role">Role: {build.buildRole}</h4>
                            <h4 className="min-ip">Minimum IP: {build.minimumIp}</h4>
                            <h4 className="min-tier">Minimum Tier Equivalent: {build.minimumTier}</h4>
                            <br/>
                            <div className="main-hand">Main Hand: {build.mainHand}</div>
                            <div className="off-hand">Off Hand: {build.offHand != "null" ? build.offHand : "N/A"}</div>
                            <div className="head-gear">Head: {build.headGear}</div>
                            <div className="chest-gear">Chest: {build.chestGear}</div>
                            <div className="shoes">Shoes: {build.shoes}</div>
                            <div className="cape">Cape: {build.cape}</div>
                            <div className="food">Food: {build.food}</div>
                            <div className="potion">Potion: {build.potion}</div>
                            <div className="mount">Mount: {build.mount}</div>
                        </div>

                    ))
                }

            </main>
        </>
    )

}