import React from 'react';

function CenterManagementTag({ state }) {
    const classState = state === '사용중' ? 'tag-txt' : 'tag-txt disable';
    return (
        <td className="center-management-tag">
            <span className={classState}>{state}</span>
        </td>
    );
}

export default CenterManagementTag;
