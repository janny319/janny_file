import React, { useState } from 'react';
import SelectBox from '@/components/SelectBox';

function MealTimePop({ closePopup }) {
    const [state, setState] = useState(false);
    const toggleButton = () => {
        setState(!state);
    };

    return (
        <div>
            <div className="pop-content">
                <div className="input-box">
                    <span>설정 여부</span>
                    <div className="toggle-btn">
                        <label htmlFor="category-toggle" className="toggle-switch">
                            <input onClick={toggleButton} type="checkbox" id="category-toggle"></input>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
                <div className="input-box">
                    <span>시간</span>
                    <SelectBox
                        selectClassName={'small'}
                        title={'시'}
                        options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                        disabled={!state}
                    />
                    <SelectBox
                        selectClassName={'small'}
                        title={'분'}
                        options={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']}
                        disabled={!state}
                    />
                    &nbsp;~
                    <SelectBox
                        selectClassName={'small'}
                        title={'시'}
                        options={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                        disabled={!state}
                    />
                    <SelectBox
                        selectClassName={'small'}
                        title={'분'}
                        options={['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']}
                        disabled={!state}
                    />
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

export default MealTimePop;
