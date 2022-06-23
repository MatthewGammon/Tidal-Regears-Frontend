import './App.css';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Nav from '../src/components/layout/nav/Nav';
import Home from '../src/components/layout/home/Home';
import CreateBuild from '../src/components/builds/createABuild/CreateABuild';
import ListBuilds from '../src/components/builds/listBuilds/ListBuilds';
import Regears from '../src/components/regears/Regears';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Nav/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/createBuild" element={<CreateBuild/>}/>
                    <Route path="/builds" element={<ListBuilds/>}/>
                    <Route path="/regears" element={<Regears/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
