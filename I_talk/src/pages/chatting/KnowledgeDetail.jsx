import React, { useState } from 'react';

function TemplateApply({ closePopup }) {

    return (
        <div>
            <div className="pop-content">
                <div className='half'>
                    <div className="input-box">
                        <span>분류</span>
                        <p>장기저축급여</p>
                    </div>
                    <div className="input-box">
                        <span>유형</span>
                        <p>장기저축급여</p>
                    </div>
                </div>
                <div className='half'>
                    <div className="input-box">
                        <span>등록</span>
                        <p>2022-04-20</p>
                    </div>
                    <div className="input-box">
                        <span>수정</span>
                        <p>2022-04-20</p>
                    </div>
                </div>
                <div className='half'>
                    <div className="input-box">
                        <span>작성자</span>
                        <p>홍길동</p>
                    </div>
                    <div className="input-box">
                        <span>조회수</span>
                        <p>22,000</p>
                    </div>
                </div>
                <div className='post-tit'>
                    장기저축급여 분할급여금 수령이자가 국민건강보험공단의 건강보험료 산정 시 포함되나요?​
                </div>
                <div className='post-cont'>
                    2020년 11월부로 시행된 건강보험료 산정대상 확대에 따라 현재 산정 대상이 되고 있는 “분리과세 금융소득”은 「소득세법 제14조제3항제6호」에 따른 분리과세 금융소득 중 1천만원 초과 ~ 2천만원 이하의 소득을 대상으로 하고 있으며, 「소득세법 제14조제3항제3호」의 직장공제회 초과반환금에 해당되는 장기저축급여 분할급여금 이자소득은 건강보험료 산정 시 포함되지 않습니다. 참고로 건강보험료가 부과되는 ‘분리과세 금융소득(종합과세 금융소득 제외)’은 국세청 홈택스 해당 화면에서 소득주체가 직접 조회하실 수 있습니다.​
                </div>
            </div>
        </div>
    );
}

export default TemplateApply;
