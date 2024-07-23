import Tab from '@/components/Tab';
import React, { useState } from 'react';
import CounsulPagination from '@/pages/counsul/CounsulPagination';

const data = [
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '자리비움',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '자리비움',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '자리비움',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: '공지철(gong)',
        customer: '윙고1팀',
        entryTime: '상담중',
        waitingTime: '220',
        ing: '15',
        defer: '35',
        end: '3',
        start: '24-02-20 22:22:22',
        workTime: '22:22:22',
        processTime: '22:22:22',
        counsul: '222,000',
    },
];

function CounsulCurrent() {
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태

    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
    });

    // 240531 date.length 따라서 selectbox -> list height 조절
    const dataLength = data.length > 8 ? 'reduction' : '';

    const getBadgeClass = (entryTime) => {
        switch (entryTime) {
            case '상담중':
                return 'green';
            case '자리비움':
                return 'gray';
            default:
                return '';
        }
    };

    const tabTitles = [
        { title: '전체 2,033' },
        { title: '상담중 3' },
        { title: '자리비움 1' },
        { title: '상담종료 1' },
    ];
    // 탭 버튼을 클릭했을 때 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    {/* 2024.07.23 수정 */}
    const toggleActiveButton = (buttonName) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [buttonName]: (prevState[buttonName] + 1) % 3,
        }));
    };

    {/* 2024.07.23 추가 */}
    const getButtonClass = (buttonName) => {
        switch (activeButton[buttonName]) {
            case 1:
                return 'order-filter up';
            case 2:
                return 'order-filter down';
            default:
                return 'order-filter default';
        }
    };

    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="8">
                        <p className="no-data">조회된 데이터가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };

    return (
        // 240529 <div className="category"> cont-box 태그 삭제
        <div className="mes-wrap">
            <div className="mes-tit">
                {/* // 240529 클래스 수정 */}
                <h4>상담사 현황</h4>
                <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
            </div>
            <div className="tab-cont">
                {activeTab === 0 && (
                    <div>
                        <div className="grid-box">
                            <div className="scroll-box current">
                                {/* // 240531 클래스 추가 */}
                                <table className="table-basic">
                                    <colgroup>
                                        <col width="*" />
                                        <col width="128px" />
                                        <col width="140px" />
                                        <col width="140px" />
                                        <col width="104px" />
                                        <col width="74px" />
                                        <col width="74px" />
                                        <col width="74px" />
                                        <col width="74px" />
                                        <col width="160px" />
                                        <col width="110px" />
                                        <col width="110px" />
                                        <col width="110px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>센터</th>
                                            <th>카테고리</th>
                                            <th>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('progressTime')}
                                                    className={getButtonClass('progressTime')}
                                                >
                                                    상담사 이름<i></i>
                                                </button>
                                            </th>
                                            <th>팀</th>
                                            <th>상태</th>
                                            <th>대기</th>
                                            <th>진행</th>
                                            <th>보류</th>
                                            <th>종료</th>
                                            <th>업무 시작시간</th>
                                            <th>근무한 시간</th>
                                            <th>평균 처리시간</th>
                                            <th>최대 상담수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.center}</td>
                                                <td>{row.category}</td>
                                                <td>{row.channel}</td>
                                                <td>{row.customer}</td>
                                                {/* <td>{row.entryTime}</td> */}
                                                <td>
                                                    <i className={`badge ${getBadgeClass(row.entryTime)}`}>
                                                        {row.entryTime}
                                                    </i>
                                                </td>
                                                <td>{row.waitingTime}</td>
                                                <td>{row.ing}</td>
                                                <td>{row.defer}</td>
                                                <td>{row.end}</td>
                                                <td>{row.start}</td>
                                                <td>{row.workTime}</td>
                                                <td>{row.processTime}</td>
                                                <td>{row.counsul}</td>
                                            </tr>
                                        ))}
                                        {renderRows()}
                                    </tbody>
                                </table>
                            </div>
                            {/* <Pagination itemsPerPage={10} totalItems={82} onPageChange={onPageChange} /> */}
                        </div>
                        {/* 2024.06.07 dataLength 삭제 */}
                        <CounsulPagination />
                    </div>
                )}
                {activeTab === 1 && <div>내용2</div>}
                {activeTab === 2 && <div>내용3</div>}
                {activeTab === 3 && <div>내용4</div>}
            </div>
        </div>
    );
}

export default CounsulCurrent;
