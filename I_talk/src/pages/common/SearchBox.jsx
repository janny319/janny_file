import React, { useState } from 'react';
import '@/style/searchbox.scss';

function SearchBox() {
    const [text, setText] = useState('');

    const searchValue = (e) => {
        const { value } = e.target;

        // 검색 조건은 20자
        if (value.length <= 20) {
            setText(value);
        }
    };

    const clearText = () => {
        // 텍스트 내용 삭제시 동작
        setText('');
    };

    const submitClick = () => {
        // 검색 버튼 누를 경우 발생함
    };
    return (
        <div className="search-box">
            <input type="text" placeholder="검색어를 입력하세요" value={text} onChange={searchValue} />
            {text && <button className="close-btn" onClick={clearText}></button>}
            <button className="submit-btn" type="submit" onClick={submitClick}></button>
        </div>
    );
}

export default SearchBox;
