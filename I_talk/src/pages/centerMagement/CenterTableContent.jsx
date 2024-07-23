import React from 'react';
import CenterManagementTag from '@/pages/centerMagement/CenterManagementTag';

function CenterTableContent({ data, gridClick }) {
    const [center, centerID, centerIntro, channel, state] = data;

    return (
        <tbody>
            <tr className="center-management-tr" onClick={gridClick}>
                <td>
                    <span className="board-tit">{center}</span>
                </td>
                <td>
                    <span className="board-tit">{centerID}</span>
                </td>
                <td>
                    <span className="board-tit ellipsis">{centerIntro}</span>
                </td>
                <td>
                    <span className="board-tit">{channel}</span>
                </td>
                <CenterManagementTag state={state} />
            </tr>
        </tbody>
    );
}

export default CenterTableContent;
