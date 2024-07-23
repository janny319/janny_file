import Tab from '@/components/Tab';
import React, { useState } from 'react';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import imgTBD from '@/assets/img/img_tbd.png';
import userDefault from '@/assets/icon/ico_chat_user_default.svg';

const data = [
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: 'shfsghslgslkdfhslshfsghslgslkdfhslshfsghslgslkdfhslshfsghslgslkdfhsl',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: 'shfsghslgslkdfhslshfsghslgslkdfhslshfsghslgslkdfhslshfsghslgslkdfhsl',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
    {
        center: 'iComm 고객센터',
        category: '윙고',
        channel: 'iComm PC웹',
        customer: '02:20:00',
        entryTime: '02:20:00',
        waitingTime: '00000',
        exitType: '미배분',
    },
];

function Wating() {
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태
    const [selectedRow, setSelectedRow] = useState(null);

    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
    });

    // 240531 date.length 따라서 selectbox -> list height 조절
    const dataLength = data.length > 8 ? 'reduction' : '';

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
        <div className="mes-wrap row">
            {/* // 240529 클래스 수정 */}
            <div className="monitoring-wrap">
                <div className="mes-tit">
                    {/* // 240529 클래스 수정 */}
                    <h4>대기 현황</h4>
                    <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
                </div>
                <div className="tab-cont">
                    {activeTab === 0 && (
                        <div>
                            <div className="grid-box">
                                <div className="scroll-box">
                                    <table className="table-basic">
                                        <colgroup>
                                            <col width="*" />
                                            <col width="180px" />
                                            <col width="180px" />
                                            <col width="120px" />
                                            <col width="120px" />
                                            <col width="120px" />
                                            <col width="180px" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>센터</th>
                                                <th>카테고리</th>
                                                <th>유입채널</th>
                                                <th>요청시간</th>
                                                <th>
                                                    {/* 2024.07.23 className 수정 */}
                                                    <button
                                                        onClick={() => toggleActiveButton('progressTime')}
                                                        className={getButtonClass('progressTime')}
                                                    >
                                                        대기시간<i></i>
                                                    </button>
                                                </th>
                                                <th>대화방 ID</th>
                                                <th>상담사</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row, index) => (
                                                <tr onClick={() => setSelectedRow(row)} key={index}>
                                                    <td>{row.center}</td>
                                                    <td>{row.category}</td>
                                                    <td>{row.channel}</td>
                                                    <td>{row.customer}</td>
                                                    <td>{row.entryTime}</td>
                                                    <td>{row.waitingTime}</td>
                                                    <td>
                                                        {row.exitType === '미배분' ? (
                                                            <i className={`badge ${getBadgeClass(row.exitType)}`}>
                                                                {row.exitType}
                                                            </i>
                                                        ) : (
                                                            row.exitType
                                                        )}
                                                    </td>
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
            <div className="wating-mes">
                {selectedRow ? (
                    <>
                        <div className="detail-wrap">
                            <strong className="detail-tit">대화 이력</strong>
                            <div className="detail-option-wrap">
                                <div className="detail-option">
                                    <span className="detail-txt">대화방 ID</span>
                                    <span>{selectedRow.waitingTime}</span>
                                </div>
                                <div className="detail-option">
                                    <span className="detail-txt">상담사</span>
                                    {/* <span>{selectedRow.exitType}</span> */}
                                    <span>
                                        {selectedRow.exitType === '미배분' ? (
                                            <i className={`badge ${getBadgeClass(selectedRow.exitType)}`}>
                                                {selectedRow.exitType}
                                            </i>
                                        ) : (
                                            selectedRow.exitType
                                        )}
                                    </span>
                                </div>
                                <div className="detail-option row">
                                    <div className="row-box">
                                        <span className="detail-txt">요청시간</span>
                                        <span className="detail-time">24-02-20 {selectedRow.customer}</span>
                                    </div>
                                    <div className="row-box">
                                        <span className="detail-txt">대기시간</span>
                                        <span className="detail-time">{selectedRow.entryTime}</span>
                                    </div>
                                </div>
                                <div className="detail-option row">
                                    <div className="row-box">
                                        <span className="detail-txt">시작시간</span>
                                        <span className="detail-time">-</span>
                                    </div>
                                    <div className="row-box">
                                        <span className="detail-txt">진행시간</span>
                                        <span className="detail-time">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatting">
                            <div className="chat-cont">
                                <div className="date-division">
                                    <span>24-02-20 화</span>
                                </div>
                                <div className="customer-chat">
                                    <i className="customer-ico">
                                        <img src={userDefault} alt="user 아이콘" />
                                    </i>
                                    <div className="speech">
                                        <p>상품 가입</p>
                                        <em>10:00</em>
                                    </div>
                                </div>
                                <div className="my-chat">
                                    <div className="speech">
                                        <p>1:1 상담을 문의하였습니다. 잠시 후 상담사를 연결해드리겠습니다.</p>
                                        <em>10:00</em>
                                    </div>
                                </div>
                                <div className="my-chat">
                                    <div className="speech">
                                        <div>
                                            <img src={imgTBD} alt="예시이미지" />
                                        </div>
                                        <em>10:00</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="no-info">
                        <p>목록에서 대화를 선택하세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Wating;
