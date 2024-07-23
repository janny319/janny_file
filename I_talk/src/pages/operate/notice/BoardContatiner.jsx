import Pagination from '@/components/table/Pagination';
import Table from '@/components/table/Table';
import SearchBox from '@/pages/operate/notice/SearchBox';
import { setSearchNoticeParam } from '@/store/notice';
import '@/style/notice_popup.scss';
import { useDispatch, useSelector } from 'react-redux';

const BoardContatiner = ({ setIsDetail }) => {
  const dispatch = useDispatch();
  const { noticeList, searchNoticeParam } = useSelector((state) => state.notice);

  const tableColums =
    searchNoticeParam.isCenter === 'N'
      ? [
          { width: '110px', value: 'seq', label: '번호' },
          { width: '318px', value: 'title', label: '제목', tdClass: 'notice' },
          { width: '110px', value: 'regUser', label: '작성자' },
          { width: '110px', value: 'views', label: '조회수' },
          { width: '110px', value: 'regDate', label: '등록일' },
        ]
      : [
          { width: '60px', value: 'seq', label: '번호' },
          { width: '90px', value: 'centerName', label: '센터명' },
          { width: '200px', value: 'title', label: '제목', tdClass: 'notice' },
          { width: '136px', value: 'regUser', label: '작성자' },
          { width: '136px', value: 'views', label: '조회수' },
          { width: '136px', value: 'regDate', label: '등록일' },
        ];

  const rederRow = (list) => {
    return list?.map((row) => {
      return {
        ...row,
        seqNo: row.seq,
        seq: <span className="board-tit">{row.seq}</span>,
        centerName: <span className="board-tit">{row.centerName}</span>,
        title: (
          <>
            {row.readYn === 'N' && <span className="new-notice">new</span>}
            <span className="board-tit">{row.title}</span>
          </>
        ),
        regUser: <span className="board-tit">{row.regUser}</span>,
        views: <span className="board-tit">{row.views}</span>,
        regDate: <span className="board-tit">{row.regDate}</span>,
      };
    });
  };

  const onPageChange = (page, viewCount) => {
    dispatch(
      setSearchNoticeParam({
        page: (page - 1) * viewCount,
        size: viewCount,
      })
    );
  };

  const handleDetail = (item) => {
    setIsDetail(item.seqNo);
  };

  return (
    <div className="tab-cont">
      <div className="tab-con-tit">
        <SearchBox />
      </div>
      <div>
        <Table
          tableColums={tableColums}
          tableClass={'table-board'}
          handleDetail={handleDetail}
          data={noticeList.noticeMainInfoList}
          rederRow={rederRow}
        />
        <Pagination
          itemsPerPage={searchNoticeParam.size ?? 10}
          totalItems={noticeList.totalCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default BoardContatiner;
