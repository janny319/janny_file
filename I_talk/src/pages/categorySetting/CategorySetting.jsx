import React, { useRef, useState } from 'react';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import TopSelect from '@/components/TopSelect';
import Tab from '@/components/Tab';
import PopUp from '@/components/PopUp';
import MealTimePop from '@/pages/centerSetting/operating/MealTimePop';
import OperlTimePop from '@/pages/centerSetting/operating/OperlTimePop';
import SelectBox from '@/components/SelectBox';
import DateCalendar from '@/components/calendar/DateCalendar';
import Category from '@/components/Category';

function CategorySetting() {
    const title = ['운영관리', '카테고리 설정'];
    const subTitle = title[title.length - 1];
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const [nameEdit, setNameEdit] = useState(false);
    const [value, setValue] = useState('');
    const [state, setState] = useState(true);
    const [radioState, setRadioState] = useState(true);
    const [nameEditIndex, setNameEditIndex] = useState(null);
    const [guideTitle, setGuideTitle] = useState('카테고리 최대 대기수 설정 / 상담 불가 안내');
    const [activebtn, setActiveBtn] = useState(0);
    const handleNameEdit = (index) => {
        setNameEditIndex(nameEditIndex === index ? null : index);
        setNameEdit((prevState) => !prevState);
    };
    const [isMealTimePop, setMealTimePop] = useState(false);
    const handleMealTimePop = () => {
        setMealTimePop(true);
    };
    const [isOperlTimePop, setOperlTimePop] = useState(false);
    const handleOperlTimePop = () => {
        setOperlTimePop(true);
    };
    const closePopup = () => {
        setMealTimePop(false);
        setOperlTimePop(false);
    };

    const toggleButton = () => {
        setState(!state);
    };

    const tabCounsulState = [{ title: '운영시간' }, { title: '상담조건/안내메시지' }, { title: '상담 배분' }].map(
        (tab, index) => ({
            ...tab,
            index,
        })
    );
    const btnTitle = [{ title: '최대 대기수 설정 / 상담 불가 안내' }, { title: '상담 대기 안내' }];

    const data = [
        {
            division: '요일별',
            day: '월,화,수,목,금',
            startTime: '09:00',
            endTime: '18:00',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            division: '요일별',
            day: '월,화,수,목,금',
            startTime: '09:00',
            endTime: '18:00',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            division: '휴일',
            day: '휴일',
            startTime: '09:00',
            endTime: '18:00',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            division: '요일별',
            day: '월,화,수,목,금',
            startTime: '09:00',
            endTime: '18:00',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            division: '요일별',
            day: '월,화,수,목,금',
            startTime: '09:00',
            endTime: '18:00',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
    ];

    const data2 = [
        {
            period: '2024-04-10',
            division: '대한민국 공휴일',
            name: '선거',
            input: <input type="text" />,
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            period: '2024-05-01',
            division: '사용자 등록 휴일',
            name: '이름 길어지면 말줄임 말줄임 말줄임 말줄임 말줄임',
            input: '',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            period: '2024-09-16 ~ 2024-09-18',
            division: '대한민국 공휴일',
            name: '추석',
            input: '',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
        {
            period: '2024-09-16 ~ 2024-09-18',
            division: '대한민국 공휴일',
            name: '추석',
            input: '',
            btnModify: <button className="btn line tiny gray">수정</button>,
            btnDelete: <button className="btn line tiny gray">삭제</button>,
        },
    ];
    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">주고받은 이미지가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };
    const render2Rows = () => {
        if (data2.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">주고받은 이미지가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };

    const renderTime = () => {
        return (
            <div className="no-info">
                <p>
                    센터와 동일한 시간으로 운영중 입니다.
                    <br />
                    운영시간 설정을 변경하여 카테고리 전용 운영 시간을 설정할 수 있습니다.
                </p>
            </div>
        );
    };

    const buttonClick = (index) => {
        setActiveBtn(index);
        setGuideTitle(btnTitle[index].title);
    };
    const radioBtn = () => {
        setState(false);
        setRadioState(false);
    };

    const disAbledRadioBtn = () => {
        setState(true);
        setRadioState(true);
    };

    const waitBtn = () => {
        setState(false);
        setRadioState(true);
    };

    const onChangeValue = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 200) {
            setValue(inputValue);
        } else {
        }
    };

    //tab관련
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="content category">
            <div className="page-tit">
                <h3>{subTitle}</h3>
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
                <div className="top-odd">
                    <dl>
                        <dt>센터</dt>
                        <dd>전체</dd>
                    </dl>
                    <dl>
                        <dt>기준 시간</dt>
                        <dd>2024-02-20 12:31:24</dd>
                    </dl>
                    <dl>
                        <dt>자동 새로고침</dt>
                        <dd>2024-02-20 12:31:24</dd>
                    </dl>
                </div>
            </div>
            <div className="cont-box">
                <Category />
                <div className="detail-category">
                    <div className="tab-wrap">
                        <div className="tab-tit-wrap">
                            {/* 240604 class tab-tit-wrap 수정 */}
                            <Tab tabTitles={tabCounsulState} handleTabClick={handleTabClick} activeTab={activeTab} />
                        </div>
                        <div className="tab-cont">
                            {activeTab === 0 && (
                                <>
                                    <div className="category-time">
                                        <div className="info-textbox">
                                            <span>운영시간 설정</span>
                                            <div className="radio-btn">
                                                <label htmlFor="category1">
                                                    <input id="category1" type="radio" name="category"></input>
                                                    센터설정과 동일
                                                </label>
                                            </div>
                                            <div className="radio-btn">
                                                <label htmlFor="category2">
                                                    <input id="category2" type="radio" name="category"></input>
                                                    카테고리 전용 운영시간 설정
                                                </label>
                                            </div>
                                        </div>
                                        <button type="button" className="underline-btn">
                                            센터 운영 시간 확인
                                        </button>
                                    </div>
                                    <div className="category-all">
                                        <div className="calendar-area">
                                            <div className="top-odd">
                                                <strong>일정 달력</strong>
                                                <p>
                                                    <em>휴일</em>을 등록하거나 편집하려면 해당 날짜를 클릭하세요.
                                                </p>
                                            </div>
                                            <div className="calendar">
                                                <DateCalendar />
                                            </div>
                                            <div className="bot-odd">
                                                <div className="time">
                                                    <strong>식사 시간</strong>
                                                    <div className="time-picker">13:00~14:00</div>
                                                </div>
                                                <button className="btn line black small" onClick={handleMealTimePop}>
                                                    식사시간 설정
                                                </button>
                                                {isMealTimePop && (
                                                    <PopUp
                                                        title={'식사시간 설정'}
                                                        alertClassName={'size-popup'}
                                                        closePopup={closePopup}
                                                    >
                                                        <MealTimePop
                                                            closePopup={closePopup}
                                                            setMealTimePop={isMealTimePop}
                                                        />
                                                    </PopUp>
                                                )}
                                            </div>
                                        </div>
                                        <div className="set-list">
                                            <div className="list-wrap">
                                                <div className="tit-area">
                                                    <h4>운영시간</h4>
                                                    <button
                                                        className="btn line small black"
                                                        onClick={handleOperlTimePop}
                                                    >
                                                        시간 추가
                                                    </button>
                                                    {isOperlTimePop && (
                                                        <PopUp
                                                            title={'운영시간 추가'}
                                                            alertClassName={'size-popup'}
                                                            closePopup={closePopup}
                                                        >
                                                            <OperlTimePop
                                                                closePopup={closePopup}
                                                                setOperlTimePop={isOperlTimePop}
                                                            />
                                                        </PopUp>
                                                    )}
                                                </div>
                                                <div className="grid-box">
                                                    <div className="scroll-box" style={{ height: '240px' }}>
                                                        <table className="table-basic">
                                                            <colgroup>
                                                                <col width="25%" />
                                                                <col width="25%" />
                                                                <col width="25%" />
                                                                <col width="25%" />
                                                                <col width="148px" />
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th>구분</th>
                                                                    <th>요일</th>
                                                                    <th>시작시간</th>
                                                                    <th>종료시간</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data.map((row, index) => (
                                                                    <tr key={index}>
                                                                        <td
                                                                            className={
                                                                                row.division === '휴일' && 'holiday'
                                                                            }
                                                                        >
                                                                            {row.division}
                                                                        </td>
                                                                        <td className={row.day === '휴일' && 'holiday'}>
                                                                            {row.day}
                                                                        </td>
                                                                        <td>{row.startTime}</td>
                                                                        <td>{row.endTime}</td>
                                                                        <td>
                                                                            {row.btnModify}
                                                                            {row.btnDelete}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                {renderRows()}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-wrap">
                                                <div className="tit-area">
                                                    <h4>휴일</h4>
                                                    <SelectBox
                                                        selectClassName={'nomal'}
                                                        title={'2024'}
                                                        options={['2024', '2025', '2026', '2027']}
                                                    />
                                                </div>
                                                <div className="grid-box">
                                                    <div className="scroll-box" style={{ height: '240px' }}>
                                                        <table className="table-basic">
                                                            <colgroup>
                                                                <col width="33%" />
                                                                <col width="33%" />
                                                                <col width="33%" />
                                                                <col width="148px" />
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th>기간</th>
                                                                    <th>구분</th>
                                                                    <th>휴일 이름</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data2.map((row, index) => (
                                                                    <tr key={index}>
                                                                        <td
                                                                            className={
                                                                                row.period === '휴일' && 'holiday'
                                                                            }
                                                                        >
                                                                            {row.period}
                                                                        </td>
                                                                        <td
                                                                            className={
                                                                                row.division === '대한민국 공휴일' &&
                                                                                'holiday'
                                                                            }
                                                                        >
                                                                            {row.division}
                                                                        </td>
                                                                        {row.division === '사용자 등록 휴일' ? (
                                                                            <td>
                                                                                {!nameEdit ? (
                                                                                    <div className="name-txt">
                                                                                        <span>{row.name}</span>
                                                                                        <button
                                                                                            className="btn-edit"
                                                                                            onClick={() =>
                                                                                                handleNameEdit(index)
                                                                                            }
                                                                                        ></button>
                                                                                    </div>
                                                                                ) : (
                                                                                    <div className="edit-txt">
                                                                                        <input type="text" />
                                                                                        <button
                                                                                            className="btn bg tiny black"
                                                                                            onClick={() =>
                                                                                                handleNameEdit(index)
                                                                                            }
                                                                                        >
                                                                                            수정
                                                                                        </button>
                                                                                    </div>
                                                                                )}
                                                                            </td>
                                                                        ) : (
                                                                            <td
                                                                                className={
                                                                                    row.division ===
                                                                                        '대한민국 공휴일' && 'holiday'
                                                                                }
                                                                            >
                                                                                {row.name}
                                                                            </td>
                                                                        )}
                                                                        <td>{row.btnDelete}</td>
                                                                    </tr>
                                                                ))}
                                                                {render2Rows()}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* default 값 */}
                                    {/* {renderTime()} */}
                                </>
                            )}
                            {activeTab === 1 && (
                                <div className="category-mes">
                                    <div className="option-wrap">
                                        <button
                                            type="button"
                                            className={`option-btn ${activebtn === 0 ? 'active' : ''}`}
                                            onClick={() => buttonClick(0)}
                                        >
                                            <div className="condition-tit option-three">
                                                <h4>카테고리 최대 대기수 설정 / 상담 불가 안내</h4>
                                                <div className="radio-wrap">
                                                    <div className="radio-btn" onClick={disAbledRadioBtn}>
                                                        <label htmlFor="radio">
                                                            <input id="radio" type="radio" name="division" />
                                                            센터설정과 동일
                                                        </label>
                                                    </div>
                                                    <div className="radio-btn" onClick={waitBtn}>
                                                        <label htmlFor="radio2">
                                                            <input id="radio2" type="radio" name="division" />
                                                            대기 불가
                                                        </label>
                                                    </div>
                                                    <div className="radio-btn" onClick={radioBtn}>
                                                        <label htmlFor="radio3">
                                                            <input id="radio3" type="radio" name="division" />
                                                            최대 대기수 입력
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="three-condition">
                                                <dl className="condition-info">
                                                    <dt>센터 설정과 동일 :</dt>
                                                    <dd>센터와 동일한 설정으로 운영합니다.</dd>
                                                </dl>
                                                <dl className="condition-info">
                                                    <dt>대기 불가 :</dt>
                                                    <dd>대기가 불가하며, 안내 메시지가 즉시 발송됩니다.</dd>
                                                </dl>
                                                <dl className="condition-info">
                                                    <dt>최대 대기수 입력 :</dt>
                                                    <dd>입력값 초과 시, 상담 불가 메시지가 발송됩니다.</dd>
                                                </dl>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            className={`option-btn ${activebtn === 1 ? 'active' : ''}`}
                                            onClick={() => buttonClick(1)}
                                        >
                                            <div className="condition-tit">
                                                <h4>
                                                    상담 대기 안내
                                                    <i className="badge green small">인사말</i>
                                                </h4>
                                                <div className="radio-btn" onClick={disAbledRadioBtn}>
                                                    <label htmlFor="radio4">
                                                        <input id="radio4" type="radio" name="division1" />
                                                        센터설정과 동일
                                                    </label>
                                                </div>
                                                <div className="radio-btn" onClick={radioBtn}>
                                                    <label htmlFor="radio5">
                                                        <input id="radio5" type="radio" name="division1" />
                                                        최대 대기수 입력
                                                    </label>
                                                </div>
                                            </div>
                                            <dl className="condition-info">
                                                <dt>센터 설정과 동일 :</dt>
                                                <dd>
                                                    상담을 요청하여 대기 시작 시, 센터와 동일한 안내 메시지가
                                                    발송됩니다.
                                                </dd>
                                            </dl>
                                            <dl className="condition-info">
                                                <dt>직접 입력 :</dt>
                                                <dd>
                                                    상담을 요청하여 대기 시작 시, 카테고리 전용 안내 메시지가
                                                    발송됩니다.
                                                </dd>
                                            </dl>
                                        </button>
                                    </div>
                                    <div className="guide-mes">
                                        <div className="tit">
                                            <strong>
                                                {guideTitle}
                                                {activebtn === 1 && <i className="badge green small">인사말</i>}
                                            </strong>
                                            <div className="btn-list underline right">
                                                <button type="button" className="underline-btn">
                                                    초기화
                                                </button>
                                            </div>
                                        </div>
                                        <div className="guide-txt">
                                            <textarea disabled={state} value={value} onChange={onChangeValue} />
                                            <span>
                                                {value.length}
                                                <span className="limit">/ 200</span>
                                            </span>
                                            {activebtn === 0 && (
                                                <div className="info-textbox">
                                                    <span>최대 대기 수</span>
                                                    <div className="textbox-unit">
                                                        <input disabled={radioState} type="text" placeholder="" />
                                                        <span className="input-unit">건</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="btn-list right">
                                            <button className="btn bg black big">저장</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className="divid">
                                    <div className="divid-top">
                                        <div className="option-wrap">
                                            <span>배분 방식</span>
                                            <div className="option">
                                                <div className="condition-tit">
                                                    <h4>진행 건 기준 균등 배분</h4>
                                                    <button type="button" className="underline-btn">
                                                        센터 상담 배분 확인
                                                    </button>
                                                </div>
                                                <dl className="condition-info dot">
                                                    <dd>
                                                        현재 기준, 진행 중인 상담 건수가 가장 적은 상담사에게
                                                        배분합니다.
                                                    </dd>
                                                </dl>
                                                <dl className="condition-info dot">
                                                    <dd>
                                                        모든 상담사가 동일한 조건일 때, 가장 오래전에 배분 받은
                                                        상담사에게 배분합니다.
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <span className="add-info">
                                            <i className="no-team"></i>
                                            카테고리의 배분 방식은 센터의 배분 방식을 따릅니다.
                                        </span>
                                        <span className="add-info">
                                            <i className="no-team"></i>
                                            모든 상담사는 최대 상담건수 제한이 있으며, 이를 초과하는 경우 고객은
                                            대기(미배분) 상태가 됩니다.
                                        </span>
                                        <div className="info-textbox">
                                            <span>
                                                배분 대상 팀<i class="ico-check"></i>
                                            </span>
                                            <SelectBox
                                                selectClassName={'divid-sel'}
                                                title={'기존 서비스 1팀'}
                                                options={[
                                                    '기존 서비스 1팀',
                                                    '기존 서비스 2팀',
                                                    '기존 서비스 3팀',
                                                    '기존 서비스 4팀',
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="option-wrap">
                                        <div className="option">
                                            <div className="condition-tit option-three">
                                                <h4>카테고리 최대 대기수 설정 / 상담 불가 안내</h4>
                                                <div className="radio-wrap">
                                                    <div className="radio-btn" onClick={disAbledRadioBtn}>
                                                        <label htmlFor="radio7">
                                                            <input id="radio7" type="radio" name="division3" />
                                                            센터설정과 동일
                                                        </label>
                                                    </div>
                                                    <div className="radio-btn" onClick={disAbledRadioBtn}>
                                                        <label htmlFor="radio8">
                                                            <input id="radio8" type="radio" name="division3" />
                                                            사용 안함
                                                        </label>
                                                    </div>
                                                    <div className="radio-btn" onClick={radioBtn}>
                                                        <label htmlFor="radio9">
                                                            <input id="radio9" type="radio" name="division3" />
                                                            사용
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="three-condition">
                                                <dl className="condition-info">
                                                    <dt>사용 안함 :</dt>
                                                    <dd>이전 상담 이력과 관계없이 배분합니다.</dd>
                                                </dl>
                                                <dl className="condition-info">
                                                    <dt>사용 :</dt>
                                                    <dd>이전 상담 이력에 따라 동일한 상담사를 우선 배분합니다.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className={`option ${state ? 'disabled' : ''}`} disabled={state}>
                                            <div className="condition-tit">
                                                <h4>
                                                    상담사별{' '}
                                                    <em className={state ? '' : 'red'}>최대 상담건수 초과 허용여부</em>
                                                </h4>
                                                <div className="toggle-btn">
                                                    <label htmlFor="category-toggle-1" className="toggle-switch">
                                                        <input
                                                            type="checkbox"
                                                            id="category-toggle-1"
                                                            disabled={state}
                                                        />
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <dl className="condition-info">
                                                <dt>OFF :</dt>
                                                <dd>
                                                    이전 상담사의 최대 상담건수 초과 시, 임의의 상담사를 배분합니다.
                                                </dd>
                                            </dl>
                                            <dl className="condition-info">
                                                <dt>ON :</dt>
                                                <dd>
                                                    이전 상담사의 최대 상담건수를
                                                    <em className={state ? '' : 'red'}>
                                                        {' '}
                                                        초과하여도, 동일한 상담사를 배분
                                                    </em>
                                                    합니다.
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    {/* 240603 버튼 추가 */}
                                    <div className="btn-list underline right">
                                        <button className="underline-btn">초기화</button>
                                    </div>
                                    <div className="btn-list right">
                                        <button className="btn bg black big">저장</button>
                                    </div>
                                    {/* 240603 버튼 추가 */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySetting;
