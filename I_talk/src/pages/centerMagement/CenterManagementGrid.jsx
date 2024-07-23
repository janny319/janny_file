import Pagination from '@/components/table/Pagination';
import Table from '@/components/table/Table';

const CenterManagementGrid = ({ gridClick }) => {
    const tableColums = [
        // 240604 width * 수정
        { width: '*', value: 'center', label: '센터' },
        { width: '150px', value: 'centerId', label: '센터 ID' },
        { width: '166px', value: 'centerDesc', label: '센터 소개' },
        { width: '112px', value: 'channel', label: '고객 채널' },
        { width: '112px', value: 'status', label: '상태', tdClass: 'center-management-tag' },
    ];
    const handleDetail = () => {
        gridClick();
    };
    const rederRow = (list) => {
        return list?.map((row) => {
            return {
                ...row,
                center: <span className="board-tit">{row.center}</span>,
                centerId: <span className="board-tit">{row.centerId}</span>,
                centerDesc: <span className="board-tit">{row.centerDesc}</span>,
                channel: <span className="board-tit ellipsis">{row.channel}</span>,
                status: <span className={row.status === '사용중' ? 'tag-txt' : 'tag-txt disable'}>{row.status}</span>,
            };
        });
    };

    const listData = [
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '비활성',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
        {
            center: '휴대폰 구매',
            centerId: 'CT0000000001',
            centerDesc: '휴대폰 구입 관련 고객문의 센터 말줄임 말줄임',
            channel: '2',
            status: '사용중',
        },
    ];
    return (
        <div className="grid-wrap center-management-grid">
            <div className="grid-box">
                <div className="scroll-box">
                    <Table
                        tableColums={tableColums}
                        trClass={'center-management-tr'}
                        handleDetail={handleDetail}
                        data={listData}
                        rederRow={rederRow}
                    />
                </div>
            </div>
            {/* 240604 pagination 수정 */}
            <div className="paging-wrap">
                <Pagination />
            </div>
        </div>
    );
};

export default CenterManagementGrid;
