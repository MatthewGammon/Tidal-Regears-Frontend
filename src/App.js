import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Nav from '../src/components/layout/nav/Nav';
import Home from '../src/components/layout/home/Home';
import CreateBuild from '../src/components/builds/createABuild/CreateABuild';
import ListBuilds from '../src/components/builds/listBuilds/ListBuilds';
import Regears from '../src/components/regears/Regears';
import Requirements from '../src/components/requirements/Requirements';
import NotFound from '../src/errors/NotFound';
import Login from '../src/components/login/Login';
import Register from '../src/components/register/Register';
import Header from '../src/components/layout/Header.js';
import ProtectedRoute from "./components/ProtectedRoute";
import AuthService from "./services/auth.service";

function App() {
    const currentUser = AuthService.getCurrentUser();
    const isAdmin = currentUser?.roles.includes("ROLE_ADMIN");
    const isAdminOrUser = currentUser;

    return (
        <BrowserRouter>
            <div className="app">
                <Nav/>
                <Header/>

                <Routes>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/requirements" element={<Requirements/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route path="/regears" element={<ProtectedRoute user={isAdminOrUser}>
                        <Regears/>
                    </ProtectedRoute>
                    }
                    />
                    <Route path="/builds" element={<ProtectedRoute user={isAdminOrUser}>
                        <ListBuilds/>
                    </ProtectedRoute>
                    }
                    />
                    <Route path="/builds/new" element={<ProtectedRoute user={isAdmin}>
                        <CreateBuild/>
                    </ProtectedRoute>
                    }
                    />
                    <Route path="/builds/:buildId/edit" element={<ProtectedRoute user={isAdmin}>
                        <CreateBuild/>
                    </ProtectedRoute>
                    }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
