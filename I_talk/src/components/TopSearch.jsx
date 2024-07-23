import React, { useState, useRef, useEffect } from 'react';
import '@/style/topSearch.scss';
import Calendar from './Calendar';
import TopSelect from './TopSelect';

function TopSearch({ tit }) {
    // const toggleMenu = (index) => {
    //     setIsOpen((prevState) => {
    //         const newState = [...prevState];
    //         newState[index] = !newState[index];
    //         return newState;
    //     });

    //     setIsDropdownActive((prevState) => {
    //         const newState = [...prevState];
    //         newState[index] = !newState[index];
    //         return newState;
    //     });
    // };

    // const handleSelectItem = (index, item) => {
    //     setSelectedItem((prevState) => {
    //         const newState = [...prevState];
    //         newState[index] = item;
    //         return newState;
    //     });
    //     toggleMenu(index);
    // };

    // 2024.05.08 추가
    const [isInputFocused, setIsInputFocused] = useState(false);
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    // 2024.07.22 input 닫기버튼 추가
    const [text, setText] = useState('');
    const searchValue = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const clearText = () => {
        setText('');
    };

    return (
        <>
            {/* <Calendar /> */}
            {/* 2024.05.08 수정 */}
            {/* 드롭다운 메뉴들을 반복하여 생성 */}
            {/* {[0, 1, 2, 3].map((index) => (
                <div
                    className={`drop-down ${isDropdownActive[index] ? 'on' : ''}`}
                    key={index}
                    ref={dropdownRefs.current[index]}
                >
                    <button className="big" onClick={() => toggleMenu(index)}>
                        <sub className="tit">{dropdownButtonContents[index].title}</sub>
                        <span className="cont">{selectedItem[index] || dropdownButtonContents[index].option}</span>
                    </button>
                    {isOpen[index] && (
                        <ul className="list">
                            {dropdownContents[index].map((item, subIndex) => (
                                <li key={subIndex} onClick={() => handleSelectItem(index, item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))} */}
            {/* <TopSelect
                dropdownRefs={dropdownRefs}
                dropdownButtonContents={dropdownButtonContents}
                dropdownContents={dropdownContents}
                isOpen={isOpen}
                isDropdownActive={isDropdownActive}
                setIsDropdownActive={setIsDropdownActive}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                setIsOpen={setIsOpen}
            /> */}
            <div className={`border-box search-input ${isInputFocused ? 'active' : ''}`}>
                {/* 2024.06.07 tit 수정 */}
                <sub className="tit">{tit || '시작일'}</sub>
                {/* 2024.07.22 닫기버튼 value,  onChange 값 추가 */}
                <input
                    type="text"
                    value={text}
                    onChange={searchValue}
                    placeholder="검색어를 입력하세요."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                {/* 2024.07.22 닫기버튼 추가 */}
                {text && <button className="close-btn" onClick={clearText}></button>}
            </div>
            <i className="ico-bar"></i>
            <button className="btn bg black">조회</button>
        </>
    );
}

export default TopSearch;
