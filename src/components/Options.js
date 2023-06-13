import '../styles/App.css';
import React from 'react';

class Options extends React.Component {
    render(){
    const optionsArray = this.props.options;
    var visiblity = this.props.visiblity;
    // If any of the options will be clicked the drop down options will be hidden again.
    var handleOptionClick=()=>{
        this.props.changeVisiblity('hidden');
    }

    return (
        // putting inline styling for visibility of all the optons.
        <div className="options" style={{visibility: visiblity}}>
            <div className="op" onClick={handleOptionClick}>{optionsArray[0]}</div>
            <div className="op" onClick={handleOptionClick}>{optionsArray[1]}</div>
            <div className="op" onClick={handleOptionClick}>{optionsArray[2]}</div>
            <div className="op" id="op4" onClick={handleOptionClick}>{optionsArray[3]}</div>
        </div>
    );
    }
}

export default Options;
