import React from 'react';

function RadioBox(props) {
    return (
        <div className="radio-btn">
            <input id="using" type="radio" name="state"></input>
            <label for="using">비활성 </label>
        </div>
    );
}

export default RadioBox;
