import { axios, handleResponse } from "@/api/axios";

// 상담 이력 조회
export const getChatHistoryApi = async (params) => {
  // return await axios
  //   .get(`/api/consult/history/getChatHistory`, { params })
  //   .then((res) => handleResponse(res));
  return {
    data: {
      totalCnt: 47,
      userCloseCnt: 21,
      systemCloseCnt: 26,
      blockCloseCnt: 0,
      transferCloseCnt: 0,
      counselorCloseCnt: 0,
      historyList: [
        {
          seq: 24359,
          chatKey: "room052204",
          centerId: "CT0000000001",
          userKey: "use****",
          firstMsgDate: "20240522103550",
          waitTime: "0",
          progressTime: "0",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24358,
          chatKey: "room052203",
          centerId: "CT0000000001",
          userKey: "use****",
          firstMsgDate: "20240522102848",
          waitTime: "0",
          progressTime: "0",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24356,
          chatKey: "room052202",
          centerId: "CT0000000001",
          userKey: "use****",
          firstMsgDate: "20240522091914",
          waitTime: "0",
          progressTime: "0",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24354,
          chatKey: "room007720",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520131610",
          waitTime: "0",
          progressTime: "0",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "T",
          endType: "시스템 종료",
        },
        {
          seq: 24353,
          chatKey: "room007719",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520103109",
          waitTime: "15",
          progressTime: "6",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24351,
          chatKey: "room007717",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520103039",
          waitTime: "0",
          progressTime: "0",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24350,
          chatKey: "room007716",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520102251",
          waitTime: "61",
          progressTime: "19",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24349,
          chatKey: "room007715",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520102033",
          waitTime: "25",
          progressTime: "47",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24348,
          chatKey: "room007714",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520094909",
          waitTime: "15",
          progressTime: "3",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
        {
          seq: 24346,
          chatKey: "room007713",
          centerId: "CT0000000001",
          userKey: "use*****",
          firstMsgDate: "20240520094121",
          waitTime: "100",
          progressTime: "320",
          counselorId: "jam**",
          counselorName: "조**저",
          chatStat: "U",
          endType: "사용자 종료",
        },
      ],
    },
    header: {
      resultCode: 0,
      errorCode: null,
      resultMessage: "success",
      isSuccessful: true,
    },
  };
};

// 상담 상세 조회
export const getChatHistoryDetailApi = async (params) => {
  // return await axios
  //   .get(`/api/consult/history/getChatHistoryDetail`, { params })
  //   .then((res) => handleResponse(res));
  return {
    data: {
      chatKey: "room007720",
      userKey: "use*****",
      chatStat: "T",
      endType: "시스템 종료",
      centerId: "CT0000000001",
      counselorName: "조**저",
      counselorId: "jam**",
      firstMsgDate: "20240520131610",
      waitTime: "0",
      chatEndDate: "20240520131723",
      progressTime: "0",
      memoList: [],
      messageList: [
        {
          seq: 1109619,
          messageDate: "20240520011613",
          chatKey: "room007720",
          sendType: "CR",
          messageType: "TX",
          message: "으흠",
          sendResult: "0",
          delStatus: "N",
        },
        {
          seq: 1109620,
          messageDate: "20240520011623",
          chatKey: "room007720",
          sendType: "CR",
          messageType: "TX",
          message: "허허허허",
          sendResult: "0",
          delStatus: "N",
        },
      ],
    },
    header: {
      resultCode: 0,
      errorCode: null,
      resultMessage: "success",
      isSuccessful: true,
    },
  };
};

// 카테고리 옵션
export const getCategoryOptionApi = async (params) => {
  return {
    data: [
      {
        categoryId: "CG0000000071",
        categoryName: "중분류2-1",
        parentCategoryName: "대분류2",
      },
      {
        categoryId: "CG0000000007",
        categoryName: "중분류3-1",
        parentCategoryName: "대분류3",
      },
    ],
    header: {
      resultCode: 0,
      errorCode: null,
      resultMessage: "success",
      isSuccessful: true,
    },
  };
  // return await axios
  //   .get(`/api/consult/history/getUserCategory`, { params })
  //   .then((res) => handleResponse(res));
};

// 센터 옵션
export const getCenterOptionApi = async (params) => {
  return {
    data: [
      {
        centerId: "CT0000000001",
        centerName: "테스트센터1",
        centerDesc: "테스트센터랍니다.",
        delYn: "N",
      },
      {
        centerId: "CT0000000002",
        centerName: "테스트센터2",
        centerDesc: "테스트센터랍니다.",
        delYn: "N",
      },
      {
        centerId: "CT0000000003",
        centerName: "테스트센터3",
        centerDesc: "테스트센터랍니다.",
        delYn: "N",
      },
    ],
    header: {
      resultCode: 0,
      errorCode: null,
      resultMessage: "success",
      isSuccessful: true,
    },
  };
  // return await axios
  //   .get(`/api/consult/history/getUserCenter`, { params })
  //   .then((res) => handleResponse(res));
};
