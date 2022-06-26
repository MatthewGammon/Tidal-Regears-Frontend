import React, {useState, useEffect} from 'react';
import {baseUrl, updateStatus} from '../../services/regearsService';
import UserService from '../../services/user.service';
import authHeader from '../../services/auth-header';
import AuthService from '../../services/auth.service';
import ErrorAlert from '../../errors/ErrorAlert';
import './Regears.css';
import RegearsTable from './RegearsTable';

const currentUser = AuthService.getCurrentUser();
const isAdmin = currentUser?.roles.includes("ROLE_ADMIN");

export default function Regears() {
    const [regears, setRegears] = useState(null);
    const [fetchError, setFetchError] = useState(null);


    useEffect(() => {
        const getRegears = async () => {
            const url = `${baseUrl}/regears`;
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
                setRegears(data);
            } catch (error) {
                setFetchError(error)
            }
        }
        getRegears();

        return () => {
            setFetchError(null);
        };
    }, []);


    
    return (
            <main className="regears-list">
                {
                    fetchError && (
                        <ErrorAlert error={fetchError}/>
                    )
                }

                <div className="regears-header">
                    <h2>Current Pending Regears</h2>
                </div>

                <RegearsTable regearData={regears}/>
            </main>

    )
}