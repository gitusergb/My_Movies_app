import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MoviePage from './components/MoviePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App" id="container">
            {/* <div id="nav">
                if we want to add navbar code 
            </div> */}
            <div id="main">
            <h1>MOVIES</h1>
           
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </div>
              
            </div>
        </Router>
    );
}

export default App;