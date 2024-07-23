import EmtpyRow from '@/components/table/EmtpyRow';
import { SORT_TYPE } from '@/constants/common';
import React, { useEffect, useState } from 'react';

const Table = ({ tableColums, handleDetail, data, rederRow, handleSort, tableClass, trClass }) => {
  const [tableList, setTableList] = useState(data);
  const defaultValue = Object.fromEntries(
    tableColums.filter((item) => item.sorted).map((column) => [column.value, SORT_TYPE.NONE])
  );
  const [activeButton, setActiveButton] = useState(defaultValue);
  const toggleActiveButton = (buttonName) => {
    setActiveButton((prevState) => ({
      ...defaultValue,
      [buttonName]:
        prevState[buttonName] === SORT_TYPE.NONE
          ? SORT_TYPE.ASC
          : prevState[buttonName] === SORT_TYPE.ASC
          ? SORT_TYPE.DESC
          : SORT_TYPE.NONE,
    }));
    handleSort(
      activeButton[buttonName] === SORT_TYPE.NONE
        ? SORT_TYPE.ASC
        : activeButton[buttonName] === SORT_TYPE.ASC
        ? SORT_TYPE.DESC
        : SORT_TYPE.NONE,
      buttonName
    );
  };

  useEffect(() => {
    setTableList(data);
  }, [data]);

  const headerKey = tableColums.map((header) => header.value);

  return (
    <table className={`table-basic ${tableClass}`}>
      <colgroup>
        {tableColums.map((item, idx) => {
          return <col width={item.width} key={idx} />;
        })}
      </colgroup>
      <thead>
        <tr>
          {tableColums.map((item, idx) => {
            return item.sorted ? (
              <th key={idx}>
                <button
                  onClick={() => toggleActiveButton(item.value)}
                  className={`${
                    activeButton[item.value] === SORT_TYPE.ASC
                      ? 'order-filter active'
                      : activeButton[item.value] === SORT_TYPE.NONE
                      ? ''
                      : 'order-filter'
                  }`}
                >
                  {item.label}
                  <i></i>
                </button>
              </th>
            ) : (
              <th key={idx}>{item.label}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rederRow(tableList).map((item, index) => (
          <tr
            key={index}
            onClick={() => {
              handleDetail && handleDetail(item);
            }}
            className={trClass}
          >
            {tableColums.map((key, idx) => (
              <td key={idx} className={key.tdClass}>
                {item[key.value]}
              </td>
            ))}
          </tr>
        ))}
        <EmtpyRow list={tableList} tableColums={tableColums} />
      </tbody>
    </table>
  );
};

export default Table;
