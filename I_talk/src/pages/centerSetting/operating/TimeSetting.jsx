import React, { useRef, useState, useEffect } from 'react';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import { Link } from 'react-router-dom';
import TopSelect from '@/components/TopSelect';
import SelectBox from '@/components/SelectBox';
import PopUp from '@/components/PopUp';
import MealTimePop from '@/pages/centerSetting/operating/MealTimePop';
import OperlTimePop from '@/pages/centerSetting/operating/OperlTimePop';
import DateCalendar from '@/components/calendar/DateCalendar';

function TimeSetting() {
    //title부분
    const title = ['운영관리', '센터운영 설정', '운영시간 설정'];
    const subTitle = title[title.length - 1];
    // DropDow 영역
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const [nameEdit, setNameEdit] = useState(false);
    const [nameEditIndex, setNameEditIndex] = useState(null);
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
                            <Link to="/TimeSetting" className="tab-btn active">
                                <span>운영시간</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Condition" className="tab-btn">
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
                            <PopUp title={'식사시간 설정'} alertClassName={'size-popup'} closePopup={closePopup}>
                                <MealTimePop closePopup={closePopup} setMealTimePop={isMealTimePop} />
                            </PopUp>
                        )}
                    </div>
                </div>
                <div className="set-list">
                    <div className="list-wrap">
                        <div className="tit-area">
                            <h4>운영시간</h4>
                            <button className="btn line small black" onClick={handleOperlTimePop}>
                                시간 추가
                            </button>
                            {isOperlTimePop && (
                                <PopUp title={'운영시간 추가'} alertClassName={'size-popup'} closePopup={closePopup}>
                                    <OperlTimePop closePopup={closePopup} setOperlTimePop={isOperlTimePop} />
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
                                                <td className={row.division === '휴일' && 'holiday'}>{row.division}</td>
                                                <td className={row.day === '휴일' && 'holiday'}>{row.day}</td>
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
                                                <td className={row.period === '휴일' && 'holiday'}>{row.period}</td>
                                                <td className={row.division === '대한민국 공휴일' && 'holiday'}>
                                                    {row.division}
                                                </td>
                                                {row.division === '사용자 등록 휴일' ? (
                                                    <td>
                                                        {!nameEdit ? (
                                                            <div className="name-txt">
                                                                <span>{row.name}</span>
                                                                <button
                                                                    className="btn-edit"
                                                                    onClick={() => handleNameEdit(index)}
                                                                ></button>
                                                            </div>
                                                        ) : (
                                                            <div className="edit-txt">
                                                                <input type="text" />
                                                                <button
                                                                    className="btn bg tiny black"
                                                                    onClick={() => handleNameEdit(index)}
                                                                >
                                                                    수정
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                ) : (
                                                    <td className={row.division === '대한민국 공휴일' && 'holiday'}>
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
        </div>
    );
}

export default TimeSetting;
