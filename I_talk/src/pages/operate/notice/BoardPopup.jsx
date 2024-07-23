import { getNoticeListApi } from '@/api/operate/notice/index';
import Tab from '@/components/Tab';
import BoardContatiner from '@/pages/operate/notice/BoardContatiner';
import NoticeDetail from '@/pages/operate/notice/NoticeDetail';
import { setNoticeList, setSearchNoticeParam } from '@/store/notice';
import '@/style/notice_popup.scss';
import '@/style/notice_page.scss';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BoardPopup = () => {
  const tabTitles = [{ title: '전체공지' }, { title: '센터공지' }];
  const [activeTab, setActiveTab] = useState(0);
  const [isDetail, setIsDetail] = useState(false);
  const dispatch = useDispatch();
  const { searchNoticeParam } = useSelector((state) => state.notice);

  const handleTabClick = (index, tab) => {
    setActiveTab(index);
    dispatch(setSearchNoticeParam({ isCenter: tab.title === '센터공지' ? 'Y' : 'N' }));
  };

  const getNoticeList = async (params) => {
    const res = await getNoticeListApi(params);
    if (res.header.resultCode === 0) {
      const noticeList = res.data.noticeMainInfoList.map((item) => {
        return { ...item, regDate: dayjs(item.regDate).format('YYYY-MM-DD') };
      });

      dispatch(setNoticeList({ ...res.data, noticeMainInfoList: noticeList }));
    }
  };

  useEffect(() => {
    getNoticeList(searchNoticeParam);
  }, [searchNoticeParam]);

  return isDetail ? (
    <NoticeDetail isDetail={isDetail} setIsDetail={setIsDetail} />
  ) : (
    <div className="common-notice">
      <Tab
        className={'common'}
        tabTitles={tabTitles}
        handleTabClick={handleTabClick}
        activeTab={activeTab}
      />
      <BoardContatiner setIsDetail={setIsDetail} />
    </div>
  );
};

export default BoardPopup;
