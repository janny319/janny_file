import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { usePopper } from 'react-popper';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import classnames from 'classnames';

import ButtonList from './ButtonList';

import 'react-datepicker/dist/react-datepicker.css';
import '@/style/rangeCalendar.css';

import * as S from '../../style/ElementsStyle';
import dayjs from 'dayjs';

const modifiers = [
  {
    name: 'flip',
    options: {
      allowedAutoPlacements: ['top', 'bottom'],
    },
  },
  {
    name: 'offset',
    options: {
      offset: [0, 1],
    },
  },
];

/**
 * type : multi(2줄 default) | simple 한줄 (label 입력 x)
 */
const DateRange = ({
  type = 'multi',
  weekly = false,
  disabled,
  defaultStartDate,
  defaultEndDate,
  label,
  rangeCal = false,
  multiCal = false,
  yearCal = false,
  format = 'YYYY-MM-DD',
  utilMenu = false,
  headFixed = false,
  serviceCalendar = false,
  onChange,
  ...rest
}) => {
  {
    /* weekly 추가 231107, 231130 headFixed 추가, 231204 serviceCalendar 추가 */
  }
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement: 'top-end',
    modifiers: [...modifiers],
  });

  const [isOpen, setIsOpen] = useState(false); //팝업 오픈
  const [termIndex, setTermIndex] = useState();

  const calendarCtrlHandler = (i) => {
    setTermIndex(i);
    utilMenuHandler(i);
  };

  // background click disabled 231115
  const backgroundDimmedAdd = function () {
    const div = document.querySelector('.calendar-dimmed');
    const area = document.querySelectorAll('.date-picker-area');
    area.forEach((item) => {
      item.style.zIndex = '5000';
    });
    div.style.display = 'block';
  };
  const backgroundDimmedRemove = function () {
    const div = document.querySelector('.calendar-dimmed');
    const area = document.querySelectorAll('.date-picker-area');
    area.forEach((item) => {
      item.style.zIndex = 'initial';
    });
    div.style.display = 'none';
  };

  const utilMenuHandler = (dates) => {
    const date = new Date();
    switch (dates) {
      case 0:
        handleChange([date, date]);
        break;
      case 1:
        const yesterDay = new Date(date.setDate(date.getDate() - 1));
        handleChange([yesterDay, yesterDay]);
        break;
      case 2:
        const currDate = new Date(date.setDate(date.getDate() - date.getDay() + 1));
        handleChange([
          new Date(date.setDate(date.getDate() - date.getDay() + 1)),
          new Date(currDate.setDate(currDate.getDate() + 6)),
        ]);
        break;
      case 3:
        handleChange([
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        ]);
        break;
      case 4:
        handleChange([new Date(new Date().setDate(new Date().getDate() - 6)), date]);
        break;
      default:
        handleChange([new Date(new Date().setDate(new Date().getDate() - 29)), date]);
        break;
    }

    setIsOpen(!isOpen);
  };
  const cancelHandler = () => {
    console.log('cancel');
    setIsOpen(!isOpen);
  };

  const confirmHandler = () => {
    console.log('confirm');
    setIsOpen(!isOpen);
  };
  const CalendarTobButtonList = [
    { title: '오늘' },
    { title: '어제' },
    { title: '이번 주' },
    { title: '이번 달' },
    { title: '최근 7일' },
    { title: '최근 30일' },
  ];

  const calendarButtons = [
    { label: '취소', className: 'secondary', onClick: cancelHandler },
    { label: '적용', className: 'primary', onClick: confirmHandler }, // 231103 텍스트 수정
  ];

  const dateFormat = (date, format) => {
    if (date === null || date === undefined) {
      return '';
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let dateText = '';
    if (format === 'YYYY-MM') {
      dateText = `${year}-${month >= 10 ? month : '0' + month}`;
    } else if (format === 'YYYY') {
      dateText = `${year}`;
    } else {
      dateText = `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`;
    }
    return dateText;
  };

  const renderMonthContent = (month, shortMonth, longMonth) => {
    return <span>{`${(month + 1).toString().padStart(2, 0)}월`}</span>;
  };

  const handleChange = (dates, e) => {
    if (rangeCal) {
      const [start, end] = dates;

      // 주별 달력
      if (weekly) {
        const monday = end ? start : dayjs(start).startOf('week').$d;
        const sunday = end ? dayjs(end).endOf('week').$d : end;

        setStartDate(monday);
        setEndDate(sunday);
        onChange([monday, sunday]);
        return;
      }

      setStartDate(start);
      setEndDate(end);
      onChange(dates);
    } else if (multiCal) {
      if (e.target.closest('.start-calendar')) {
        setStartDate(dates);
      } else {
        setEndDate(dates);
      }
    } else {
      setStartDate(dates);
      onChange(dates);
    }
  };
  const calendarOpenHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    update();
  };

  // 231114 body click event 추가
  // const closeDateRange = function(e) {
  //   if (e.target.closest('.date-picker-area') === null) {
  //     setIsOpen(false);
  //   }
  // };

  // 월달력 첫번째 달력 년도 변경 콜백 함수
  const handleChangeFirstMonthDatePickerYear = (date, selectedDate) => {
    const datePickerYear = dayjs(date).year();
    const selectedDateYear = dayjs(selectedDate).year();
    const startCalendars = document.querySelectorAll('.start-calendar');

    if (datePickerYear === selectedDateYear) {
      // 보이는 년도와 시작 날짜 년도가 같으면 달력에 체크 표시
      [...startCalendars].map((c, i) => {
        const selectElement = c.querySelector('.react-datepicker__month-text--keyboard-selected');
        selectElement && selectElement.classList.remove('off');
      });
    } else {
      // 보이는 년도와 시작 날짜 년도가 다르면 달력에 체크 미표시
      [...startCalendars].map((c, i) => {
        const selectElement = c.querySelector('.react-datepicker__month-text--keyboard-selected');
        selectElement && selectElement.classList.add('off');
      });
    }
  };

  // 월달력 두번째 달력 년도 변경 콜백 함수
  const handleChangeSecondMonthDatePickerYear = (date, selectedDate) => {
    const datePickerYear = dayjs(date).year();
    const selectedDateYear = dayjs(selectedDate).year();
    const endCalendars = document.querySelectorAll('.end-calendar');

    if (datePickerYear === selectedDateYear) {
      // 보이는 년도와 종료 날짜 년도가 같으면 달력에 체크 표시
      [...endCalendars].map((c, i) => {
        const selectElement = c.querySelector('.react-datepicker__month-text--keyboard-selected');
        selectElement && selectElement.classList.remove('off');
      });
    } else {
      // 보이는 년도와 종료 날짜 년도가 다르면 달력에 체크 미표시
      [...endCalendars].map((c, i) => {
        const selectElement = c.querySelector('.react-datepicker__month-text--keyboard-selected');
        selectElement && selectElement.classList.add('off');
      });
    }
  };

  useEffect(() => {
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
    // 231115 dimmed 추가
    isOpen ? backgroundDimmedAdd() : backgroundDimmedRemove();
    // 231114 body click event 추가
    // document.body.addEventListener('click', closeDateRange);
    // return function cleanup() {
    //   window.removeEventListener('click', closeDateRange);
    // }
  }, [defaultStartDate, defaultEndDate, isOpen]);

  return (
    <S.DatePicker>
      <S.DatePickerInput type={type} className="date-picker-area">
        {' '}
        {/* date-picker-area 추가 231114 */}
        <button
          type="button"
          className={classnames({ open: isOpen })}
          onClick={calendarOpenHandler}
          disabled={disabled}
          ref={setReferenceElement}
        >
          {label && <span className="label">조회 기간</span>}
          <span className="title">
            {type === 'simple' || yearCal
              ? `${dateFormat(startDate, format)}`
              : `${dateFormat(startDate, format)} ~ ${dateFormat(endDate, format)}`}
          </span>
        </button>
      </S.DatePickerInput>

      {ReactDOM.createPortal(
        <S.DateRange
          isOpen={isOpen}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={classnames(
            'date-picker-area',
            { 'head-fixed': headFixed },
            { 'service-calendar': serviceCalendar }
          )}
        >
          {' '}
          {utilMenu && (
            <S.CalendarUtilMenu className="calendar-util">
              <ul>
                {CalendarTobButtonList.map((btn, index) => {
                  return (
                    <li key={`calendar-${index}`}>
                      <button
                        type="button"
                        onClick={() => calendarCtrlHandler(index)}
                        className={termIndex === index ? 'active' : ''}
                      >
                        {btn.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </S.CalendarUtilMenu>
          )}
          {/* date-picker-area 추가 231114, 231130 headFixed에 클래스네임 추가, 231204 serviceCalendar 추가 및 classnames 적용 */}
          <S.CalendarArea className={weekly ? 'weekly' : ''}>
            {' '}
            {/* weekly 추가 231107 */}
            <S.CalendarInner>
              {multiCal ? (
                <>
                  <DatePicker
                    {...rest}
                    selected={startDate}
                    calendarClassName="start-calendar"
                    // calendarStartDay={1} 231113 일 ~ 토 출력
                    shouldCloseOnSelect={false}
                    inline
                    onChange={handleChange}
                    renderMonthContent={renderMonthContent}
                    locale={ko}
                    onYearChange={(date) => handleChangeFirstMonthDatePickerYear(date, startDate)}
                    showMonthYearPicker
                  />
                  <DatePicker
                    {...rest}
                    selected={endDate}
                    calendarClassName="end-calendar"
                    // calendarStartDay={1} 231113 일 ~ 토 출력
                    shouldCloseOnSelect={false}
                    inline
                    onChange={handleChange}
                    renderMonthContent={renderMonthContent}
                    locale={ko}
                    onYearChange={(date) => handleChangeSecondMonthDatePickerYear(date, endDate)}
                    showMonthYearPicker
                  />
                </>
              ) : (
                <DatePicker
                  {...rest}
                  startDate={startDate}
                  endDate={endDate}
                  calendarClassName="start-calendar"
                  // calendarStartDay={1} 231113 일 ~ 토 출력
                  shouldCloseOnSelect={false}
                  inline
                  onChange={handleChange}
                  locale={ko}
                />
              )}
            </S.CalendarInner>
            <div className="calendar-btm">
              {/* <div className="calendar-toast">
                <p>조회 기간은 최대 3개월까지만 가능합니다.​</p>
              </div> */}
              <ButtonList buttonList={calendarButtons} ulClass="btn-area" />
            </div>
          </S.CalendarArea>
        </S.DateRange>,
        document.getElementById('calendar-root')
      )}
    </S.DatePicker>
  );
};

export default DateRange;
