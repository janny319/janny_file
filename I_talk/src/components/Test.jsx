import React, { forwardRef, useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import isoWeek from 'dayjs/plugin/isoWeek';

import '@/style/calendarCopy.scss'; // 스타일링 파일을 가져옵니다.
import dayjs from 'dayjs';
import { CALENDER_TYPE } from '@/constants/common';

const DatePickerWithShortcuts = ({ type }) => {
    dayjs.extend(isoWeek);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [open, setOpen] = useState(false);

    const handleTodayClick = () => {
        const today = new Date();
        setStartDate(today);
        setEndDate(today);
    };

    const handleYesterdayClick = () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        setStartDate(yesterday);
        setEndDate(new Date());
    };

    const handleLastWeekClick = () => {
        const startOfWeek = dayjs().startOf('isoWeek').toDate();
        const endOfWeek = dayjs().endOf('isoWeek').toDate();
        setStartDate(startOfWeek);
        setEndDate(endOfWeek);
    };

    const handleMonthClick = () => {
        const firstDayOfMonth = dayjs().startOf('month').toDate();
        const lastDayOfMonth = dayjs().endOf('month').toDate();
        setStartDate(firstDayOfMonth);
        setEndDate(lastDayOfMonth);
    };

    const handleRecentWeekClick = () => {
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        setStartDate(lastWeek);
        setEndDate(new Date());
    };
    const handleRecenMonthClick = () => {
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 30);
        setStartDate(lastWeek);
        setEndDate(new Date());
    };

    const changeClassName = () => {
        setOpen(!open);
    };

    const CustomCalendarContainer = ({ className, children }) => (
        <div>
            <div className="calendar-with-shortcuts">
                <div className="shortcuts">
                    <button onClick={handleTodayClick}>오늘</button>
                    <button onClick={handleYesterdayClick}>어제</button>
                    <button onClick={handleLastWeekClick}>이번주</button>
                    <button onClick={handleMonthClick}>이번달</button>
                    <button onClick={handleRecentWeekClick}>최근 7일</button>
                    <button onClick={handleRecenMonthClick}>최근 30일</button>
                </div>
                <div className="calendar-wrap">
                    <CalendarContainer className={className}>{children}</CalendarContainer>
                    <div className="validation-error">최대 조회기간은 3개월입니다.</div>
                    {/* 최근 3년 이내의 이력만 조회 가능합니다.​ */}
                </div>
            </div>
        </div>
    );

    // 주별
    const CustomCalendarWeek = ({ className, children }) => (
        <div className="calendar-wrap">
            <CalendarContainer className={className}>{children}</CalendarContainer>
            <div className="validation-error">최대 조회기간은 54주입니다.</div>
            {/* 최근 3년 이내의 이력만 조회 가능합니다.​ */}
        </div>
    );

    // 월별
    const CustomCalendarMonth = ({ className, children }) => (
        <div className="calendar-wrap">
            <CalendarContainer className={className}>{children}</CalendarContainer>
            <div className="validation-error">최대 조회기간은 36개월입니다.</div>
            {/* 최근 3년 이내의 이력만 조회 가능합니다.​ */}
        </div>
    );

    const Input = forwardRef(({ startTit, endTit, notation, cusTit, ...props }, ref) => {
        const [isInputFocused, setIsInputFocused] = useState(false);
        const handleInputFocus = () => {
            setIsInputFocused(true);
        };

        const handleInputBlur = () => {
            setIsInputFocused(false);
        };
        return (
            <div className={`date-picker ${open ? 'on' : ''}`} onClick={changeClassName}>
                <div className="date-tit">
                    <sub className="start">{startTit}</sub>
                    <sub className={`end ${cusTit || ''}`}>{endTit}</sub>
                </div>
                <div className="date-input">
                    <input
                        {...props}
                        ref={ref}
                        // placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
                        placeholder={`${notation} ~ ${notation}`}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        style={{ width: '100%' }}
                    ></input>
                </div>
            </div>
        );
    });

    return type === CALENDER_TYPE.DAY ? (
        <>
            <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                locale={ko}
                customInput={<Input startTit={'시작 일'} endTit={'종료 일'} notation={'YYYY-MM-DD'} />}
                dateFormat="yyyy-MM-dd"
                onChange={(dates) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                    if (start && end) {
                        setOpen(false); // 종료 날짜 선택 시 팝업 닫기
                    }
                }}
                monthsShown={2}
                calendarContainer={CustomCalendarContainer}
                selectsRange
                open={open}
                onClickOutside={() => setOpen(false)} // 외부 클릭시 닫기
            />
        </>
    ) : type === CALENDER_TYPE.WEEK ? (
        <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            customInput={<Input startTit={'시작 주'} endTit={'종료 주'} notation={'YYYY-MM-DD'} />}
            dateFormat="yyyy-MM-dd"
            onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);

                if (start) {
                    if (end) {
                        const diffInDays = (end - start) / (1000 * 60 * 60 * 24);
                        const weeks = Math.ceil(diffInDays / 7);
                        const newEndDate = new Date(start);
                        newEndDate.setDate(start.getDate() + weeks * 7 - 1);
                        setEndDate(newEndDate);
                        setOpen(false); // 추가
                    } else {
                        setEndDate(null);
                    }
                } else {
                    setEndDate(null);
                }
            }}
            monthsShown={2}
            calendarContainer={CustomCalendarWeek}
            selectsRange
            open={open} // 추가
            onClickOutside={() => setOpen(false)} // 추가
            popperClassName={'week'} // 클래스 추가
        />
    ) : (
        <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            customInput={<Input startTit={'시작 월'} endTit={'종료 월'} notation={'YYYY-MM'} cusTit={'mon-tit'} />}
            onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
                if (start && end) {
                    setOpen(false); // 종료 날짜 선택 시 팝업 닫기
                }
            }}
            monthsShown={2}
            calendarContainer={CustomCalendarMonth}
            selectsRange
            open={open} // 추가
            onClickOutside={() => setOpen(false)} // 추가
            showMonthYearPicker
            dateFormat="yyyy-MM"
            popperClassName={'month'} // 클래스 추가
        />
    );
};

export default DatePickerWithShortcuts;
