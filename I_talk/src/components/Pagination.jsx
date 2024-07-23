import React, { useState } from 'react';
import '@/style/pagination.scss';
import firstPage from '@/assets/icon/ico_page_first.svg';
import prevPage from '@/assets/icon/ico_page_prev.svg';
import lastPage from '@/assets/icon/ico_page_last.svg';
import nextPage from '@/assets/icon/ico_page_next.svg';
import Select from '@/components/input/Select';

function Pagination({ itemsPerPage = 10, totalItems = 50, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewCount, setViewCount] = useState(itemsPerPage);
    const totalPages = Math.ceil(totalItems / viewCount);

    const getCurrentGroup = () => {
        return Math.floor((currentPage - 1) / 5);
    };

    const gotoPage = (page) => {
        setCurrentPage(page);
        onPageChange(page, viewCount);
    };

    const gotoFirstPage = () => gotoPage(1);
    const gotoLastPage = () => gotoPage(totalPages);
    const gotoNextGroup = () => {
        const currentGroupStartPage = getCurrentGroup() * 5 + 1;
        let nextGroupStartPage = currentGroupStartPage + 5;
        nextGroupStartPage = Math.min(nextGroupStartPage, totalPages); // 총 페이지 수를 넘지 않도록 조정
        gotoPage(nextGroupStartPage > currentPage ? nextGroupStartPage : totalPages);
    };
    const gotoPrevGroup = () => {
        const prevGroupStartPage = getCurrentGroup() * 5;
        gotoPage(prevGroupStartPage);
    };

    const getPageButtons = () => {
        const buttons = [];
        const startPage = getCurrentGroup() * 5 + 1;
        const endPage = Math.min(startPage + 4, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li key={i}>
                    <button
                        key={i}
                        className={i === currentPage ? 'on' : ''}
                        onClick={() => gotoPage(i)}
                        disabled={i === currentPage}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        return buttons;
    };

    return (
        <div className="paging-box">
            {/* 2024.06.07 disabled 추가 */}
            <button className="first-page" onClick={gotoFirstPage} disabled={true}>
                <img src={firstPage} alt="처음페이지로" />
            </button>
            <button className="prev-page" onClick={gotoPrevGroup} disabled={currentPage - 5 < 1}>
                <img src={prevPage} alt="이전페이지로" />
            </button>
            <ul>
                {totalItems > 0 ? (
                    getPageButtons()
                ) : (
                    <button className="on" disabled>
                        {currentPage}
                    </button>
                )}
            </ul>
            <button className="next-page" onClick={gotoNextGroup} disabled={getCurrentGroup() * 5 + 1 + 4 > totalPages}>
                <img src={nextPage} alt="다음페이지로" />
            </button>
            <button className="last-page" onClick={gotoLastPage}>
                <img src={lastPage} alt="마지막페이지로" />
            </button>
        </div>
    );
}

export default Pagination;
