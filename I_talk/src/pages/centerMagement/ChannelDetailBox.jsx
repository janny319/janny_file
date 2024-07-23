import SelectBox from '@/components/SelectBox';
import React from 'react';

function ChannelDetailBox({ name, selectValue, onNameChange, onRemove }) {
    return (
        <div className="channel-detail">
            {/* <input
                type="text"
                placeholder="이름을 입력하세요."
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
            /> 240604 삭제*/}
            <SelectBox
                selectClassName={'center-select'}
                value={selectValue}
                title={'옵션 1'}
                options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
            />
            <button className="channel-delete" onClick={onRemove}></button>
        </div>
    );
}

export default ChannelDetailBox;
