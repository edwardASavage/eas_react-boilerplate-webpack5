import React from "react";
import ImportImage from '../public/images/image.png'
import "./style.scss";

const App = () => {
    return (
        <div className="app">
            <h1>Hello world Two</h1>
            <img src={ImportImage}></img>
        </div>
    );
};

export default App;
