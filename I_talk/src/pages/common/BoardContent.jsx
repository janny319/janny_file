function BoardContent({ activeTab, data }) {
    let number, center, title, author, views, date;

    if (data.length === 5) {
        [number, title, author, views, date] = data;
    } else {
        [number, center, title, author, views, date] = data;
    }

    const renderRows = () => {
        if (data.length === 0) {
            console.log('data.length', data.length);
            return (
                <tr>
                    <td colSpan={activeTab === 0 ? '5' : '6'}>
                        <p className="no-data">조회된 데이터가 없습니다.</p>
                    </td>
                </tr>
            );
        } else {
            return activeTab === 0 ? renderContent() : renderContent2();
        }
    };

    const renderContent = () => (
        <tr>
            <td>
                <span className="board-tit">{number}</span>
            </td>
            <td className="notice">
                <span className="new-notice">new</span>
                <span className="board-tit">{title}</span>
            </td>
            <td>
                <span className="board-tit">{author}</span>
            </td>
            <td>
                <span className="board-tit">{views}</span>
            </td>
            <td>
                <span className="board-tit">{date}</span>
            </td>
        </tr>
    );

    const renderContent2 = () => (
        <tr>
            <td>
                <span className="board-tit">{number}</span>
            </td>
            <td>
                <span className="board-tit">{center}</span>
            </td>
            <td className="notice">
                <span className="board-tit ellipsis">{title}</span>
            </td>
            <td>
                <span className="board-tit">{author}</span>
            </td>
            <td>
                <span className="board-tit">{views}</span>
            </td>
            <td>
                <span className="board-tit">{date}</span>
            </td>
        </tr>
    );

    return <tbody>{renderRows()}</tbody>;
}

export default BoardContent;
