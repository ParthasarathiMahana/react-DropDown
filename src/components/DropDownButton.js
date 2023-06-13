import '../styles/App.css';
import React, { useState } from 'react';
import rightArrow from '../rarrow.svg'
import Options from './Options';

function DropDownButton(){
    const optionsArray = ['yes', 'no', 'not sure', 'may be'];
    var [visiblity, setVisiblity] = useState('');

    // on hover over the drop down button all the options will be shown.
    const handleMouseOver=()=>{
        setVisiblity('visible');
    }

    return (
        <div className="container">
            <div className="drop-down-button" onMouseOver={handleMouseOver}>
                <div className="demo-text">Select an Option</div>
                <img className="arrow" src={rightArrow} alt="arrow-image" />
            </div>

            {/* Passing options for drop down, visiblity, and set visiblity to Options component as props */}
            <Options options={optionsArray} visiblity={visiblity} changeVisiblity={setVisiblity}/>
        </div>
    );
    }

export default DropDownButton;
