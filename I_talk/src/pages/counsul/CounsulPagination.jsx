import React, { useState } from 'react';
import '@/style/pagination.scss';
import Sorting from '@/components/Sorting';
import Pagination from '@/components/Pagination';

function CounsulPagination() {
    // 2024.06.07 dataLength 삭제
    const [currentPage, setCurrentPage] = useState(2); // 현재 페이지 상태

    // 이전 페이지로 이동
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // 다음 페이지로 이동
    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="paging-wrap">
            <Sorting />
            {/* 2024.06.07 dataLength 삭제 */}
            <Pagination />
        </div>
    );
}

export default CounsulPagination;
