import React, { useState } from 'react';

function ChattingList({ activeTab }) {
    //DropDow 메뉴
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('상담내용');
    const options = ['상담 내용', '이름', '아이디', '전화번호'];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    //검색 inputbox
    const [inputText, setInputText] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
    const clearInput = () => {
        setInputText('');
    };
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    //상담리스트
    const [selectedDL, setSelectedDL] = useState(null);
    const handleDLClick = (id) => {
        setSelectedDL(id === selectedDL ? null : id);
    };
    const dlData = [
        {
            id: '1',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
            state: '고객 종료',
        },
        {
            id: '2',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
            state: '상담사 종료',
        },
        {
            id: '3',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
            state: '차단 종료',
        },
        {
            id: '4',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
            state: '이관 종료',
        },
        {
            id: '5',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
        },
        {
            id: '6',
            name: '고객 1',
            newChactNum: '3',
            content:
                '1:1 <strong>상담</strong>을 문의하였습니다.1:1 <strong>상담</strong>을 문의하였습니다.1:1 <strong>상담</strong>을 문의하였습니다.1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
        },
        {
            id: '7',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
        },
        {
            id: '8',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
        },
        {
            id: '9',
            name: '고객 1',
            newChactNum: '3',
            content: '1:1 <strong>상담</strong>을 문의하였습니다.',
            time: '15:30',
        },
    ];
    const getStateIconClass = (state) => {
        switch (state) {
            case '고객 종료':
                return 'customer';
            case '상담사 종료':
                return 'consultant';
            case '차단 종료':
                return 'block';
            case '이관 종료':
                return 'transfer';
            default:
                return '';
        }
    };

    return (
        <div>
            <div className="form-wrap">
                <div className="search">
                    <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                        <button className="nomal" onClick={toggleDropdown}>
                            {selectedOption}
                        </button>
                        {/* 0503 위치 drop-down 태그 안으로 수정 */}
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
                    <div className={`search-input ${isInputFocused ? 'focused' : ''}`}>
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        {inputText.length > 0 && <button className="btn-clear" onClick={clearInput}></button>}
                        <button className="btn-search"></button>
                    </div>
                </div>
            </div>
            <div className="counsul-list">
                <div className="btn-box">
                    <button className="filter">최근 대화순</button>
                </div>
                <div className="chat-list">
                    {dlData.length > 0 ? (
                        dlData.map((dl) => (
                            <dl
                                key={dl.id}
                                onClick={() => handleDLClick(dl.id)}
                                className={selectedDL === dl.id ? 'active' : ''}
                            >
                                <dt>
                                    <div>
                                        {dl.name}
                                        <em>{dl.newChactNum}</em>
                                    </div>
                                    {activeTab === 4 && (
                                        <i className={`end ${getStateIconClass(dl.state)}`}>{dl.state}</i>
                                    )}
                                </dt>
                                <dd>
                                    <span dangerouslySetInnerHTML={{ __html: dl.content }}></span>
                                    <em>{dl.time}</em>
                                </dd>
                            </dl>
                        ))
                    ) : (
                        <div className="non-date">
                            <p>대기중인 상담이 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChattingList;
