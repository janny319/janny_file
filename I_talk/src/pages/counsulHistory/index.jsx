import Tap from '@/components/Tab';
import TopSearch from '@/components/counsulHistory/TopSearch';
import icoDown from '@/assets/icon/ico_down.svg';
import Grid from '@/components/counsulHistory/Grid';
import { CHAT_STAT } from '@/constants/common';
import { setSearchParam } from '@/store/consult';
import '@/style/tab.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '@/components/Tab';

const CounsulHistory = () => {
  const title = '상담이력';

  const { consultList } = useSelector((state) => state.consult);
  const dispatch = useDispatch();
  const tabTitles = [
    { title: '전체', number: consultList.totalCnt ?? 0, value: '' },
    { title: '고객종료', number: consultList.userCloseCnt ?? 0, value: CHAT_STAT.CUSTOMER_END },
    {
      title: '상담사 종료',
      number: consultList.counselorCloseCnt ?? 0,
      value: CHAT_STAT.AGENT_END,
    },
    { title: '시스템 종료', number: consultList.systemCloseCnt ?? 0, value: CHAT_STAT.SYSTEM_END },
    {
      title: '이관 종료',
      number: consultList.transferCloseCnt ?? 0,
      value: CHAT_STAT.TRANSFER_END,
    },
    { title: '차단 종료', number: consultList.blockCloseCnt ?? 0, value: CHAT_STAT.BLOCK_END },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, tab) => {
    dispatch(setSearchParam({ chatStat: tab.value }));
    setActiveTab(index);
  };

  return (
    <div className="content">
      <div className="page-tit">
        <h3>{title}</h3>
        <span className="navi">
          <em>
            <i className="home"></i>
          </em>
          <em>{title}</em>
        </span>
      </div>
      <TopSearch />
      <div className="grid-wrap">
        <div className="right-btn">
          <button className="btn small line ico gray down">Excel 다운로드</button>
        </div>
        <Tab tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />
        <div className="tab-cont">
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default CounsulHistory;
