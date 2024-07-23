import '@/style/grid.scss';
import { useState } from 'react';

function Grid({ OpenedPopup }) {
    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
    });

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

    const data = [
        {
            center: '신규계약센터 1',
            category: '스마트폰',
            channel: 'web',
            customer: '고객13',
            entryTime: '24-03-20 12:32:20',
            waitingTime: '00분 00초',
            progressTime: '00분 00초',
            counselor: '홍매니저(id)',
            exitType: '시스템종료',
        },
        {
            center: '신규계약센터 2',
            category: '스마트폰',
            channel: 'web',
            customer: '고객13',
            entryTime: '24-03-20 12:32:20',
            waitingTime: '00분 00초',
            progressTime: '00분 00초',
            counselor: '홍매니저(id)',
            exitType: '차단 종료',
        },
        {
            center: '신규계약센터 3',
            category: '스마트폰',
            channel: 'web',
            customer: '고객13',
            entryTime: '24-03-20 12:32:20',
            waitingTime: '00분 00초',
            progressTime: '00분 00초',
            counselor: '홍매니저(id)',
            exitType: '이관 종료',
        },
        {
            center: '신규계약센터 4',
            category: '스마트폰',
            channel: 'web',
            customer: '고객13',
            entryTime: '24-03-20 12:32:20',
            waitingTime: '00분 00초',
            progressTime: '00분 00초',
            counselor: '홍매니저(id)',
            exitType: '고객종료',
        },
        {
            center: '신규계약센터 5',
            category: '스마트폰',
            channel: 'web',
            customer: '고객13',
            entryTime: '24-03-20 12:32:20',
            waitingTime: '00분 00초',
            progressTime: '00분 00초',
            counselor: '홍매니저(id)',
            exitType: '상담사 종료',
        },
    ];

    const getBadgeClass = (exitType) => {
        switch (exitType) {
            case '고객종료':
                return 'mint';
            case '시스템종료':
                return 'yellow';
            case '차단 종료':
                return 'red';
            case '이관 종료':
                return 'gray';
            case '상담사 종료':
                return 'green';
            default:
                return '';
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

    const onPageChange = (page, viewCount) => {
        console.log('onPageChange : ', page, viewCount);
    };

    return (
        // 2024.05.13 테이블 스크롤 처리
        // 2024.07.22 height 값 수정
        <div className="grid-box" style={{ height: '450px' }}>
            <div className="scroll-box">
                <table className="table-basic">
                    <colgroup>
                        <col width="*" />
                        <col width="160px" />
                        <col width="160px" />
                        <col width="180px" />
                        <col width="160px" />
                        <col width="160px" />
                        <col width="180px" />
                        <col width="" />
                        <col width="" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="align-left">센터</th>
                            <th>카테고리</th>
                            <th>유입채널</th>
                            <th className="align-left">고객번호(이름)</th>
                            <th>
                                {/* 2024.07.23 className 수정 */}
                                <button
                                    onClick={() => toggleActiveButton('entryTime')}
                                    className={getButtonClass('entryTime')}
                                >
                                    최초 인입시간<i></i>
                                </button>
                            </th>
                            <th>
                                {/* 2024.07.23 className 수정 */}
                                <button
                                    onClick={() => toggleActiveButton('waitingTime')}
                                    className={getButtonClass('waitingTime')}
                                >
                                    상담대기시간<i></i>
                                </button>
                            </th>
                            <th>
                                {/* 2024.07.23 className 수정 */}
                                <button
                                    onClick={() => toggleActiveButton('progressTime')}
                                    className={getButtonClass('progressTime')}
                                >
                                    상담진행시간<i></i>
                                </button>
                            </th>
                            <th className="align-left">상담사(ID)</th>
                            <th>종료유형</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr onClick={OpenedPopup} key={index}>
                                <td className="align-left">{row.center}</td>
                                <td>{row.category}</td>
                                <td>{row.channel}</td>
                                <td className="align-left">{row.customer}</td>
                                <td>{row.entryTime}</td>
                                {/* 2024.06.07 progressTime 빠져서 추가함 */}
                                <td>{row.progressTime}</td>
                                <td>{row.waitingTime}</td>
                                <td className="align-left">{row.counselor}</td>
                                <td>
                                    <i className={`badge ${getBadgeClass(row.exitType)}`}>{row.exitType}</i>
                                </td>
                            </tr>
                        ))}
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            {/* <Pagination itemsPerPage={10} totalItems={82} onPageChange={onPageChange} /> */}
        </div>
    );
}

export default Grid;
