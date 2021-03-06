import React from 'react';

const NumberDataDisplay = (props) => {
    return ( 
        <div className="NumberDataDisplay">
            <div className="description">{props.children}</div>
            <div className="dataContainer">
                <div className="data">{props.data}</div>
            </div>
        </div>
     );
}
 
export default NumberDataDisplay;