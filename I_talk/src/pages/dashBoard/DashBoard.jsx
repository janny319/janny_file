import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TopSelect from '@/components/TopSelect';
import SelectBox from '@/components/SelectBox';
import BarGraph from "@/components/chart/BarGraph";
import PieGraph from "@/components/chart/PieGraph";
import '@/style/dash-board.scss';

const DashBoard = () => {
    // title 부분
    const title = ['대시보드'];
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [
        { title: '센터', option: '센터' },
    ];
    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['전체', '센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4'],
    ];
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 4 }, () => React.createRef()));
    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        name: 0,
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
    const indicators = [
        { label: '인입', value: '30건' },
        { label: '종료', value: '20건', onClick: () => alert('처리하기 클릭됨') },
        { label: '처리율', value: '33.33%', onClick: () => alert('처리하기 클릭됨') },
        { label: '1인당 평균 처리', value: '20건' },
        { label: '평균 상담 시간', value: '30분 20초' },
    ];
    const renderActiveShape = (props) => {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
        return (
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius - 3}
                outerRadius={outerRadius + 3}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        );
    };
    const data = [
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담종료',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '자리비움',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
        {
            center: 'iComm 고객센터',
            name: '상담사',
            state: '상담중',
            wait: '10',
            ing: '45',
            end:'8',
            max:'20',
            averageTime: '22:22:22'
        },
    ]
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
    const getStateIconClass = (state) => {
        switch(state) {
            case '상담중':
                return 'ing';
            case '상담종료':
                return 'end';
            case '자리비움':
                return 'away';
            default:
                return '';
        }
    };
    // 센터/카테고리 차트 관련
    const center = [
        { name: 'maxWidth100', value: 400 },
        { name: '강남 이노바드 ABCD', value: 300 },
        { name: '3카테고리', value: 300 },
        { name: '3카테고리', value: 200 },
    ];
    const centerLabels = [
        { key: 'maxWidth100'},
        { key: '강남 이노바드 ABCD' },
        { key: '3카테고리' },
        { key: '3카테고리'},
    ];
    // 상담 건수
    const counsel = [
        { name: '상담중', value: 400 },
        { name: '대기', value: 400 },
        { name: '진행 중', value: 300 },
        { name: '보류', value: 300 },
        { name: '이관', value: 200 },
        { name: '차단', value: 200 },
        { name: '완료', value: 200 },
    ];
    const counselLabels = [
        { key: '상담중'},
        { key: '대기' },
        { key: '진행 중' },
        { key: '보류' },
        { key: '이관'},
        { key: '차단' },
        { key: '완료'},
    ];
    // 채널별 유입
    const channel = [
        { name: 'icommPC웹', value: 400 },
        { name: 'icomm모바일웹', value: 400 },
        { name: '비즈고PC웹', value: 300 },
        { name: '비즈고모바일웹', value: 300 },
    ];
    const channelLabels = [
        { key: "icommPC웹" },
        { key: "icomm모바일웹" },
        { key: "비즈고PC웹" },
        { key: "비즈고모바일웹" },
      ];

    const inputData = {
        dataKey: "hour",
        yLimit: [0, 25000],
        values: [
          { hour: '0시', maxWidth200px늘어나면말줄임처리: 4000, B센터_2카테고리: 2400 },
          { hour: '1시', maxWidth200px늘어나면말줄임처리: 3000, B센터_2카테고리: 1398 },
          { hour: '2시', maxWidth200px늘어나면말줄임처리: 2000, B센터_2카테고리: 9800 },
          { hour: '3시', maxWidth200px늘어나면말줄임처리: 2780, B센터_2카테고리: 3908 },
          { hour: '4시', maxWidth200px늘어나면말줄임처리: 1890, B센터_2카테고리: 4800 },
          { hour: '5시', maxWidth200px늘어나면말줄임처리: 2390, B센터_2카테고리: 3800 },
          { hour: '6시', maxWidth200px늘어나면말줄임처리: 3490, B센터_2카테고리: 4300 },
          { hour: '7시', maxWidth200px늘어나면말줄임처리: 4000, B센터_2카테고리: 2400},
          { hour: '8시', maxWidth200px늘어나면말줄임처리: 3000, B센터_2카테고리: 1398},
          { hour: '9시', maxWidth200px늘어나면말줄임처리: 2000, B센터_2카테고리: 9800},
          { hour: '10시', maxWidth200px늘어나면말줄임처리: 2000, B센터_2카테고리: 9800},
        ]
      };

      const inputLabels = [
        { key: "maxWidth200px늘어나면말줄임처리", color: "#ff710a" },
        { key: "B센터_2카테고리", color: "#ffc737" },
      ];

      const yTicks = [0, 5000, 10000, 15000, 20000];
    return (
        <div className="content">
            <div className="page-tit">
                <h3>{title}</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    {title.map((element, index) => (
                        <em key={index}>{element}</em>
                    ))}
                </span>
            </div>
            <div className='search-wrap'>
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
                <button className="btn bg black">
                    조회
                </button>
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
                        <dd>자동 새로고침</dd>
                    </dl>
                    <SelectBox selectClassName={'nomal'} title={'설정 안함'} options={['30초', '1분', '5분', '10분']} />
                    <button className='refresh'></button>
                </div>
            </div>
            <div className='dash-board'>
                <div className='left-area'>
                    <div className='first'>
                        <h4>주요 상담 지표</h4>
                        <div className='indicator-box'>
                            {indicators.map((indicator, index) => (
                                <dl className='indicator' key={index}>
                                    <dt>
                                        {indicator.onClick ? (
                                            <button className='link' onClick={indicator.onClick}>
                                                {indicator.label}
                                            </button>
                                        ) : (
                                            indicator.label
                                        )}
                                    </dt>
                                    <dd>{indicator.value}</dd>
                                </dl>
                            ))}
                        </div>
                        <div className='graph-box'>
                            <div className='center-inflow'>
                                <span className='chart-tit'><Link to='/' >센터/카테고리별 유입</Link></span>
                                <PieGraph
                                    {...center}
                                    values={center}
                                    labels={centerLabels}
                                    height={173}
                                />
                            </div>
                            <div className='counserl-num'>
                                <span className='chart-tit'>상태별 상담 건수</span>
                                <PieGraph
                                    {...counsel}
                                    values={counsel}
                                    labels={counselLabels}
                                    height={173}
                                />
                            </div>
                            <div className='channel-inflow'>
                                <span className='chart-tit'>고객채널별 유입</span>
                                <PieGraph
                                    {...channel}
                                    values={channel}
                                    labels={channelLabels}
                                    height={173}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='second'>
                        <h4>시간별 상담 인입</h4>
                            <BarGraph
                                {...inputData}
                                labels={inputLabels}
                                yLimit={[0, "auto"]}
                                yTicks={yTicks}
                                legendVisible={true}
                                stackId="hour"
                                barSize={30}
                            />
                    </div>
                </div>
                <div className='right-area'>
                    <div className='counsel-current'>
                        <h4>실시간 상담 현황</h4>
                        <div className='indicator-box'>
                            <div className='waiting'>
                                <dl className='indicator'>
                                    <dt><Link to="" className='link' >진행중</Link></dt>
                                    <dd>24건</dd>
                                </dl>

                                <dl className='indicator'>
                                    <dt><Link to="" className='link' >대기</Link></dt>
                                    <dd>30건</dd>
                                </dl>
                            </div>
                            <div className='remaining'>
                                <dl>
                                    <dt>미배분</dt>
                                    <dd>12건</dd>
                                </dl>
                                <dl>
                                    <dt>배분</dt>
                                    <dd>505건</dd>
                                </dl>
                            </div>
                            <dl className='indicator time'>
                                <dt>평균 대기</dt>
                                <dd>30분 30초</dd>
                            </dl>
                            <dl className='indicator time'>
                                <dt>가장 긴 대기</dt>
                                <dd>30분 30초</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='counselor'>
                        <h4><Link to="" className='link' >상담사 현황</Link></h4>
                        <div className='counselor-state'>
                            <dl className='all'>
                                <dt>접속중</dt>
                                <dd>2,340명</dd>
                            </dl>
                            <ul className='detail'>
                                <li><span><em>상담중</em>1,840명</span></li>
                                <li><span><em>자리비움</em>140명</span></li>
                                <li><span><em>상담종료</em>360명</span></li>
                            </ul>
                        </div>
                        <div className="grid-box">
                            <div className="scroll-box" style={{height:"340px"}}>
                                <table className="table-basic">
                                    <colgroup>
                                        <col width="*" />
                                        <col width="80px" />
                                        <col width="80px" />
                                        <col width="68px" />
                                        <col width="68px" />
                                        <col width="68px" />
                                        <col width="102px" />
                                        <col width="112px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className='align-left'>센터</th>
                                            <th>
                                                <button
                                                    onClick={() => toggleActiveButton('name')}
                                                    className={getButtonClass('name')}
                                                >
                                                    이름<i></i>
                                                </button>
                                            </th>
                                            <th>상태</th>
                                            <th>대기</th>
                                            <th>진행중</th>
                                            <th>종료</th>
                                            <th>최대 상담 수</th>
                                            <th>평균 상담시간</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td className='align-left'>{row.center}</td>
                                                <td>{row.name}</td>
                                                <td>
                                                    <i className={`state ${getStateIconClass(row.state)}`}>{row.state}</i>
                                                </td>
                                                <td>{row.wait}</td>
                                                <td>{row.ing}</td>
                                                <td>{row.end}</td>
                                                <td>{row.max}</td>
                                                <td>{row.averageTime}</td>
                                            </tr>
                                        ))}
                                        {renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
