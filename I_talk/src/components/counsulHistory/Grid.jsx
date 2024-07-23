import CounsulPopup from '@/components/counsulHistory/popup/CounsulPopup';
import Pagination from '@/components/table/Pagination';
import Table from '@/components/table/Table';
import { CHATHISTORY_ACRONYMS, CHAT_STAT, CHAT_STATUS, COLORS } from '@/constants/common';
import useModal from '@/hooks/useModal';
import { setSearchParam } from '@/store/consult';
import '@/style/grid.scss';
import { useDispatch, useSelector } from 'react-redux';

const Grid = () => {
  const dispatch = useDispatch();
  const { open } = useModal();
  const { consultList, searchParam } = useSelector((state) => state.consult);

  const handleDetail = (item) => {
    consultList.historyList.length > 0 &&
      open({
        content: <CounsulPopup item={item} />,
        header: '상담이력 상세',
        type: 'FullModal',
      });
  };

  const formatMinSec = (sec) => {
    let minSecStr = '';
    let min = Math.floor(sec / 60);
    let second = sec % 60;
    minSecStr = min > 0 ? min + '분 ' : '';
    minSecStr = minSecStr + second + '초';
    return minSecStr;
  };

  const formatDateTime = (dateTime) => {
    let dateTimeStr = '';
    if (dateTime) {
      dateTimeStr =
        dateTime.substring(0, 4) +
        '-' +
        dateTime.substring(4, 6) +
        '-' +
        dateTime.substring(6, 8) +
        ' ' +
        dateTime.substring(8, 10) +
        ':' +
        dateTime.substring(10, 12);
    }
    return dateTimeStr;
  };

  const getBadgeClass = (exitType) => {
    switch (exitType) {
      case CHAT_STATUS.USER_EXITED_WITH_POST_PROCESSING:
      case CHAT_STATUS.USER_EXITED:
        return COLORS.MINT;
      case CHAT_STATUS.AUTO_END_DUE_TO_NO_RESPONSE:
      case CHAT_STATUS.AUTO_END_WITH_POST_PROCESSING:
        return COLORS.YELLOW;
      case CHAT_STATUS.BLOCKED_EXIT:
        return COLORS.RED;
      case CHAT_STATUS.AGENT_TRANSFER:
        return COLORS.GRAY;
      case CHAT_STATUS.AGENT_EXITED:
        return COLORS.GREEN;
      default:
        return '';
    }
  };

  const getTabTotalCnt = (chatState) => {
    switch (chatState) {
      case CHAT_STAT.ALL:
        return consultList?.totalCnt;
      case CHAT_STAT.CUSTOMER_END:
        return consultList.userCloseCnt;
      case CHAT_STAT.AGENT_END:
        return consultList.counselorCloseCnt;
      case CHAT_STAT.SYSTEM_END:
        return consultList.systemCloseCnt;
      case CHAT_STAT.TRANSFER_END:
        return consultList.transferCloseCnt;
      case CHAT_STAT.BLOCK_END:
        return consultList.blockCloseCnt;

      default:
        return consultList?.totalCnt;
    }
  };

  const onPageChange = (page, viewCount) => {
    dispatch(
      setSearchParam({
        start: (page - 1) * viewCount,
        count: viewCount,
      })
    );
  };

  const tableColums = [
    { width: '', value: 'centerId', label: '센터' },
    { width: '160px', value: 'category', label: '카테고리' },
    { width: '160px', value: 'channel', label: '유입채널' },
    { width: '160px', value: 'customer', label: '고객번호(이름)' },
    { width: '160px', value: 'firstMsgDate', label: '최초 인입시간', sorted: true },
    { width: '160px', value: 'waitTime', label: '상담대기시간', sorted: true },
    { width: '160px', value: 'progressTime', label: '상담진행시간', sorted: true },
    { width: '180px', value: 'counselorName', label: '상담사(ID)' },
    { width: '', value: 'chatStat', label: '종료유형' },
  ];

  const rederRow = (list) => {
    return list?.map((row) => {
      return {
        ...row,
        firstMsgDate: formatDateTime(row.firstMsgDate),
        waitTime: formatMinSec(row.waitTime),
        progressTime: formatMinSec(row.progressTime),
        counselorName: row.counselorName + (row.counselorId ? '(' + row.counselorId + ')' : ''),
        chatStat: <i className={`badge ${getBadgeClass(row.chatStat)}`}>{row.endType}</i>,
      };
    });
  };

  const handleSort = (sorted, name) => {
    dispatch(
      setSearchParam({
        orderTarget: CHATHISTORY_ACRONYMS[name],
        orderType: sorted,
      })
    );
  };

  return (
    <div className="grid-box">
      <Table
        tableColums={tableColums}
        handleDetail={handleDetail}
        data={consultList.historyList}
        rederRow={rederRow}
        handleSort={handleSort}
      />
      <Pagination
        itemsPerPage={searchParam.count ?? 10}
        totalItems={getTabTotalCnt(searchParam.chatStat)}
        onPageChange={onPageChange}
        isPageSize={true}
        isPageTxt={true}
      />
    </div>
  );
};

export default Grid;
