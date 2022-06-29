import React from "react";
import {useNavigate} from 'react-router-dom';
import {updateStatus} from '../../services/regearsService';
import AuthService from '../../services/auth.service';

export default function RegearsTable({regearData}) {
    const currentUser = AuthService.getCurrentUser();
    const isAdmin = currentUser?.roles.includes("ROLE_ADMIN");
    const pending = regearData?.filter((regear) => regear.status === "pending");

    const navigate = useNavigate();

    const handleApprove = async (regearId, regear) => {
        regear.status = "approved";
        await updateStatus(regearId, regear);
        window.alert("Regear Request Approved!")
        navigate("/regears");
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

    return (
        <table className="regears-table">
            <tbody>
            <tr className="regears-table-headers">
                <th>Status</th>
                <th>Player Name</th>
                <th>IP</th>
                <th>Main Hand</th>
                <th>Head</th>
                <th>Chest</th>
                <th>Shoes</th>
                <th>Time of Death</th>
                <th>Event ID</th>
                {
                    isAdmin && (
                        <th>Approve/Reject</th>
                    )
                }
            </tr>

            {
                pending?.map((regear) => (
                    <tr className="regear" key={regear.regearId}>
                        <td>{regear.status}</td>
                        <td>{regear.characterName}</td>
                        <td>{regear.itemPower}</td>
                        <td>{`${regear.mainTier} ${regear.mainHand}`}</td>
                        <td>{`${regear.headTier} ${regear.headGear}`}</td>
                        <td>{`${regear.chestTier} ${regear.chestGear}`}</td>
                        <td>{`${regear.shoesTier} ${regear.shoes}`}</td>
                        <td>{regear.timeOfDeath}</td>
                        <td>{regear.eventId}</td>
                        {
                            isAdmin && (
                                <td regear-table-buttons="true">
                                    <button className="update-button btn mb-1"
                                            onClick={() => handleApprove(regear.regearId, regear)}>Approve
                                    </button>
                                    <br/>
                                    <button className="update-button btn mt-1"
                                            onClick={() => handleReject(regear.regearId, regear)}>Reject
                                    </button>
                                </td>
                            )
                        }

                    </tr>
                ))
            }
            </tbody>
        </table>
    )

}