import TopSearch from './TopSearch';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '@/components/Tab';
import Grid from '@/components/Grid';
import PopUp from '@/components/PopUp';
import ChannelPopupContent from '@/pages/centerMagement/ChannelPopupContent';
import Navigation from '@/components/Navigation';
import '@/style/user_management.scss';
import Pagination from '@/components/table/Pagination';
import Table from '@/components/table/Table';
import Registration from '@/pages/operate/account/manager/Registration';
import UserInfoAdmin from '@/pages/operate/account/manager/UserInfoAdmin';

function AccountUser() {
  const title = ['운영관리', '계정관리', '사용자'];

  const { managerList, searchParam } = useSelector((state) => state.manager);

  const lastTitle = title[title.length - 1];
  const [popOpen, setPopOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [activeButton, setActiveButton] = useState({
    entryTime: false,
    waitingTime: false,
    progressTime: false,
  });

  const toggleActiveButton = (buttonName) => {
    setActiveButton((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

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

  // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
  const dropdownButtonContents = [
    { title: '센터', option: '전체' },
    { title: '권한', option: '전체' },
    { title: '검색조건', option: '이름' },
  ];

  // 각 드롭다운 메뉴에 대한 내용을 배열로 관리
  const dropdownContents = [
    ['전체', '센터1', '센터2'],
    ['관리자', '매니저', '상담사',],
    ['이름', '아이디', '휴대폰번호'],
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
  const dropdownRefs = useRef(Array.from({ length: 3 }, () => React.createRef()));
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
        <h3>
          계정관리<span className="last-tit">{lastTitle}</span>
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
      <TopSearch />
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
              
              </div>
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
