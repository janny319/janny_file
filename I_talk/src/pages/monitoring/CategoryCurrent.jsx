import React, { useState } from 'react';

function CategoryCurrent() {
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태
    const [selectedRow, setSelectedRow] = useState(null);

    const [activeButton, setActiveButton] = useState({
        entryTime: false,
        waitingTime: false,
        progressTime: false,
    });

    const tabTitles = [{ title: '전체 2,033' }, { title: '미배분 2,000' }, { title: '배분 33' }];
    // 탭 버튼을 클릭했을 때 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const getBadgeClass = (exitType) => {
        switch (exitType) {
            case '미배분':
                return 'red';
            default:
                return '';
        }
    };

    const toggleActiveButton = (buttonName) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [buttonName]: !prevState[buttonName],
        }));
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

    const data = [
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
        {
            center: 'iComm 고객센터',
            category: '윙고',
            enter: '220',
            wating: '220',
            unallocated: '220',
            allocated: '20',
            ing: '220',
            waiting: '220',
            end: '220',
            counsulEnd: '110',
            clientEnd: '110',
            systemEnd: '110',
            transfer: '220',
            cutOff: '220',
            leave: '220',
            impossible: '110',
            counsul: '1100명',
            average: '02:25:33',
            averageCounsul: '02:25:33',
        },
    ];

    console.log(data[0].entryTime);
    return (
        // 240529 <div className="category"> cont-box 태그 삭제
        <div className="mes-wrap">
            {/* // 240529 클래스 수정 */}
            <h4>센터/카테고리별 현황</h4>
            <div className="center-cont">
                {/* // 240529 클래스 수정 */}
                <div className="grid-box">
                    <div className="scroll-box row">
                        <div className="fixed-tit">
                            <table className="table-basic">
                                <colgroup>
                                    <col width="240px" />
                                    <col width="240px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>센터</th>
                                        <th>카테고리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.center}</td>
                                            <td>{row.category}</td>
                                        </tr>
                                    ))}
                                    <tr className="total">
                                        <td colSpan="2">합계</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="scroll-body">
                            <table className="table-basic">
                                <colgroup>
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="100px" />
                                    <col width="122px" />
                                    <col width="122px" />
                                    <col width="122px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>인입</th>
                                        <th>
                                            <button
                                                // 2024.06.10 waitingTime 수정
                                                onClick={() => toggleActiveButton('waitingTime')}
                                                className={`order-filter row ${
                                                    activeButton.waitingTime ? 'active' : ''
                                                }`}
                                            >
                                                대기<i></i>
                                            </button>
                                        </th>
                                        <th className="sub-table">미배분</th>
                                        <th className="sub-table">배분</th>
                                        <th>진행중</th>
                                        <th>보류</th>
                                        <th>
                                            <button
                                                onClick={() => toggleActiveButton('progressTime')}
                                                className={`order-filter row ${
                                                    activeButton.progressTime ? 'active' : ''
                                                }`}
                                            >
                                                종료<i></i>
                                            </button>
                                        </th>
                                        <th className="sub-table">상담사 종료</th>
                                        <th className="sub-table">고객 종료</th>
                                        <th className="sub-table">시스템 종료</th>
                                        <th className="sub-table">이관</th>
                                        <th className="sub-table">차단</th>
                                        <th>대기중 이탈</th>
                                        <th>인입 불가</th>
                                        <th>상담사</th>
                                        <th>평균 대기시간</th>
                                        <th>평균 상담시간</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr onClick={() => setSelectedRow(row)} key={index}>
                                            <td>{row.enter}</td>
                                            <td>{row.wating}</td>
                                            <td className="sub-table">{row.unallocated}</td>
                                            <td className="sub-table">{row.allocated}</td>
                                            <td>{row.ing}</td>
                                            <td>{row.waiting}</td>
                                            <td>{row.end}</td>
                                            <td className="sub-table">{row.counsulEnd}</td>
                                            <td className="sub-table">{row.clientEnd}</td>
                                            <td className="sub-table">{row.systemEnd}</td>
                                            <td className="sub-table">{row.transfer}</td>
                                            <td className="sub-table">{row.cutOff}</td>
                                            <td>{row.leave}</td>
                                            <td>{row.impossible}</td>
                                            <td>{row.counsul}</td>
                                            <td>{row.average}</td>
                                            <td>{row.averageCounsul}</td>
                                        </tr>
                                    ))}
                                    <tr className="total">
                                        <td>36,696</td>
                                        <td>2,640</td>
                                        <td className="sub-total">220</td>
                                        <td className="sub-total">220</td>
                                        <td>220</td>
                                        <td>220</td>
                                        <td>220</td>
                                        <td className="sub-total">220</td>
                                        <td className="sub-total">220</td>
                                        <td className="sub-total">220</td>
                                        <td className="sub-total">220</td>
                                        <td className="sub-total">220</td>
                                        <td>110</td>
                                        <td>12,110명</td>
                                        <td>13:51:98</td>
                                        <td>13:51:98</td>
                                        <td>13:51:98</td>
                                    </tr>
                                    {renderRows()}
                                </tbody>
                            </table>

                            {/* <Pagination itemsPerPage={10} totalItems={82} onPageChange={onPageChange} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryCurrent;
