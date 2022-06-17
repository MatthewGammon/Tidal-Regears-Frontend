import './App.css';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Nav from '../src/components/layout/Nav';
import Home from '../src/components/layout/Home';
import CreateBuild from '../src/components/builds/CreateBuild';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Nav/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/createBuild" element={<CreateBuild/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
