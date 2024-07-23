import React from 'react';
import TopSelect from '@/components/TopSelect';
import { useRef, useState } from 'react';
import '@/style/operating.scss';
import BarGraph from '@/components/chart/BarGraph';
import PieGraph from '@/components/chart/PieGraph';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import DatePickerWithShortcuts from '@/components/Test';
import { CALENDER_TYPE } from '@/constants/common';

const tabData = [
    {
        center: '신규계약센터',
        category: '계약 1팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
    {
        center: '신규계약센터 일이삼사오육칠팔구십',
        category: '기존계약팀',
        request: '30건',
        processing: '30%',
        connection: '30건',
        failed: '30건',
        leave: '30건',
        entry: '30건',
        waiting: '30건',
        time: '30건',
    },
];

function CategoryStatist(props) {
    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 2 }, () => React.createRef()));

    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
        counsulTime: 0,
        connet: 0,
    });

    // 240531 date.length 따라서 selectbox -> list height 조절
    const dataLength = tabData.length > 6 ? 'reduction' : '';

    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [
        { title: '센터', option: '전체' },
        { title: '카테고리', option: '이름' },
    ];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4'],
        ['카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4'],
    ];

    // 센터/카테고리 차트 관련
    const center = [
        { name: 'maxWidth100', value: 400 },
        { name: '대기 실패', value: 300 },
        { name: '대기 중 이탈', value: 300 },
        { name: '운영시간외인입', value: 200 },
    ];
    const centerLabel = [
        { key: 'maxWidth100' },
        { key: '대기 실패' },
        { key: '대기 중 이탈' },
        { key: '운영시간외인입' },
    ];

    const center1 = [
        { name: '상담사 종료', value: 400 },
        { name: '고객 종료', value: 300 },
        { name: '시스템 종료', value: 300 },
        { name: '이관 종료', value: 200 },
        { name: '차단 종료 ', value: 200 },
    ];
    const center1Label = [
        { key: '상담사 종료' },
        { key: '고객 종료' },
        { key: '시스템 종료' },
        { key: '이관 종료' },
        { key: '차단 종료 ' },
    ];
    const inputData = {
        dataKey: 'name',
        yLimit: [0, 20000],
        values: [
            { name: '카테고리일이삼사', 상담연결: 10000, 상담실패: 800 },
            { name: '카테', 상담연결: 4000, 상담실패: 20000 },
            { name: '카테', 상담연결: 7000, 상담실패: 5000 },
            { name: '카테', 상담연결: 3000, 상담실패: 200 },
            { name: '카테', 상담연결: 500, 상담실패: 3000 },
            { name: '카테', 상담연결: 1000, 상담실패: 9000 },
        ],
    };

    const inputLabels = [
        { key: '상담연결', color: '#ff710a' },
        { key: '상담실패', color: '#ffc737' },
    ];
    const yTicks = [0, 5000, 10000, 15000, 20000];

    const barData2 = [
        { name: '카테고리일이삼사', 상담연결: 10000, 상담실패: 800 },
        { name: '카테', 상담연결: 4000, 상담실패: 20000 },
        { name: '카테', 상담연결: 7000, 상담실패: 5000 },
        { name: '카테', 상담연결: 3000, 상담실패: 200 },
        { name: '카테', 상담연결: 500, 상담실패: 3000 },
        { name: '카테', 상담연결: 1000, 상담실패: 9000 },
    ];

    const CustomTick = (props) => {
        const { x, y, payload } = props;
        const MAX_LENGTH = 5; // 최대 텍스트 길이 설정

        let text = payload.value;
        if (text.length > MAX_LENGTH) {
            text = text.substring(0, MAX_LENGTH) + '...';
        }

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="middle" fill="#919190" fontWeight="400">
                    {text}
                </text>
            </g>
        );
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

    return (
        <div className="content">
            <div className="page-tit">
                <h3>센터/카테고리별 통계</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>상담통계</em>
                    <em>센터/카테고리별 통계</em>
                </span>
            </div>
            <div className="tab-cont statist">
                <div className="statist-cont">
                    <div className="search-wrap">
                        {/* 2024.06.12 DatePickerWithShortcuts 추가 */}
                        <DatePickerWithShortcuts type={CALENDER_TYPE.DAY} />
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
                        <i className="ico-bar"></i>
                        <button className="btn bg black">조회</button>
                        <div className="top-odd">
                            <dl>
                                <dt>센터</dt>
                                <dd>일이삼사오육칠팔구십일이삼사오육칠팔구십</dd>
                            </dl>
                            <dl>
                                <dt>카테고리</dt>
                                <dd>일이삼사오육칠팔구십일이삼사오육칠팔구십</dd>
                            </dl>
                            <dl>
                                <dt>조회 기간</dt>
                                <dd className="no-short">2024-02-20 ~ 2024-02-20</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="indicator-wrap">
                        <div className="tit-wrap">
                            <h4>주요 통계 지표</h4>
                            <div className="counselor-state">
                                <dl className="all">
                                    <dt>상담 요청</dt>
                                    <dd>1,000건</dd>
                                </dl>
                                <ul className="detail">
                                    <li>
                                        <span>
                                            <em>상담 연결</em>600건
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <em>상담 실패</em>400건
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="indicator-graph">
                            <div className="graph row both">
                                <div className="pie-box">
                                    <h4>센터별 상담 요청</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <PieGraph {...center} values={center} labels={centerLabel} height={193} />
                                </div>
                                <div className="bar-box">
                                    <h4>센터별 상담처리</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <BarGraph
                                        {...inputData}
                                        labels={inputLabels}
                                        yLimit={[0, 'auto']}
                                        yTicks={yTicks}
                                        legendVisible={true}
                                        stacked={false}
                                        barSize={15}
                                    />
                                </div>
                            </div>
                            <div className="graph row both">
                                <div className="pie-box">
                                    <h4>카테고리별 상담 요청</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <PieGraph {...center} values={center} labels={centerLabel} height={193} />
                                </div>
                                <div className="bar-box">
                                    <h4>카테고리별 상담처리</h4>
                                    {/* 2024.06.07 chart 컴포넌트 분리 */}
                                    <BarGraph
                                        {...inputData}
                                        labels={inputLabels}
                                        yLimit={[0, 'auto']}
                                        yTicks={yTicks}
                                        legendVisible={true}
                                        stacked={false}
                                        barSize={15}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="indicator-wrap">
                        <div className="tit-wrap">
                            <h4>통계 상세 현황</h4>
                            <button className="btn small line weight ico gray down">Excel 다운로드</button>
                        </div>
                        <div className="table-cont">
                            <table className="table-basic statist">
                                <colgroup>
                                    <col width="*" />
                                    <col width="*" />
                                    <col width="126px" />
                                    <col width="126px" />
                                    <col width="126px" />
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="126px" />
                                    <col width="126px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="align-left" rowSpan={2}>
                                            센터
                                        </th>
                                        <th className="align-left" rowSpan={2}>
                                            카테고리
                                        </th>
                                        <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                            <button
                                                onClick={() => toggleActiveButton('entryTime')}
                                                className={getButtonClass('entryTime')}
                                            >
                                                상담요청<i></i>
                                            </button>
                                        </th>
                                        <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                            <button
                                                onClick={() => toggleActiveButton('waitingTime')}
                                                className={getButtonClass('waitingTime')}
                                            >
                                                처리율<i></i>
                                            </button>
                                        </th>
                                        <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                            <button
                                                onClick={() => toggleActiveButton('progressTime')}
                                                className={getButtonClass('progressTime')}
                                            >
                                                상담연결<i></i>
                                            </button>
                                        </th>
                                        <th colSpan={3}>상담실패</th>
                                        <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                            <button
                                                onClick={() => toggleActiveButton('counsulTime')}
                                                className={getButtonClass('counsulTime')}
                                            >
                                                대기시간<i></i>
                                            </button>
                                        </th>
                                        <th rowSpan={2}>
                                            {/* 2024.07.23 className 수정 */}
                                            <button
                                                onClick={() => toggleActiveButton('connet')}
                                                className={getButtonClass('connet')}
                                            >
                                                상담시간<i></i>
                                            </button>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>대기 실패</th>
                                        <th>대기 중 이탈</th>
                                        <th>운영시간 외 인입</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabData.map((row, index) => (
                                        <tr key={index}>
                                            <td className="align-left">{row.center}</td>
                                            <td className="align-left">{row.category}</td>
                                            <td>{row.request}</td>
                                            <td>{row.processing}</td>
                                            <td>{row.connection}</td>
                                            <td>{row.failed}</td>
                                            <td>{row.leave}</td>
                                            <td>{row.entry}</td>
                                            <td>{row.waiting}</td>
                                            <td>{row.time}</td>
                                        </tr>
                                    ))}
                                    {/* {renderRows()} */}
                                </tbody>
                            </table>
                        </div>
                        {/* 2024.06.07 dataLength 삭제 */}
                        <CounsulPagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryStatist;
