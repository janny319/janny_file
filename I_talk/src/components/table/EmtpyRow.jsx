import React from 'react';

const EmtpyRow = ({ list, tableColums }) => {
  if (list.length === 0) {
    return (
      <tr>
        <td colSpan={`${tableColums.length}`}>
          <p className="no-data">조회된 데이터가 없습니다.</p>
        </td>
      </tr>
    );
  }
};

export default EmtpyRow;
