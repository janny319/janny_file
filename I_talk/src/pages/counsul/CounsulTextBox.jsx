import React, { useEffect, useState } from 'react';

function CounsulTextBox({ title, placeholder }) {
    const [text, setText] = useState('');
    const limetedTextarea = (e) => {
        const { value } = e.target;
        if (value.length <= placeholder) {
            setText(value);
        }
    };
    return (
        <div className="txt-box">
            <span className="detail-talk-tit">{title}</span>
            <textarea id="textarea" value={text} onChange={limetedTextarea} placeholder={`최대 ${placeholder}자`} />
        </div>
    );
}

export default CounsulTextBox;
