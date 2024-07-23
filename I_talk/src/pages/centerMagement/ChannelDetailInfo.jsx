import React from 'react';
import ChannelDetailBox from '@/pages/centerMagement/ChannelDetailBox';

function ChannelDetailInfo({ channel, index, onChange, onRemove }) {
    return (
        <ChannelDetailBox
            name={channel.name}
            selectValue={channel.selectValue}
            id={index}
            onNameChange={(value) => onChange('name', value)}
            onIdChange={(value) => onChange('selectValue', value)}
            onRemove={onRemove}
        />
    );
}

export default ChannelDetailInfo;
