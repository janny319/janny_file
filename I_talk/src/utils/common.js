import fp from 'lodash/fp';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

/**
 * @description : 초 단위를 mm:ss 포맷으로 변환
 * @param {number} seconds : 초
 * @returns {string} mm:ss 형식의 분:초
 */
export const formatSecondsToMMSS = (seconds) => {
  if (!seconds) return '00:00';
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);

  // 두 자리 숫자로 패딩
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * @description : 초 단위를 00시 00분 00초 포맷으로 변환
 * @param {number} seconds : 초
 * @returns {string} 00시 00분 00초
 */
export const formatSecondsToHangleHHMMSS = (seconds) => {
  const secondsNum = Number(seconds) || 0;

  if (secondsNum == 0) return `0초`;

  const hours = Math.floor(secondsNum / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const _seconds = Math.floor(secondsNum % 60);

  // 두 자리 숫자로 패딩
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(_seconds).padStart(2, '0');

  if (hours > 0) {
    return `${formattedHours}시 ${formattedMinutes}분 ${formattedSeconds}초`;
  } else if (minutes > 0) {
    return `${formattedMinutes}분 ${formattedSeconds}초`;
  } else {
    return `${formattedSeconds}초`;
  }
};

/**
 * @description : sort 파라미터 객체를 스트링 형태로 변환 { date: 'desc', no: 'asc' } => 'data,desc,no,asc'
 * @param {Object} obj : sort 객체
 * @returns {string} sort 파라미터 스트링
 */
export const convertSortObjectToString = (obj) => {
  const composer = fp.pipe(
    fp.entries,
    fp.filter((arr) => fp.getOr(null, '[1]', arr)),
    fp.map((arr) => fp.join(',', arr)),
    fp.join(',')
  );
  const result = composer(obj);
  return result;
};

/**
 * @description : byte 사이즈를 MB 사이즈로 변환
 * @param {number} size :  byte 사이즈
 * @param {number} decimalPlaces : 소수점 자리
 * @returns {number} 변환 된 MB 사이즈
 */
export const convertBytesToMB = (bytes, decimalPlaces = 2) => {
  return (bytes / Math.pow(2, 20)).toFixed(decimalPlaces);
};

/**
 * @description : 배열 객체를 string join
 * @param {Array} options : 옵션 목록
 * @param {string} key : 속성명
 * @param {*} separator : 구분자
 * @returns join된 문자열
 */
export const convertOptionsToJoinString = (options, key = 'value', separator = ',') => {
  return fp.pipe(
    fp.map((option) => option[key]),
    fp.join(separator)
  )(options);
};

/**
 * @description : 숫자 세자리 마다 콤마
 * @param {Number} number
 * @returns {String} 숫자 세자리 마다 콤마 처리 된 문자열
 */
export const numberWithCommas = fp.curry((number) => {
  if (number === null || number === undefined) return 0;
  let numArr = String(number).split('.');
  numArr[0] = numArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numArr.join('.');
});

/**
 * @description : 전화 번호 형식 변경 및 마스킹
 * @param {Number} number 전화 번호
 * @param {String} countryCode 국가 코드
 * @returns {String} 변환된 전화 번호
 */
export const maskPhoneNumber = (num, countryCode = 'KR') => {
  if (typeof Number(num) !== 'number') return num;
  const parsed = parsePhoneNumberFromString(num, countryCode);
  if (!parsed) {
    return num;
  }

  const formatted = parsed.formatNational();
  const parts = formatted.split('-');

  if (parts.length === 3) {
    parts[1] = '●●●●';
    return parts.join('-');
  }

  return formatted;
};

/**
 * @description : 숫자의 가장 첫자리에 1을 더하고 나머지 자리는 0 으로
 * @param {Number} num : 숫자
 * @returns {Number}
 */
export const getIncrementHighestDigit = fp.curry((num) => {
  // 숫자를 문자열로 변환
  const strNum = String(num);

  // 첫 번째 문자(가장 높은 자리 숫자)를 숫자로 변환하고 1을 더함
  let firstDigit = parseInt(strNum[0], 10) + 1;

  // 남은 자릿수는 0으로 채움
  for (let i = 1; i < strNum.length; i++) {
    firstDigit += '0';
  }

  return parseInt(firstDigit, 10);
});

/**
 * @description : 숫자를 반올림 하는 함수
 * @param {Number} num : 자리 올림 할 숫자
 * @param {Number} digit : 소수점 자리 올림 자리
 * @returns {Number} 반올림 한 숫자
 */
export const getRounds = fp.curry((num, digit = 0) => {
  if (typeof num !== 'number') return 0;

  const roundedNum = Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
  return roundedNum.toFixed(digit);
});

/**
 * @description : 시 분 초 변환
 * @param {String} time : hh:mm:ss 형식의 시간 스트링
 * @returns {String} 변환된 시간 스트링
 */
export const convertTimeFormat = fp.curry((time) => {
  if (!time) return '00초';
  const timeArr = fp.pipe(
    fp.split(':'),
    fp.map(fp.parseInt(10)),
    fp.reject(fp.isNaN)
    //fp.reject((num) => num === '00')
  )(time);

  let hour = '';
  let min = '';
  let sec = '';
  switch (timeArr.length) {
    case 2:
      min = String(Math.floor(timeArr[0])).padStart(2, '0');
      sec = String(Math.floor(timeArr[1])).padStart(2, '0');
      if (min == '00') {
        return sec + `초`;
      } else {
        return min + `분 ` + sec + `초`;
      }
    case 3:
      hour = String(Math.floor(timeArr[0])).padStart(2, '0');
      min = String(Math.floor(timeArr[1])).padStart(2, '0');
      sec = String(Math.floor(timeArr[2])).padStart(2, '0');
      if (hour == '00' && min == '00') {
        return sec + `초`;
      } else if (hour == '00') {
        return min + `분 ` + sec + `초`;
      } else {
        return hour + `시 ` + min + `분 ` + sec + `초`;
      }
    default:
      sec = String(Math.floor(timeArr[0])).padStart(2, '0');
      return sec + `초`;
  }
});

/**
 * @description : 숫자 > 영어 > 가나다 순으로 정렬
 */
export const customSort = (item) => {
  const value = item.botGroupName.toLowerCase();
  const isNumber = /^\d/;
  const isEnglish = /^[A-Za-z]/;

  if (isNumber.test(value)) return [0, value];
  if (isEnglish.test(value)) return [1, value];
  return [2, value];
};

/**
 * @description : 숫자 > 영어 > 가나다 순으로 정렬
 */
export const customBotSort = (item) => {
  const value = item.bot.botName.toLowerCase();
  const isNumber = /^\d/;
  const isEnglish = /^[A-Za-z]/;

  if (isNumber.test(value)) return [0, value];
  if (isEnglish.test(value)) return [1, value];
  return [2, value];
};

export const getDateTime = fp.curry(() => {
  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMonth = String(now.getMonth() + 1).padStart(2, '0');
  let nowDate = String(now.getDate()).padStart(2, '0');
  let nowHours = String(now.getHours()).padStart(2, '0');
  let nowMins = String(now.getMinutes()).padStart(2, '0');
  let nowSec = String(now.getSeconds()).padStart(2, '0');
  let today = `${nowYear}.${nowMonth}.${nowDate} ${nowHours}:${nowMins}:${nowSec}`;

  return today;
});

// pcm to wav
export const pcmToWav = (pcmData, sampleRate, bitsPerSample, channels) => {
  const dataSize = pcmData.byteLength;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function writeUint32(view, offset, value) {
    view.setUint32(offset, value, true);
  }

  function writeUint16(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  // RIFF header
  writeString(view, 0, 'RIFF'); // ChunkID
  writeUint32(view, 4, 36 + dataSize); // ChunkSize
  writeString(view, 8, 'WAVE'); // Format

  // fmt sub-chunk
  writeString(view, 12, 'fmt '); // Subchunk1ID
  writeUint32(view, 16, 16); // Subchunk1Size
  writeUint16(view, 20, 1); // AudioFormat (1 for PCM)
  writeUint16(view, 22, channels); // NumChannels
  writeUint32(view, 24, sampleRate); // SampleRate
  writeUint32(view, 28, (sampleRate * channels * bitsPerSample) / 8); // ByteRate
  writeUint16(view, 32, (channels * bitsPerSample) / 8); // BlockAlign
  writeUint16(view, 34, bitsPerSample); // BitsPerSample

  // data sub-chunk
  writeString(view, 36, 'data'); // Subchunk2ID
  writeUint32(view, 40, dataSize); // Subchunk2Size

  // PCM Data
  const pcmView = new Uint8Array(pcmData);
  for (let i = 0; i < dataSize; i++) {
    view.setUint8(44 + i, pcmView[i]);
  }

  return buffer;
};

//pcm play
export const playPcmData = (audioContext, source, pcmArrayBuffer, id, onEndedCallback) => {
  // if (audioContext) {
  // }

  audioContext?.close(); // 이전 컨텍스트가 있다면 닫기
  source?.stop();

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const sampleRate = 8000; // 샘플 레이트는 8000Hz
  const channels = 1; // 채널 수는 1 (모노)

  const frameCount = pcmArrayBuffer.byteLength / (channels * 2); // 16-bit PCM
  const audioBuffer = audioContext.createBuffer(channels, frameCount, sampleRate);

  // PCM 데이터를 오디오 버퍼로 변환
  const channelData = audioBuffer.getChannelData(0);
  const view = new DataView(pcmArrayBuffer);

  let index = 0;
  for (let i = 0; i < frameCount; i++) {
    const sample = view.getInt16(index, true); // Little-Endian 16-bit PCM
    channelData[i] = sample / 32768; // 정규화
    index += 2; // 16비트 단위로 증가
  }

  // 오디오 재생
  source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.onended = () => {
    onEndedCallback(id);
    audioContext.close();
  };
  source.start();
};
