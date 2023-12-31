import React from 'react';
import './App.css';
import {DigitalClock} from "./Components/digitalClock/DigitalClock";
import {AnalogClock} from "./Components/analogClock/AnalogClock";


function App() {
    return (
        <div className="App">
            <DigitalClock/>
            {/*<AnalogClock/>*/}
        </div>
    );
}

export default App;
