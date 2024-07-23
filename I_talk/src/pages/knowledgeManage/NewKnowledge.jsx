import PopUp from '@/components/PopUp';
import SelectBox from '@/components/SelectBox';
import React, { useState } from 'react';

function NewKnowledge() {
    const [open, setOpen] = useState(false);
    const preModal = () => {
        setOpen(true);
    };
    const closePopup = () => {
        setOpen(false);
    };
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    지식 관리<span className="sub-tit">신규 등록</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>지식 관리</em>
                    <em>신규 등록</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="info-column info-know">
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">그룹</span>
                                {/* 2024.06.10 title 수정 */}
                                <SelectBox
                                    selectClassName={'nomal know'}
                                    title={'그룹을 선택하세요'}
                                    options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                                />
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">분류​</span>
                                {/* 2024.06.10 title 수정 */}
                                <SelectBox
                                    selectClassName={'nomal know'}
                                    title={'분류을 선택하세요'}
                                    options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                                />
                            </div>
                        </div>
                        <div className="textbox-wrap">
                            <div className="info-textbox">
                                <span className="center-txt">공개여부</span>
                                <div className="radio-btn">
                                    <label htmlFor="radio01">
                                        <input id="radio01" type="radio" name="authority" />Y
                                    </label>
                                </div>
                                <div className="radio-btn">
                                    <label htmlFor="radio02">
                                        <input id="radio02" type="radio" name="authority" />N
                                    </label>
                                </div>
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">자주찾는지식 등록</span>
                                <div className="radio-btn">
                                    <label htmlFor="radio03">
                                        <input id="radio03" type="radio" name="authority1" />Y
                                    </label>
                                </div>
                                <div className="radio-btn">
                                    <label htmlFor="radio04">
                                        <input id="radio04" type="radio" name="authority1" />N
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-textbox">
                        <span className="center-txt">제목</span>
                        <input type="text" placeholder="제목을 입력해주세요."></input>
                    </div>
                    <div className="info-textbox top">
                        <span className="center-txt">내용</span>
                        <textarea className="noti-txt"></textarea>
                    </div>
                </div>
                <div className="btn-list right">
                    <div className="validation-error know-err">필수 정보를 모두 입력하세요.</div>
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">취소</button>
                        <button className="btn bg white txt-black black" onClick={preModal}>
                            미리보기
                        </button>
                        <button className="btn bg  black">저장</button>
                    </div>
                </div>
            </div>
            {open && (
                <PopUp title={'지식 미리보기'} closePopup={closePopup}>
                    <div className="know-wrap">
                        <div className="know-tit">
                            장기저축급여 분할급여금 수령이자가 국민건강보험공단의 건강보험료 산정 시 포함되나요?
                            일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                        </div>
                        <div className="know-con">
                            2020년 11월부로 시행된 건강보험료 산정대상 확대에 따라 현재 산정 대상이 되고 있는 “분리과세
                            금융소득”은 「소득세법 제14조제3항제6호」에 따른 분리과세 금융소득 중 1천만원 초과 ~ 2천만원
                            이하의 소득을 대상으로 하고 있으며, 「소득세법 제14조제3항제3호」의 직장공제회 초과반환금에
                            해당되는 장기저축급여 분할급여금 이자소득은 건강보험료 산정 시 포함되지 않습니다. 참고로
                            건강보험료가 부과되는 ‘분리과세 금융소득(종합과세 금융소득 제외)’은 국세청 홈택스 해당
                            화면에서 소득주체가 직접 조회하실 수 있습니다.
                        </div>
                    </div>
                </PopUp>
            )}
        </div>
    );
}

export default NewKnowledge;
