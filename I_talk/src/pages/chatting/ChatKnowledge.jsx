import React, { useState } from 'react';
import Tab from '@/components/Tab';
import PopUp from '@/components/PopUp';
import KnowledgeDetail from "@/pages/chatting/KnowledgeDetail"
import Pagination from '@/components/Pagination';

function ChatKnowledge() {
    //DropDow 메뉴
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('키워드');
    const options = ['키워드1', '키워드2', '키워드3', '키워드4' ];
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
    //tab List
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
        setActiveTab(index);
    };
	const tabTemplate = [
        { title: '전체' },
        { title: '자주찾은지식' }
    ].map((tab, index) => ({ ...tab, index }));

    const data = [
        {
            state: '즐겨찾기',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '즐겨찾기',
            group: '대출',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '장기저축급여',
            division: '신용대출 일이삼사오육',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        },
        {
            state: '',
            group: '신용',
            division: '신용대출',
            tit: '신용 대출 상환은 어떻게 하나요?​',
        }
    ]
    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">리스트가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };

    // 지식 상세보기 팝업
    const [viewDetail, setViewDetail] = useState(false);
    const ViewDetailOpen = () => {
        setViewDetail(true);
    };
    const closePopup = () => {
        setViewDetail(false);
    };

    return(
        <div className="chat-know">
            <Tab
                tabTitles={tabTemplate}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
                className={'common entire'}
            />
            {activeTab === 0 && (
            <div className='know-list'>
                <div className='form-wrap'>
                    <div className='search'>
                        <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                            <button className="nomal" onClick={toggleDropdown}>{selectedOption}</button>
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
                                type='text'
                                value={inputText}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            {inputText.length > 0 && (
                                <button className='btn-clear' onClick={clearInput}></button>
                            )}
                            <button className='btn-search'></button>
                        </div>
                    </div>
                </div>
                <div className="grid-box">
                    <div className="scroll-box" style={{height:"494px"}}>
                        <table className="table-basic">
                            <colgroup>
                                <col width="30px" />
                                <col width="120px" />
                                <col width="110px" />
                                <col width="*" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colSpan={2} className='align-left'>그룹</th>
                                    <th className='align-left'>분류</th>
                                    <th className='align-left'>제목</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} onClick={ViewDetailOpen}>
                                        <td className='ico-favorit'>
                                            <button className={`favorit ${row.state === '즐겨찾기' && 'active'}`}></button>
                                        </td>
                                        <td className='align-left' style={{padding:"0 12px 0 5px"}}>{row.group}</td>
                                        <td className='align-left'>{row.division}</td>
                                        <td className='align-left'>{row.tit}</td>
                                    </tr>
                                ))}
                                {renderRows()}
                            </tbody>
                        </table>
                    </div>
                    {viewDetail && (
                        <PopUp title={'지식 상세보기'} closePopup={closePopup}>
                            <KnowledgeDetail closePopup={closePopup} />
                        </PopUp>
                    )}
                    <div className="paging-wrap">
                        <Pagination />
                    </div>
                </div>
            </div>
            )}
            {activeTab === 1 && (
                <div>2</div>
            )}
        </div>
    )
}

export default ChatKnowledge;