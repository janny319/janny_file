import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(5);
    const decreaseCount = () => {
        // 상담 인원 수가 - 가 될수가 없어서 0 default 값
        setCount(count > 0 ? count - 1 : 0);
    };
    const increaseCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="count">
            <button className="minus" onClick={decreaseCount}></button>
            <span className="count-num">{count}</span>
            <button className="plus" onClick={increaseCount}></button>
        </div>
    );
}

export default Count;
