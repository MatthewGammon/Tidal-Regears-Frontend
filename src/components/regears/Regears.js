import React, {useState, useEffect} from 'react';
import {baseUrl, updateStatus} from '../../utils/api';
import {useNavigate} from 'react-router-dom';
import './Regears.css';

export default function Regears() {
    const [regears, setRegears] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const loadRegears = async () => {
            try {
                const respone = await fetch(`${baseUrl}/regears`, {signal});
                const data = await respone.json();
                setRegears(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setFetchError(null);
                }
            }
        }
        loadRegears();

        return () => {
            setFetchError(null);
            controller.abort();
        };
    }, []);

    const handleApprove = async (regearId, regear) => {
        regear.status = "approved";
        await updateStatus(regearId, regear);
        window.alert("Regear Request Approved!")
        navigate("/regears");
        // call update with "approved", regearId and update the status in db for given regear
    }

    const handleReject = async (regearId, regear) => {
        if (
            window.confirm("Are you sure you want to reject this request? This cannot be undone.")
        ) {
            regear.status = "rejected";
            await updateStatus(regearId, regear);
            navigate("/regears")

        }
    }
const pending = regears?.filter((regear) => regear.status === "pending");
    // only display regears with a status of pending. only display buttons for pending regears.

    return (
        <>
            <main className="regears-list">
                <div className="regears-header">
                    <h2>Current Pending Regears</h2>
                </div>

                <table className="regears-table">
                    <tbody>
                    <tr className="regears-table-headers">
                        <th>Regear ID</th>
                        <th>Status</th>
                        <th>Player Name</th>
                        <th>Guild</th>
                        <th>IP</th>
                        <th>Main Hand</th>
                        <th>Head</th>
                        <th>Chest</th>
                        <th>Shoes</th>
                        <th>Time of Death</th>
                        <th>Event ID</th>
                        <th>Approve/Reject</th>
                    </tr>
                    {
                       pending?.map((regear) => (
                            <tr className="regear" key={regear.regearId}>
                                <td>{regear.regearId}</td>
                                <td>{regear.status}</td>
                                <td>{regear.characterName}</td>
                                <td>{regear.guildName}</td>
                                <td>{regear.itemPower}</td>
                                <td>{`${regear.mainTier} ${regear.mainHand}`}</td>
                                <td>{`${regear.headTier} ${regear.headGear}`}</td>
                                <td>{`${regear.chestTier} ${regear.chestGear}`}</td>
                                <td>{`${regear.shoesTier} ${regear.shoes}`}</td>
                                <td>{regear.timeOfDeath}</td>
                                <td>{regear.eventId}</td>
                                <td>
                                    <button onClick={() => handleApprove(regear.regearId, regear)}>Approve</button>
                                    <br/>
                                    <button onClick={() => handleReject(regear.regearId, regear)}>Reject</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </main>
        </>
    )
}