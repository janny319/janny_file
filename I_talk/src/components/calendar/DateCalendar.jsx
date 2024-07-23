import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { getDate, getMonth, getYear } from 'date-fns';
import '@/style/calendar.scss';

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [holidays, setHolidays] = useState([9, 10, 11]);
    // 240604 day 추가
    const day = startDate.getDate();
    const years = Array.from({ length: getYear(new Date()) - 1990 + 1 }, (_, i) => 1990 + i);
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    // month
    const [value, setValue] = useState(months[getMonth(new Date())]);
    const [selectedMonth, setSelectedMonth] = useState(false);
    const activeMonth = selectedMonth ? ' on' : '';

    // year
    const [yearValue, setYearValue] = useState(getYear(new Date()));
    const [selectedYear, setSelectedYear] = useState(false);
    const activeYear = selectedYear ? ' on' : '';

    console.log('date', day);
    const toggleMonth = () => {
        setSelectedMonth(!selectedMonth);
    };

    const toggleYear = () => {
        setSelectedYear(!selectedYear);
    };

    const selectMonthClick = (option) => {
        setValue(option);
        toggleMonth();
    };

    const selectYearClick = (option) => {
        setYearValue(option);
        toggleYear();
    };
    return (
        <>
            <DatePicker
                //   renderDayContents={({}) => {}}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div
                        style={{
                            // margin: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {''}
                        </button>

                        <button type="button" className="today-btn">
                            {value + day + '일'}
                        </button>

                        {/* <select
                            className="calender-sel"
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                        >
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select> */}

                        <div className="select calender-sel">
                            <div className={`drop-down ${activeMonth}`} onClick={toggleMonth}>
                                <button className={`drop-down-btn`}>{value}</button>
                                {/* 2024.06.10 위치 drop-down 태그 안으로 수정 */}
                                {selectedMonth && (
                                    <ul className="list">
                                        {months.map((option) => (
                                            <li key={option} value={option} onClick={() => selectMonthClick(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* <select
                            className="calender-sel"
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select> */}
                        <div className="select calender-sel">
                            <div className={`drop-down ${activeYear}`} onClick={toggleYear}>
                                <button className={`drop-down-btn`}>{yearValue}</button>
                                {/* 2024.06.10 위치 drop-down 태그 안으로 수정 */}
                                {selectedYear && (
                                    <ul className="list">
                                        {years.map((option) => (
                                            <li key={option} value={option} onClick={() => selectYearClick(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {''}
                        </button>
                    </div>
                )}
                selected={startDate}
                dayClassName={(date) => {
                    return holidays.includes(getDate(date)) ? 'reddot' : 'greendot';
                }}
                onChange={(date) => {
                    setStartDate(date);
                    setHolidays((prev) => {
                        const dateValue = getDate(date);
                        if (prev.includes(dateValue)) {
                            return prev.filter((item) => item !== dateValue);
                        } else {
                            return [...prev, dateValue];
                        }
                    });
                }}
                locale={ko}
                inline
            />
            <div className="calendar-info">
                <span className="info greendot">운영일</span>
                <div className="divider"></div>
                <span className="info reddot">휴일</span>
            </div>
        </>
    );
};

export default Calendar;
