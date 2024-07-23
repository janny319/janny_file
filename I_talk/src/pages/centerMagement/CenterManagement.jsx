import Navigation from '@/components/Navigation';
import useModal from '@/hooks/useModal';
import CenterDisabledContent from '@/pages/centerMagement/CenterDisabledContent';
import CenterInfo from '@/pages/centerMagement/CenterInfo';
import CenterManagementGrid from '@/pages/centerMagement/CenterManagementGrid';
import CenterRegistor from '@/pages/centerMagement/CenterRegistor';
import ChannelPopupContent from '@/pages/centerMagement/ChannelPopupContent';
import '@/style/center_magement.scss';
import { useState } from 'react';

const CenterManagement = () => {
  const title = ['운영관리', '센터관리'];
  const { open } = useModal();

  const channelBtn = () => {
    open({
      content: <ChannelPopupContent />,
      className: 'size-popup',
      header: '중복 채널 사용 불가',
      type: 'FullModal',
    });
  };

  const centerOpen = () => {
    open({
      content: <CenterDisabledContent />,
      className: 'size-popup',
      header: '중복 채널 사용 불가 안내',
      type: 'FullModal',
    });
  };

  const [view, setView] = useState('default');

  const gridClick = () => {
    setView('info');
  };
  const registrationButton = () => {
    setView('register');
    console.log('test');
  };

  return (
    <div className="content center-wrap">
      <Navigation title={title} />
      <div className="center-content-wrap">
        <div className="center-list">
          <div className="center-btn-wrap">
            <button className="btn" onClick={registrationButton}>
              <span className="txt">신규 등록</span>
            </button>
            <div></div>
          </div>
          <CenterManagementGrid gridClick={gridClick} />
        </div>
        {view === 'info' && (
          <div className="center-list">
            <CenterInfo />
          </div>
        )}
        {view === 'default' && (
          <div className="center-detail-list">
            <p className="txt">센터를 선택하세요.</p>
          </div>
        )}

        {view === 'register' && (
          <div className="center-list">
            <CenterRegistor />
          </div>
        )}
      </div>
      <button className="notice-btn" onClick={channelBtn}>
        중복 채널 사용 불가
      </button>
      <button className="notice-btn" onClick={centerOpen}>
        센터 비활성
      </button>
    </div>
  );
};

export default CenterManagement;
