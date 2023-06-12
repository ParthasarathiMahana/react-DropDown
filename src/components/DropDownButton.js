import '../styles/App.css';
import React, { useState } from 'react';
import rightArrow from '../rarrow.svg'
import Options from './Options';

function DropDownButton(){
    const optionsArray = ['yes', 'no', 'not sure', 'may be'];
    var [visiblity, setVisiblity] = useState('');

    const handleMouseOver=()=>{
        setVisiblity('visible');
    }

    return (
        <div className="container">
            <div className="drop-down-button" onMouseOver={handleMouseOver}>
                <div className="demo-text">Select an Option</div>
                <img className="arrow" src={rightArrow} alt="arrow-image" />
            </div>

            <Options options={optionsArray} visiblity={visiblity} changeVisiblity={setVisiblity}/>
        </div>
    );
    }

export default DropDownButton;
