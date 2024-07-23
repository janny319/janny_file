import React, { useEffect } from 'react';
import SelectBox from '@/components/SelectBox';

function OperlTimePop({ closePopup }) {

    return (
        <div>
            <div className="pop-content">
                <div className="input-box">
                    <span>구분</span>
                    <div className="radio-btn">
                        <label htmlFor="radio1"><input id="radio1" type="radio" name="division" />요일</label>
                    </div>
                    <div className="radio-btn">
                        <label htmlFor="radio2"><input id="radio2" type="radio" name="division" />휴일</label>
                    </div>
                    <span className="add-info">
                        <i className="no-team"></i>휴일 운영시간 추가 시, 모든 휴일에 운영시간이 적용됩니다.
                    </span>
                </div>
                <div className="input-box">
                    <span>요일</span>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="mon" checked disabled />월</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="tue" />화</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="wed" />수</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="thu" />목</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="fri" />금</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="sat" />토</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="sun" />일</label>
                    </div>
                </div>
                <div className="input-box">
                    <span>주간 선택</span>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="all" />전체</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="1week" />1주</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="2week" />2주</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="3week" />3주</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="4week" />4주</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="5week" />5주</label>
                    </div>
                    <div className='check-btn'>
                        <label><input type="checkbox" id="6week" />6주</label>
                    </div>
                </div>
                <div className="input-box">
                    <span>시간</span>
                    <SelectBox
                        selectClassName={'small'}
                        title={'시'}
                        options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                    />
                    <SelectBox
                        selectClassName={'small'}
                        title={'분'}
                        options={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55',]}
                    />
                    &nbsp;~
                    <SelectBox
                        selectClassName={'small'}
                        title={'시'}
                        options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                    />
                    <SelectBox
                        selectClassName={'small'}
                        title={'분'}
                        options={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55',]}
                    />
                    <br/>
                    <div className='check-btn flex-none'>
                        <label><input type="checkbox" id="allDay" />종일</label>
                    </div>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>
                    취소
                </button>
                <button type="button" className="btn bg black">
                    저장
                </button>
            </div>
        </div>
    );
}

export default OperlTimePop;
