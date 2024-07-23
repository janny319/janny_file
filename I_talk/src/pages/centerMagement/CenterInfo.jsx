import React, { useState } from 'react';
import CenterManagementTextBox from '@/pages/centerMagement/CenterManagementTextBox';
import CenterManagementReadOnlyBox from '@/pages/centerMagement/CenterManagementReadOnlyBox';
import CenterManagementRadioBox from '@/pages/centerMagement/CenterManagementRadioBox';
import ChannelDetailInfo from '@/pages/centerMagement/ChannelDetailInfo';
import CenterManagementTextBoxValidation from '@/pages/centerMagement/CenterManagementTextBoxValidation';

function CenterInfo() {
    const [channels, setChannels] = useState([]);
    const [validation, setValidation] = useState(false);
    const [centerName, setCenterName] = useState('');
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

    return (
        <>
            <div className="center-list-title">
                <strong className="center-info">센터 정보</strong>
                <button className="center-info-reset">초기화</button>
            </div>
            <div className="center-detail-wrap">
                <CenterManagementTextBoxValidation
                    onChange={onChange}
                    centerName={centerName}
                    setCenterName={setCenterName}
                    title={'센터 이름'}
                    placeholder={'번호 이동'}
                />
                <CenterManagementReadOnlyBox title={'센터 ID'} data={'CT0000000000'} />
                <CenterManagementTextBox title={'센터 소개'} placeholder={'센터에 관한 소개나 설명을 작성하세요.'} />
                <div className="client-channel">
                    {/* 240521 클래스 삭제 */}
                    <span>고객 채널</span>
                    {/* 240521 클래스 삭제 */}
                    <div className="channel-wrap">
                        <div className="channel-num">
                            <span>{channels.length ? `${channels.length}개` : '등록된 채널 없음'}</span>
                        </div>
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
                <div className="info-textbox">
                    <span>상태</span>
                    {/* 240521 클래스 삭제 */}
                    <div className="radio-btn-wrap">
                        <CenterManagementRadioBox radioID={'using'} name={'state'} title={'비활성'} />
                        <CenterManagementRadioBox radioID={'disabled'} name={'state'} title={'상태'} />
                    </div>
                </div>
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

export default CenterInfo;
