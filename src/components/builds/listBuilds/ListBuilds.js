import React, {useState, useEffect} from 'react';
import {baseUrl, deleteBuild} from '../../../services/buildsService';
import {useNavigate} from 'react-router-dom';
import AuthService from '../../../services/auth.service'
import authHeader from '../../../services/auth-header';
import './ListBuilds.css';
import ErrorAlert from '../../../errors/ErrorAlert';

export default function ListBuilds() {
    const [buildsList, setBuildsList] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    const currentUser = AuthService.getCurrentUser();
    const isAdmin = currentUser?.roles.includes("ROLE_ADMIN");

    const navigate = useNavigate();

    useEffect(() => {
        const getBuilds = async () => {
            const url = `${baseUrl}/builds`;
            const options = {
                method: 'GET',
                headers: authHeader(),
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                if (response.status >= 400 && response.status < 600) {
                    console.log(response)
                    throw new Error(`${response.status == 401 ? "Unauthorized" : response.status == 403 ? "Forbidden" : "Oops"}`);
                }
                setBuildsList(data);
            } catch (error) {
                setFetchError(error)
            }
        }
        getBuilds();

        return () => {
            setFetchError(null);
        };
    }, []);

    const handleEdit = async (buildId) => {
        navigate(`/builds/${buildId}/edit`)
    }

    const handleDelete = async (buildId) => {
        try {
            if (
                window.confirm("Are you sure you want to delete this build? This cannot be undone.")
            ) {
                await deleteBuild(buildId);
                window.location.reload();
            }
        } catch (error) {
            setFetchError(error)
        }
    }

    return (
        <>
            {
                fetchError && (
                    <ErrorAlert error={fetchError}/>
                )
            }

            <main className="builds-list">
                <div className="build-header">
                    <h2>Currently Approved ZVZ Builds</h2>
                </div>
                <div className="build-container">
                    {
                        buildsList?.map((build, id) => (

                            <div className="build" key={build.buildId}>
                                <ul className="build-ul">
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
                                    {
                                        isAdmin && (
                                            <div className="editButtons">
                                                <button className="edit-build-button btn"
                                                        onClick={() => handleEdit(build.buildId)}>Edit
                                                </button>
                                                <button className="delete-build-button btn"
                                                        onClick={() => handleDelete(build.buildId)}>Delete
                                                </button>
                                            </div>

                                        )
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>


            </main>
        </>
    )

}