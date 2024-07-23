export const MODAL_TYPES = {
  BASIC: "basic",
  ALERT: "alert",
  CONFIRM: "confirm",
};

export const TOAST_DEFAULT_OPTION = {
  isToast: true,
  successMsg: "",
  errorMsg: "",
};

export const API_RESPONSE_TYPE = {
  SUCCESS: 200,
};

export const CS_STATE = {
  CONSULTATION_START: "S", // 상담시작
  CONSULTATION_END: "E", // 상담종료
  BREAK: "H", // 휴식
  MEAL: "M", // 식사
  ABSENCE: "R", // 자리비움
  OFFLINE: "T", // 오프라인
  ONLINE: "F", // 온라인
};

export const CHAT_STAT = {
  ALL: "", // 전체
  CUSTOMER_END: "I", // 고객종료
  AGENT_END: "C", // 상담사종료
  SYSTEM_END: "E", // 시스템종료
  TRANSFER_END: "M", // 이관종료
  BLOCK_END: "B", // 차단종료
};

export const CHAT_STATUS = {
  CHAT_CREATING_AND_PROGRESSING: "A", //	진행
  CHAT_CREATING_AND_WAITING: "S", //	대기
  AGENT_EXITED: "C", //	상담사 종료
  USER_EXITED: "U", //	사용자 종료
  USER_EXITED_WITH_POST_PROCESSING: "I", //	사용자 종료 & 상담사 후처리
  AUTO_END_DUE_TO_NO_RESPONSE: "T", //	무응답 자동종료
  AUTO_END_WITH_POST_PROCESSING: "E", //	무응답 자동종료 & 상담사 후처리
  BLOCKED_EXIT: "B", //	차단 종료
  UNASSIGNED_AND_CATEGORY_NOT_SELECTED: "Q", //	상담원 미할당 & 카테고리 미선택
  UNASSIGNED_AND_CATEGORY_SELECTED: "N", //	상담원 미할당 & 카테고리 선택
  AGENT_TRANSFER: "M", //	상담사 이관
  INBOUND_FAILED: "F", //	상담실패
  OUTSIDE_BUSINESS_HOURS_FAILED: "W", //	상담실패
  WAITING_ROOM_DEPARTURE: "R", //	상담실패
  BATCH_FORCED_EXIT: "D", //	시스템 강제 종료
};

export const LABEL_CLASSNAME = {
  COUNSELOR: "label-tag-counselor",
  SYSTEM: "label-tag-system",
  CLIENT: "label-tag-client",
  BLOCK: "label-tag-block",
  TRANSFER: "label-tag-transfer",
};

export const COLORS = {
  MINT: "mint",
  YELLOW: "yellow",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
};

export const CHATHISTORY_ACRONYMS = {
  firstMsgDate: "FM",
  waitTime: "WT",
  progressTime: "PT",
};

export const SORT_TYPE = {
  ASC: "A",
  DESC: "D",
  NONE: "",
};

export const SEARCH_TYPE_OPTION = [
  { value: "UK", label: "고객 번호" },
  { value: "UN", label: "고객 이름" },
  { value: "CN", label: "상담사 이름" },
  { value: "CI", label: "상담사 ID" },
];

export const MANAGER_SEARCH_TYPE_OPTION = [
  { value: "user_id", label: "아이디" },
  { value: "name", label: "이름" },
  { value: "tel", label: "핸드폰번호" },
];

export const ENTIRE = "";

export const DEFALUT_PAGE_SIZE_OPTION = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
];

export const DEFAULT_YN = {
  YES: "Y",
  NO: "N",
};

export const CALENDER_TYPE = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
};
