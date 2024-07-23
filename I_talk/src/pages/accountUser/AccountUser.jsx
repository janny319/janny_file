import TopSearch from '@/components/TopSearch';
import React, { useRef, useState } from 'react';
import CounsulPagination from '@/pages/counsul/CounsulPagination';
import Tab from '@/components/Tab';
import TopSelect from '@/components/TopSelect';
import PopUp from '@/components/PopUp';
import Registration from '@/pages/accountUser/Registration';
import '@/style/user_management.scss';
import UserInfoAdmin from '@/pages/accountUser/UserInfoAdmin';

const data = [
    {
        center: '신규계약센터 5',
        right: '매니저',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
    {
        center: '신규계약센터 5',
        right: '관리자',
        team: '-',
        name: '강아지',
        id: 'dog1',
        phone: '000-0000-0000',
        login: '2024-04-01 08:50:50',
        asign: '2024-01-01',
        counsul: '-',
        state: '정상',
    },
];

function AccountUser() {
    const title = ['운영관리', '계정관리', '사용자'];
    const lastTitle = title[title.length - 1];
    const [popOpen, setPopOpen] = useState(false);

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // 2024.06.07 삭제 date.length 따라서 selectbox -> list height 조절
    // const dataLength = data.length > 8 ? 'reduction' : '';

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
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [
        { title: '센터', option: '전체' },
        { title: '권한', option: '전체' },
    ];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [
        ['전체', '센터1', '센터2'],
        ['관리자', '매니저', '상담사'],
    ];

    const tabTitles = [
        { title: '전체', number: '0' },
        { title: '관리자', number: '0' },
        { title: '매니저', number: '0' },
        { title: '상담사', number: '0' },
    ].map((tab, index) => ({ ...tab, index }));

    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [asign, setAsign] = useState(false);

    const OpenedPopup = () => {
        console.log('popup open');
        setPopOpen(true);
    };

    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="10">
                        <p className="no-data">조회된 데이터가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };
    const asignClick = () => {
        setAsign(true);
    };
    const closePopup = () => {
        setAsign(false);
        setPopOpen(false);
    };
    return (
        <div className="content">
            <div className="page-tit">
                {/* 2024.05.21 classNmae 수정 */}
                <h3>
                    계정관리<span className="sub-tit">{lastTitle}</span>
                    {/* 2024.06.04 classNmae 수정 */}
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
            {/* <Navigation title={title} /> */}
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
                <TopSearch />
            </div>
            <div className="grid-wrap">
                <div className="right-btn">
                    <button className="btn small ico gray plus" onClick={asignClick}>
                        사용자 등록
                    </button>
                </div>
                {asign && (
                    <PopUp title={'사용자 등록'} alertClassName={'size-popup'} closePopup={closePopup}>
                        <Registration />
                    </PopUp>
                )}
                <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
                {/* 각 탭에 대한 내용 */}
                <div className="tab-cont">
                    {activeTab === 0 && (
                        <div>
                            <div className="grid-box">
                                <div className="scroll-box" style={{ height: '530px' }}>
                                    <table className="table-basic">
                                        <colgroup>
                                            <col width="*" />
                                            <col width="120px" />
                                            <col width="120px" />
                                            <col width="104px" />
                                            <col width="104px" />
                                            <col width="200px" />
                                            <col width="200px" />
                                            <col width="150px" />
                                            <col width="120px" />
                                            <col width="120px" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>센터</th>
                                                <th>권한</th>
                                                <th>팀</th>
                                                <th>
                                                    {/* 2024.07.23 className 수정 */}
                                                    <button
                                                        onClick={() => toggleActiveButton('entryTime')}
                                                        className={getButtonClass('entryTime')}
                                                    >
                                                        이름<i></i>
                                                    </button>
                                                </th>
                                                <th>아이디</th>
                                                <th>휴대폰번호</th>
                                                <th>최근로그인</th>
                                                <th>등록일</th>
                                                <th>최대 상담수</th>
                                                <th>계정상태</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row, index) => (
                                                <tr onClick={OpenedPopup} key={index}>
                                                    <td>{row.center}</td>
                                                    <td>{row.right}</td>
                                                    <td>{row.team}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.id}</td>
                                                    <td>{row.phone}</td>
                                                    <td>{row.login}</td>
                                                    <td>{row.asign}</td>
                                                    <td>{row.counsul}</td>
                                                    <td>{row.state}</td>
                                                </tr>
                                            ))}
                                            {renderRows()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <CounsulPagination />
                            {popOpen && (
                                <PopUp title={'사용자 정보'} alertClassName={'size-popup'} closePopup={closePopup}>
                                    {/* 매니저 권한일 경우 */}
                                    {/* <UserInfo /> */}
                                    {/* 관리자 권한일 경우 */}
                                    <UserInfoAdmin />
                                </PopUp>
                            )}
                        </div>
                    )}
                    {activeTab === 1 && <div>내용2</div>}
                    {activeTab === 2 && <div>내용3</div>}
                    {activeTab === 3 && <div>내용4</div>}
                    {activeTab === 4 && <div>내용5</div>}
                    {activeTab === 5 && <div>내용6</div>}
                </div>
            </div>
        </div>
    );
}

export default AccountUser;
