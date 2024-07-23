import React from 'react';
import '@/style/board.scss';

function BoardHeader({ width, title }) {
    return (
        <>
            <colgroup>
                {width.map((width, index) => (
                    <col key={index} width={width} />
                ))}
            </colgroup>
            <thead>
                <tr>
                    {title.map((title, index) => (
                        <th key={index} style={{ width: width[index] + 'px' }}>
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
}

export default BoardHeader;
