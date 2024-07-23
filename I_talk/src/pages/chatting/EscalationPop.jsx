import React, { useState } from 'react';

function EscalationPop({ closePopup }) {
    //DropDow 메뉴
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('카테고리를 선택하세요.');
    const options = ['카테고리1', '카테고리2', '카테고리3', '카테고리4'];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    //DropDow 메뉴
    const [isOpenMem, setIsOpenMem] = useState(false);
    const [openMem, setOpenMem] = useState('상담사를 선택하세요.');
    const optionsMem = ['상담사1', '상담사2', '상담사3', '상담사4'];
    const toggleOpenMem = () => {
        setIsOpenMem(!isOpenMem);
    };
    const handleOptionsMem = (option) => {
        setOpenMem(option);
        setIsOpenMem(false);
    };

    return (
        <div>
            <div className="pop-content">
                <div className="input-box column">
                    <span>카테고리</span>
                    <div className="pop-drop-down">
                        <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                            <button onClick={toggleDropdown}>{selectedOption}</button>
                        </div>
                        {isOpen && (
                            <ul className="list">
                                {options.map((option, index) => (
                                    <li key={index} onClick={() => handleOptionClick(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="input-box column">
                    <span>상담사</span>
                    <div className="pop-drop-down">
                        <div className={`drop-down ${isOpenMem ? 'on' : ''}`}>
                            <button onClick={toggleOpenMem}>{openMem}</button>
                        </div>
                        {isOpenMem && (
                            <ul className="list">
                                {optionsMem.map((option, index) => (
                                    <li key={index} onClick={() => handleOptionsMem(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="input-box column">
                    <span>이관사유</span>
                    <textarea placeholder="내용을 입력하세요." />
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>
                    취소
                </button>
                <button type="button" className="btn bg black">
                    등록
                </button>
            </div>
        </div>
    );
}

export default EscalationPop;
