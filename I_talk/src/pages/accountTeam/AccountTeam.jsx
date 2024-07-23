import TopSelect from '@/components/TopSelect';
import React, { useRef, useState } from 'react';
import '@/style/user_team.scss';
import Pagination from '@/components/Pagination';
import TeamInfo from '@/pages/accountTeam/TeamInfo';
import TeamAsign from '@/pages/accountTeam/TeamAsign';

function AccountTeam(props) {
    const title = ['운영관리', '계정관리', '팀'];
    const lastTitle = title[title.length - 1];
    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [asign, setAsign] = useState(false);

    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '센터', option: '전체' }];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [['전체', '센터1', '센터2']];

    const data = [
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
        {
            center: '신규계약센터',
            team: '계약1팀',
            id: 'TM0000000000',
            person: '5',
        },
    ];
    // 24.05.20 teamInfoClick 수정
    const teamInfoClick = () => {
        setAsign(false);
    };
    const asignClick = () => {
        setAsign(true);
    };
    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">조회된 데이터가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };
    return (
        <div className="content">
            <div className="page-tit">
                {/* 2024.05.21 classNmae 수정 */}
                <h3>
                    계정관리<span className="sub-tit">{lastTitle}</span>
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
                <i className="ico-bar"></i>
                <button className="btn bg black">조회</button>
            </div>
            <div className="both-wrap">
                <div className="grid-wrap">
                    <div className="right-btn">
                        <button className="btn small ico gray plus" onClick={asignClick}>
                            팀 등록
                        </button>
                    </div>
                    {/* {asign && (
                        <PopUp title={'사용자 등록'} alertClassName={'size-popup'} closePopup={closePopup}>
                            <Registration />
                        </PopUp>
                    )} */}
                    <div className="grid-con">
                        <div className="grid-box">
                            <div className="scroll-box">
                                <table className="table-basic">
                                    <colgroup>
                                        <col width="136px" />
                                        <col width="100px" />
                                        <col width="*" />
                                        <col width="80px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>센터</th>
                                            <th>권한</th>
                                            <th>팀</th>
                                            <th>아이디</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            // 24.05.20 onClick 수정
                                            <tr onClick={teamInfoClick} key={index}>
                                                <td>{row.center}</td>
                                                <td>{row.team}</td>
                                                <td>{row.id}</td>
                                                <td>{row.person}</td>
                                            </tr>
                                        ))}
                                        {renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="paging-wrap">
                            <Pagination />
                        </div>
                    </div>
                </div>
                {asign ? <TeamAsign /> : <TeamInfo />}
            </div>
        </div>
    );
}

export default AccountTeam;
