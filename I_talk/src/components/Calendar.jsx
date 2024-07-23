import React, { useState, useEffect, useRef } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const Calendar = ({ value, handleDateChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const datepickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        setIsDatePickerOpen(false);
      }
    }
    if (isDatePickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDatePickerOpen]);

  return (
    <div className="date-picker">
      <div className="date-tit">
        <sub className="start">시작일</sub>
        <sub className="end">종료일</sub>
      </div>
      <div className="date-input" ref={datepickerRef}>
        <Datepicker
          i18n="ko"
          configs={{
            shortcuts: {
              yesterday: '어제',
              today: '오늘',
              currentMonth: '현재달',
              pastMonth: '지난달',
            },
          }}
          value={value}
          onChange={handleDateChange}
          showShortcuts={true}
          readOnly={true}
          onClick={() => setIsDatePickerOpen(true)} // 달력 영역을 클릭했을 때 달력을 열도록 설정
        />
      </div>
    </div>
  );
};

export default Calendar;
