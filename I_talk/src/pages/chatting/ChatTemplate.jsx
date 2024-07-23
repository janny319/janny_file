import React, { useState } from 'react';
import Tab from '@/components/Tab';
import PopUp from '@/components/PopUp';
import TemplateApply from '@/pages/chatting/TemplateApply';
import imgTBD from '@/assets/img/img_tbd.png';

function ChatTemplate() {
    // DropDown 메뉴
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('상담내용');
    const options = ['전체', '템플릿관리1', '템플릿관리2', '템플릿관리3'];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // 검색 inputbox
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

    // tab List
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const tabTemplate = [
        { title: '공유 템플릿' },
        { title: '개인 템플릿' }
    ].map((tab, index) => ({ ...tab, index }));

    const templateList = [
        {
            state: '즐겨찾기',
            title: '분류그룹명 일이삼사오육칠팔구십 일이삼사오육칠팔구십 일이삼사오육칠팔구십',
            cont: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
        },
        {
            state: '',
            title: '분류그룹명.',
            cont: '안녕하세요, 이디야 스파이 고객님~! 희망을 전하는 상담사 김상담입니다. 방가방가 가입해 주셔서 너무 감사합니다~^_^ 스타벅스 아메리카노 기프티콘은 잘 받으셨나요? 수신 확인하셨다면 상담사 김희망에게 별점 만점 부탁드려요~^^',
        },
        {
            state: '',
            title: '분류그룹명',
            cont: '안녕하세요, 고객님! 희망을 전하는 상담사 김상담입니다 ^^ 무엇을 도와드릴까요?',
        },
        {
            state: '',
            title: '분류그룹명 일이삼사오육칠팔구십 일이삼사오육칠팔구십 일이삼사오육칠팔구십',
            cont: '안녕하세요, 고객님! 상품의 환불을 요청하셨군요. 환불 완료 전, 본인 확인을 위해 몇 가지 개인 정보 확인 요청 드립니다.',
        },
        {
            state: '즐겨찾기',
            title: '분류그룹명 일이삼사오육칠팔구십 일이삼사오육칠팔구십 일이삼사오육칠팔구십',
            cont: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
        },
        {
            state: '',
            title: '분류그룹명.',
            cont: '안녕하세요, 이디야 스파이 고객님~! 희망을 전하는 상담사 김상담입니다. 방가방가 가입해 주셔서 너무 감사합니다~^_^ 스타벅스 아메리카노 기프티콘은 잘 받으셨나요? 수신 확인하셨다면 상담사 김희망에게 별점 만점 부탁드려요~^^',
        },
        {
            state: '',
            title: '분류그룹명',
            cont: '안녕하세요, 고객님! 희망을 전하는 상담사 김상담입니다 ^^ 무엇을 도와드릴까요?',
        },
        {
            state: '',
            title: '분류그룹명 일이삼사오육칠팔구십 일이삼사오육칠팔구십 일이삼사오육칠팔구십',
            cont: '안녕하세요, 고객님! 상품의 환불을 요청하셨군요. 환불 완료 전, 본인 확인을 위해 몇 가지 개인 정보 확인 요청 드립니다.',
        },
    ];

    // 템플릿 만들기 팝업
    const [templateApply, setTemplateApply] = useState(false);
    const templateApplyOpen = () => {
        setTemplateApply(true);
    };
    const closePopup = () => {
        setTemplateApply(false);
    };

    // 아코디언 상태 관리
    const [expandedTemplate, setExpandedTemplate] = useState(null);
    const toggleAccordion = (index) => {
        setExpandedTemplate(expandedTemplate === index ? null : index);
    };

    return (
        <div className="chat-template">
            <div className="top-wrap">
                <h4>고객정보</h4>
                <button className="btn small ico right" onClick={templateApplyOpen}>
                    개인 템플릿 등록
                </button>
            </div>
            {templateApply && (
                <PopUp title={'개인 템플릿 등록'} closePopup={closePopup}>
                    <TemplateApply closePopup={closePopup} />
                </PopUp>
            )}
            <Tab
                tabTitles={tabTemplate}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
                className={'common entire'}
            />
            {activeTab === 0 && (
                <div className="common-template">
                    <div className="form-wrap">
                        <div className="search">
                            <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                                <button className="nomal" onClick={toggleDropdown}>
                                    {selectedOption}
                                </button>
                                {/* 2024.06.10 위치 drop-down 태그 안으로 수정 */}
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
                    <ul className="template-list">
                        {templateList.map((item, index) => (
                            <li
                                key={index}
                                className={`template-item ${expandedTemplate === index ? 'open' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <button className="send">전송</button>
                                <div className="tit-box">
                                    <button className={`favorit ${item.state === '즐겨찾기' && 'active'}`}></button>
                                    <strong>{item.title}</strong>
                                </div>
                                <div className='template-cont'>
                                    {expandedTemplate === index && (
                                        <>
                                            <span className="img-box">
                                                <img src={imgTBD} alt="예시이미지" />
                                            </span>
                                        </>
                                    )}
                                    <p className="cont">{item.cont}</p>
                                    <div className='template-btn'>
                                        <div className='button'>일이삼사오육칠팔구십일이삼사오육칠팔구십일</div>
                                        <div className='button'>바로가기</div>
                                    </div>
                                </div>
                                <div className='edit-btn'>
                                    <button className='underline-btn'>편집</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {activeTab === 1 && <div></div>}
        </div>
    );
}

export default ChatTemplate;
