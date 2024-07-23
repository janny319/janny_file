import Pagination from '@/components/Pagination';
import Tab from '@/components/Tab';
import TopSearch from '@/components/TopSearch';
import TopSelect from '@/components/TopSelect';
import React, { useRef, useState } from 'react';
import '@/style/statist.scss';
import { Link } from 'react-router-dom';

const data = [
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        center: '가입센터',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
    {
        num: '9',
        center: '가입센터',
        tit: '[공지] 서버 작업으로 인한 시스템 점검',
        writer: '김관리',
        hits: 'N',
        date: 'YYYY-MM-DD',
    },
];

function NoticeManagement() {
    const tabTitles = [{ title: '전체공지' }, { title: '센터공지 ' }];
    const [isOpen, setIsOpen] = useState([false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));

    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태
    const handleTabClick = (index) => {
        setActiveTab(index);
        setlastTitle(tabTitles[index].title);
    };

    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '검색조건', option: '제목' }];

    // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
    const dropdownContents = [['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']];

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
                <h3>공지사항 관리</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>공지사항 관리</em>
                </span>
            </div>
            <Tab className={'statist'} tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
            <div className="tab-cont">
                {activeTab === 0 && (
                    <div className="statist-cont">
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
                            {/* 2024.06.07 tit 추가 */}
                            <TopSearch tit={'검색어 입력'} />
                        </div>

                        <div className="grid-wrap">
                            <div className="btn-list right">
                                {/* <button className="btn small ico gray plus">공지사항 등록</button> */}
                                <Link className="btn small ico gray plus" to={'/NoticeAssign'}>
                                    공지사항 등록
                                </Link>
                            </div>
                            <div className="grid-con">
                                <div className="grid-box">
                                    <table className="table-basic">
                                        <colgroup>
                                            <col width="80px" />
                                            <col width="*" />
                                            <col width="120px" />
                                            <col width="120px" />
                                            <col width="180px" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>번호</th>
                                                <th className="align-left">제목</th>
                                                <th>작성자</th>
                                                <th>조회수</th>
                                                <th>등록일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Announcement - 공지사항 관리 | 공지사항 상세 만들어놓음  */}
                                            {data.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.num}</td>
                                                    <td className="align-left">{row.tit}</td>
                                                    <td>{row.writer}</td>
                                                    <td>{row.hits}</td>
                                                    <td>{row.date}</td>
                                                </tr>
                                            ))}
                                            {renderRows()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="paging-wrap">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="statist-cont">
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
                            <TopSearch tit={'검색어 입력'} />
                        </div>

                        <div className="grid-wrap">
                            <div className="btn-list right">
                                {/* <button className="btn small ico gray plus">공지사항 등록</button> */}
                                <Link className="btn small ico gray plus" to={'/NoticeAssign'}>
                                    공지사항 등록
                                </Link>
                            </div>
                            <div className="grid-con">
                                <div className="grid-box">
                                    <table className="table-basic">
                                        <colgroup>
                                            <col width="80px" />
                                            <col width="170px" />
                                            <col width="*" />
                                            <col width="120px" />
                                            <col width="120px" />
                                            <col width="180px" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>번호</th>
                                                <th>센터</th>
                                                <th className="align-left">제목</th>
                                                <th>작성자</th>
                                                <th>조회수</th>
                                                <th>등록일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Announcement - 공지사항 관리 | 공지사항 상세 만들어놓음  */}
                                            {data.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.num}</td>
                                                    <td>{row.center}</td>
                                                    <td className="align-left">{row.tit}</td>
                                                    <td>{row.writer}</td>
                                                    <td>{row.hits}</td>
                                                    <td>{row.date}</td>
                                                </tr>
                                            ))}
                                            {renderRows()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="paging-wrap">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NoticeManagement;
