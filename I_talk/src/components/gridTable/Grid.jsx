import React, { useState } from 'react';
import Table from '@/components/gridTable/Table';
import GridPagination from '@/components/gridTable/GridPagination';

const Grid = ({ OpenedPopup }) => {
    const [activeButton, setActiveButton] = useState({
        entryTime: false,
        waitingTime: false,
        progressTime: false,
    });

    const toggleActiveButton = (buttonName) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [buttonName]: !prevState[buttonName],
        }));
    };

    const data = [
        // Your data here...
    ];

    const headers = [
        { key: 'center', label: '센터' },
        { key: 'category', label: '카테고리' },
        { key: 'channel', label: '유입채널' },
        { key: 'customer', label: '고객번호(이름)' },
        { key: 'entryTime', label: '최초 인입시간', sortable: true },
        { key: 'waitingTime', label: '상담대기시간', sortable: true },
        { key: 'progressTime', label: '상담진행시간', sortable: true },
        { key: 'counselor', label: '상담사(ID)' },
        { key: 'exitType', label: '종료유형' },
    ];

    const colWidths = ['*', '160px', '160px', '180px', '160px', '160px', '180px', '', ''];

    const badgeClassMap = {
        '고객종료': 'mint',
        '시스템종료': 'yellow',
        '차단 종료': 'red',
        '이관 종료': 'gray',
        '상담사 종료': 'green',
    };

    const onPageChange = (page, viewCount) => {
        console.log('onPageChange : ', page, viewCount);
    };

    return (
        <div className="grid-box">
            <Table
                data={data}
                headers={headers}
                colWidths={colWidths}
                activeButton={activeButton}
                toggleActiveButton={toggleActiveButton}
                OpenedPopup={OpenedPopup} // Conditionally pass this prop if defined
                badgeClassMap={badgeClassMap} // Conditionally pass this prop if defined
            />
            <GridPagination totalItems={82} itemsPerPage={10} onPageChange={onPageChange} />
        </div>
    );
};

export default Grid;
