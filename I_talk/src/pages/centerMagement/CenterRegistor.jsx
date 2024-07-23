import React, { useState } from 'react';
import CenterManagementTextBox from '@/pages/centerMagement/CenterManagementTextBox';
import ChannelDetailInfo from '@/pages/centerMagement/ChannelDetailInfo';
import CenterManagementTextBoxValidation from '@/pages/centerMagement/CenterManagementTextBoxValidation';
import PopUp from '@/components/PopUp';

function CenterRegistor() {
    const [channels, setChannels] = useState([]);
    const [validation, setValidation] = useState(false);
    const [centerName, setCenterName] = useState('');
    const [alert, setAlert] = useState(false); // alert state add
    const className = channels.length > 4 ? ' overflow' : ''; //240604 body scroll 방지

    const onChange = (e) => {
        const { value } = e.target;
        setCenterName(value);
    };

    const addChannel = () => {
        setChannels([...channels, { name: '', selectValue: '' }]);
        console.log('addChannel', channels);
    };

    const ChannelChange = (index, type, value) => {
        console.log('ChannelChange', index, type, value);
        const newChannels = [...channels];
        newChannels[index][type] = value;
        setChannels(newChannels);
    };

    const removeChannel = (index) => {
        console.log('removeChannel', index, channels);
        const newChannels = channels.filter((_, i) => i !== index);
        setChannels(newChannels);
    };

    const saveBtnClick = () => {
        if (!centerName) {
            setValidation(true);
        } else {
            setValidation(false);
        }
    };

    const reset = () => {
        console.log('reset');
        setAlert(true);
    };
    const closePopup = () => {
        setAlert(false);
    };
    const closedAlert = () => {
        setAlert(true);
    };

    return (
        <>
            <div className="center-list-title">
                <strong className="center-info">센터 신규등록</strong>
                <button className="center-info-reset" onClick={reset}>
                    초기화
                </button>
            </div>
            {alert && (
                <>
                    <PopUp closePopup={closePopup} alertClassName={'alert-wrap'}>
                        <p className="alert-txt">
                            수정사항이 저장되지 않았습니다.
                            <br /> 이 페이지를 나가시겠습니까?
                        </p>
                        <div className="alert-btn-wrap">
                            <button className="alert-btn" onClick={closedAlert}>
                                취소
                            </button>
                            <button className="alert-btn gray" onClick={closePopup}>
                                종료
                            </button>
                        </div>
                    </PopUp>
                </>
            )}
            <div className="center-detail-wrap">
                <CenterManagementTextBoxValidation
                    onChange={onChange}
                    centerName={centerName}
                    setCenterName={setCenterName}
                    title={'센터 이름'}
                    placeholder={'최대 20자, 한글/영문/숫자 입력가능'}
                />
                <CenterManagementTextBox title={'센터 소개'} placeholder={'센터에 관한 소개나 설명을 작성하세요.'} />
                <div className="client-channel">
                    <span className="client-channel-txt">고객 채널</span>
                    <div className="channel-wrap only-box">
                        {/* <div className="channel-num">
                            <span>{channels.length ? `${channels.length}개` : '등록된 채널 없음'}</span>
                        </div> */}
                        <button onClick={addChannel} className="channel-add">
                            <span>고객 채널 추가</span>
                        </button>
                    </div>
                </div>
                {channels.length !== 0 && (
                    <div className="channel-detail-wrap">
                        <div className="channel-tit">
                            {/* <span className="name">이름</span> 240604 삭제 */}
                            <span className="id">아이디</span>
                        </div>
                        <div className={`channel-list${className}`}>
                            {channels.map((channel, index) => (
                                <ChannelDetailInfo
                                    key={index}
                                    channel={channel}
                                    onChange={(type, value) => ChannelChange(index, type, value)}
                                    onRemove={() => removeChannel(index)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* 2024.05.17 버튼 클래스 수정 */}
            <div className="btn-list right">
                {validation && <div className="validation-error">필수 정보를 모두 입력하세요.</div>}
                <button type="button" className="btn bg black" onClick={saveBtnClick}>
                    저장
                </button>
            </div>
            {/* 2024.05.17 버튼 클래스 수정 */}
        </>
    );
}

export default CenterRegistor;
