import React, { useRef, useState } from 'react';
import TopSelect from '@/components/TopSelect';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import { Link } from 'react-router-dom';
import Tab from '@/components/Tab';

function Condition() {
    const title = ['운영관리', '센터운영 설정', '상담조건/안내메시지'];
    const subTitle = title[title.length - 1];
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);

    const [value, setValue] = useState('');
    const [state, setState] = useState(true);
    const [validationError, setValidationError] = useState(false); // 저장버튼 누를 경우 메신저 나오게 하는 조건문
    const [activebtn, setActiveBtn] = useState(0);
    const [guideTitle, setGuideTitle] = useState('최대 대기수 설정 / 상담 불가 안내');
    const [placeholder, setPlaceholder] = useState('');
    const [txtError, setTxtError] = useState(true);

    // btn title
    const btnTitle = [
        {
            title: '최대 대기수 설정 / 상담 불가 안내',
            placeholder: '고객님 죄송합니다. 현재 이용고객이 많아 상담이 어렵습니다. 잠시 후 다시 요청해 주세요.',
            disabledTxt: '차단 사유를 입력하세요',
        },
        {
            title: '운영시간 안내(운영시간 종료 및 휴일)',
            placeholder: '고객님 죄송합니다. 현재 이용고객이 많아 상담이 어렵습니다. 잠시 후 다시 요청해 주세요.',
        },
        {
            title: '식사시간 안내',
            placeholder: '고객님 죄송합니다. 현재 이용고객이 많아 상담이 어렵습니다. 잠시 후 다시 요청해 주세요.',
        },
        {
            title: '상담 대기 안내',
            placeholder: '고객님 죄송합니다. 현재 이용고객이 많아 상담이 어렵습니다. 잠시 후 다시 요청해 주세요.',
        },
        {
            title: '상담 지연 안내',
            placeholder: '고객님 죄송합니다. 현재 이용고객이 많아 상담이 어렵습니다. 잠시 후 다시 요청해 주세요.',
            disabledTxt: '안내 메시지가 발송되지 않습니다.',
        },
        {
            title: '대기 중 고객의 메시지 전송 가능 여부',
        },
        {
            title: '고객 무응답 자동종료 설정',
        },
        {
            title: '자동종료 예정 알림',
        },
        {
            title: '상담 종료 안내',
        },
    ];
    const renderInfoTextbox = () => {
        if (activebtn < 4) {
            return (
                <div className="info-textbox">
                    <span>최대 대기 수</span>
                    <div className="textbox-unit">
                        <input disabled={state} type="text" placeholder="" />
                        <span className="input-unit">건</span>
                    </div>
                </div>
            );
        } else if (activebtn === 5) {
            return null;
        } else if (activebtn === 6) {
            return (
                <div className="info-textbox">
                    <span>자동종료 설정</span>
                    <div className="textbox-unit end">
                        <input disabled={state} type="text" />
                        <span className="input-unit">
                            <span>분</span>경과 시 종료
                        </span>
                    </div>
                </div>
            );
        } else if (activebtn === 7) {
            return (
                <div className="info-textbox">
                    <span>자동종료 예정 알림</span>
                    <div className="textbox-unit mideum">
                        <span>종료</span>
                        <input disabled={state} type="text" />
                        <span className="input-unit">
                            <span>분</span>전
                        </span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="info-textbox">
                    <span>상담 지연 안내</span>
                    <div className="textbox-unit long">
                        <input disabled={state} type="text" placeholder="" />
                        <span className="input-unit">
                            <span>분</span>경과 시
                        </span>
                    </div>
                </div>
            );
        }
    };

    const onChangeValue = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 200) {
            setValue(inputValue);
            setTxtError(true);
        } else {
            setTxtError(false);
        }
    };

    const toggleButton = () => {
        setState(!state);
    };

    const saveBtn = () => {
        setValidationError(!validationError);
    };
    const tabCounsulState = [
        { title: '전체' },
        { title: '상담 불가' },
        { title: '상담 대기' },
        { title: '상담 시작/종료' },
    ].map((tab, index) => ({ ...tab, index }));

    //상담현황 tab관련
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const buttonClick = (index) => {
        if (index === activebtn) {
            setActiveBtn(null);
        } else {
            setActiveBtn(index);
        }
        setGuideTitle(btnTitle[index].title);
        if (state) {
            setPlaceholder(btnTitle[index].placeholder);
        } else {
            setPlaceholder(btnTitle[index].disabledTxt);
        }
    };

    const radioBtn = () => {
        setState(false);
    };

    const disAbledRadioBtn = () => {
        setState(true);
    };

    return (
        <div className="content category">
            <div className="page-tit">
                <h3>
                    센터운영 설정 <span className="sub-tit">{subTitle}</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    {title.map((element, index) => (
                        <em key={index}>{element}</em>
                    ))}
                </span>
            </div>
            <div className="search-wrap">
                <TopSelect
                    dropdownRefs={dropdownRefs}
                    dropdownButtonContents={dropdownButtonContents}
                    dropdownContents={dropdownContents}
                    isOpen={isOpen}
                    isDropdownActive={isDropdownActive}
                    setIsDropdownActive={setIsDropdownActive}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setIsOpen={setIsOpen}
                />
                <div className="tap-wrap">
                    {/* 2024.05.23 링크연결 */}
                    <ul className="tab-btn-wrap">
                        <li>
                            <Link to="/CategotyManage" className="tab-btn">
                                <span>카테고리 관리</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/TimeSetting" className="tab-btn">
                                <span>운영시간</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Condition" className="tab-btn active">
                                <span>상담조건/안내메시지</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Allocation" className="tab-btn">
                                <span>상담 배분</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/AdvancedSetting" className="tab-btn">
                                <span>고급 설정</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont-box">
                <div className="mes-wrap">
                    <div className="mes-tit">
                        {/* // 240529 클래스 수정 */}
                        <h4>상담조건 설정</h4>
                        <Tab tabTitles={tabCounsulState} handleTabClick={handleTabClick} activeTab={activeTab} />
                    </div>
                    <div className="tab-cont row">
                        {activeTab === 0 && (
                            <>
                                <div className="option-wrap">
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 0 ? 'active' : ''}`}
                                        onClick={() => buttonClick(0)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[0].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                            <div className="radio-btn" onClick={disAbledRadioBtn}>
                                                <label htmlFor="radio1">
                                                    <input id="radio1" type="radio" name="division" />
                                                    대기 불가
                                                </label>
                                            </div>
                                            <div className="radio-btn" onClick={radioBtn}>
                                                <label htmlFor="radio2">
                                                    <input id="radio2" type="radio" name="division" />
                                                    최대 대기수 입력
                                                </label>
                                            </div>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>대기 불가 :</dt>
                                            <dd>대기가 불가하며, 안내 메시지가 즉시 발송됩니다.</dd>
                                        </dl>
                                        <dl className="condition-info">
                                            <dt>최대 대기수 입력 :</dt>
                                            <dd>입력값 초과 시, 상담 불가 메시지가 발송됩니다.</dd>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 1 ? 'active' : ''}`}
                                        onClick={() => buttonClick(1)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[1].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>운영시간 외 상담 시도 시, 안내 메시지가 발송됩니다.</dt>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 2 ? 'active' : ''}`}
                                        onClick={() => buttonClick(2)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[2].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>식사시간에 상담 시도 시, 안내 메시지가 발송됩니다.</dt>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 3 ? 'active' : ''}`}
                                        onClick={() => buttonClick(3)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[3].title}
                                                <i className="badge red small">필수</i>
                                                <i className="badge green small">인사말</i>
                                            </h4>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>상담을 요청하여 대기 시작 시, 안내 메시지가 발송됩니다.</dt>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 4 ? 'active' : ''}`}
                                        onClick={() => buttonClick(4)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[4].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                            <div className="toggle-btn">
                                                <label htmlFor="category-toggle-4" className="toggle-switch">
                                                    <input
                                                        onClick={toggleButton}
                                                        type="checkbox"
                                                        id="category-toggle-4"
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>OFF :</dt>
                                            <dd>상담이 지연되어도 안내 메시지가 발송되지 않습니다.</dd>
                                        </dl>
                                        <dl className="condition-info">
                                            <dt>ON :</dt>
                                            <dd>고객 대기가 입력시간 초과 시, 상담 지연 메시지가 발송됩니다.</dd>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 5 ? 'active' : ''}`}
                                        onClick={() => buttonClick(5)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[5].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                            <div className="toggle-btn">
                                                <label htmlFor="category-toggle-5" className="toggle-switch">
                                                    <input
                                                        onClick={toggleButton}
                                                        type="checkbox"
                                                        id="category-toggle-5"
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>OFF :</dt>
                                            <dd>대기 중인 고객의 메시지 전송이 불가능합니다.</dd>
                                        </dl>
                                        <dl className="condition-info">
                                            <dt>ON :</dt>
                                            <dd>대기 중인 고객의 메시지 전송이 가능합니다.</dd>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 6 ? 'active' : ''}`}
                                        onClick={() => buttonClick(6)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[6].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                            <div className="toggle-btn">
                                                <label htmlFor="category-toggle-6" className="toggle-switch">
                                                    <input
                                                        onClick={toggleButton}
                                                        type="checkbox"
                                                        id="category-toggle-6"
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>OFF :</dt>
                                            <dd>고객이 응답하지 않아도 상담이 자동종료되지 않습니다.</dd>
                                        </dl>
                                        <dl className="condition-info">
                                            <dt>ON :</dt>
                                            <dd>입력시간 동안 고객 무응답 시, 자동종료 되며 메시지가 발송됩니다.</dd>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 7 ? 'active' : ''}`}
                                        onClick={() => buttonClick(7)}
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[7].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                            <div className="toggle-btn">
                                                <label htmlFor="category-toggle-7" className="toggle-switch">
                                                    <input
                                                        onClick={toggleButton}
                                                        type="checkbox"
                                                        id="category-toggle-7"
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>OFF :</dt>
                                            <dd>자동종료 전 알림 메시지가 발송되지 않습니다.</dd>
                                        </dl>
                                        <dl className="condition-info">
                                            <dt>ON :</dt>
                                            <dd>자동종료 전, 알림 메시지가 발송됩니다.</dd>
                                        </dl>
                                    </button>
                                    <button
                                        type="button"
                                        className={`option-btn ${activebtn === 8 ? 'active' : ''}`}
                                        onClick={() => buttonClick(8)}
                                        disabled
                                    >
                                        <div className="condition-tit">
                                            <h4>
                                                {btnTitle[8].title}
                                                <i className="badge red small">필수</i>
                                            </h4>
                                        </div>
                                        <dl className="condition-info">
                                            <dt>상담 종료 후, 안내 메시지가 발송됩니다.</dt>
                                        </dl>
                                    </button>
                                </div>
                                <div className="guide-mes">
                                    <div className="tit">
                                        <strong>
                                            {guideTitle}
                                            <i className="badge red small">필수</i>
                                            {activebtn === 3 && <i className="badge green small">인사말</i>}
                                        </strong>
                                        <div className="btn-list underline right">
                                            <button type="button" className="underline-btn">
                                                초기화
                                            </button>
                                        </div>
                                    </div>
                                    <div className="guide-txt">
                                        <textarea
                                            className={txtError ? '' : 'error'}
                                            disabled={state}
                                            value={value}
                                            onChange={onChangeValue}
                                            placeholder={placeholder}
                                        />
                                        {!txtError && <span className="area-err">최대 200자 입력 가능합니다.</span>}
                                        <span>
                                            {value.length}
                                            <span className="limit">/ 200</span>
                                        </span>
                                        {renderInfoTextbox()}
                                    </div>
                                    <div className="btn-list right">
                                        {validationError && (
                                            <div className="validation-error">
                                                {/* 240604 p 태그 추가 */}
                                                <p>자동종료 예정 알림 시간보다 짧은 시간을 입력할 수 없습니다.</p>
                                            </div>
                                        )}

                                        <button className="btn bg black big" onClick={saveBtn}>
                                            저장
                                        </button>
                                    </div>
                                    {activebtn === 5 && (
                                        <p className="no-data">
                                            <i className="no-team"></i>대기하는 고객의 메시지 전송이 가능합니다.
                                        </p>
                                    )}
                                </div>
                            </>
                        )}
                        {activeTab === 1 && <div>내용2</div>}
                        {activeTab === 2 && <div>내용3</div>}
                        {activeTab === 3 && <div>내용4</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Condition;
