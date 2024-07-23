import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@/components/Pagination';

const GridPagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    return (
        <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} onPageChange={onPageChange} />
    );
};

GridPagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default GridPagination;
