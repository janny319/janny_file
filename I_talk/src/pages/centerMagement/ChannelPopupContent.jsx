import React from 'react';

function ChannelPopupContent({closePopup}) {
    return (
        <div>
            <div className='pop-content'>
                <div className='sub-tit'>
                    <strong>채널은 중복 사용이 불가합니다.</strong>
                    <p>기존 센터에서 채널 삭제 후 다시 시도하세요.</p>
                </div>
                <div className='input-box colum'>
                    <span>센터 이름</span>
                    <p>휴대폰 구매</p>
                </div>
                <div className='input-box'>
                    <span>채널 이름</span>
                    <p>아이롬 PC</p>
                </div>
                <div className='input-box'>
                    <span>채널 아이디</span>
                    <p>iTalk_PC_Web_64351615</p>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg black">저장</button>
            </div>
        </div>
    );
}

export default ChannelPopupContent;
