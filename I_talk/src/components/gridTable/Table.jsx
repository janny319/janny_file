// GridTable.js
import React from 'react';
import PropTypes from 'prop-types';

const GridTable = ({ data, headers, colWidths, activeButton, toggleActiveButton, OpenedPopup, badgeClassMap }) => {
    const getBadgeClass = (exitType) => {
        return badgeClassMap ? badgeClassMap[exitType] || '' : '';
    };

    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan={headers.length}>
                        <p className="no-data">조회된 데이터가 없습니다.</p>
                    </td>
                </tr>
            );
        }
        return data.map((row, index) => (
            <tr onClick={OpenedPopup ? () => OpenedPopup(row) : undefined} key={index}>
                <td>{row.center}</td>
                <td>{row.category}</td>
                <td>{row.channel}</td>
                <td>{row.customer}</td>
                <td>{row.entryTime}</td>
                <td>{row.waitingTime}</td>
                <td>{row.progressTime}</td>
                <td>{row.counselor}</td>
                <td>
                    <i className={`badge ${getBadgeClass(row.exitType)}`}>{row.exitType}</i>
                </td>
            </tr>
        ));
    };

    return (
        <div className="scroll-box">
            <table className="table-basic">
                <colgroup>
                    {colWidths.map((width, index) => (
                        <col key={index} width={width} />
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header.key}>
                                {header.sortable ? (
                                    <button
                                        onClick={() => toggleActiveButton(header.key)}
                                        className={`order-filter ${activeButton[header.key] ? 'active' : ''}`}
                                    >
                                        {header.label}<i></i>
                                    </button>
                                ) : (
                                    header.label
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
};

GridTable.defaultProps = {
    badgeClassMap: null,
    OpenedPopup: null,
};

GridTable.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            sortable: PropTypes.bool,
        })
    ).isRequired,
    colWidths: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeButton: PropTypes.object.isRequired,
    toggleActiveButton: PropTypes.func.isRequired,
    OpenedPopup: PropTypes.func,
    badgeClassMap: PropTypes.object,
};

export default GridTable;
