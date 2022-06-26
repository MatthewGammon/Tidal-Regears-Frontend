import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import AuthService from '../../services/auth.service';
import './Register.css';

const Register = () => {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [successful, setSuccessful] = useState(false);
        const [message, setMessage] = useState("");

        const navigate = useNavigate();

        const onChangeUsername = (e) => {
            const username = e.target.value;
            setUsername(username);
        };
        const onChangeEmail = (e) => {
            const email = e.target.value;
            setEmail(email);
        };
        const onChangePassword = (e) => {
            const password = e.target.value;
            setPassword(password);
        };
        const handleRegister = (e) => {
            e.preventDefault();
            setMessage("");
            setSuccessful(false);

            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    navigate("/login");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }


        return (
            <>
                {message && (
                    <div className="form-group">
                        <div
                            className={successful ? "alert alert-success" : "alert alert-danger"}
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
                <div className="register-form-container">
                    <div className="register-header">
                        <h2>Please Register Your Character to Use our Services</h2>
                    </div>
                    <form onSubmit={handleRegister}>
                        {!successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        required
                                        minLength={8}
                                        maxLength={30}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        minLength={7}
                                        maxLength={30}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        minLength={10}
                                        maxLength={30}
                                        required
                                    />
                                </div>

                                <button className="register-button btn btn-primary btn-block">Sign Up</button>
                            </div>
                        )}
                    </form>
                </div>


            </>
        );
    }
;
export default Register;
