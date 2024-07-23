import PopUp from '@/components/PopUp';
import React, { useState } from 'react';

function ProhibitedWord() {
    const [popOpen, setPopOpen] = useState(false);

    const OpenedPopup = () => {
        setPopOpen(true);
    };

    const closePopup = () => {
        setPopOpen(false);
    };
    return (
        <div className="content category">
            <div className="page-tit">
                <h3>금지어 관리</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>금지어 관리</em>
                </span>
            </div>

            <div className="cont-box allocation">
                <div className="category-name">
                    <strong>금지어 등록</strong>
                </div>
                <div className="prohibit">
                    <h4>
                        금지어로 등록할 <em>'15자 이내의 단어'</em>를 입력하세요.
                    </h4>
                    <textarea placeholder="단어를 입력해 주세요."></textarea>
                    <dl className="condition-info dot">
                        <dd>','로 구분하여 한번에 여러 단어를 등록할 수 있습니다. (최대 20개)</dd>
                    </dl>
                    <dl className="condition-info dot">
                        <dd>고객/상담원이 등록된 금지어를 입력할 경우, 해당 단어는 마스킹 표시됩니다.</dd>
                    </dl>
                    <dl className="condition-info dot">
                        <dd>한·영 띄어쓰기 및 영문 대소문자를 구분하여 등록하여야 합니다.</dd>
                    </dl>
                    <dl className="condition-info dot">
                        <dd>기본 금지어 적용 시, 고객응대 근로자 보호를 위한 위한 기본 금지어가 등록됩니다.</dd>
                    </dl>
                </div>
                <div className="btn-list right">
                    <div className="validation-error">이미 등록된 금지어입니다.</div>
                    <button className="btn bg white txt-black">취소</button>
                    <button className="btn bg black">등록</button>
                </div>
            </div>

            <div className="cont-box allocation">
                <div className="category-name">
                    <strong>등록된 금지어</strong>
                    <div className="btn-list right">
                        <button className="btn small line weight black txt" onClick={OpenedPopup}>
                            기본 금지어 적용
                        </button>
                    </div>
                    {popOpen && (
                        <PopUp title={'기본 금지어 적용'} alertClassName={'size-popup'} closePopup={closePopup}>
                            <div className="pop-content">
                                <div className="sub-tit">
                                    <p> 아래 입력된 금지어가 한 번에 적용됩니다.</p>
                                </div>
                                <div className="word-txt">
                                    <textarea />
                                </div>
                            </div>
                            <div className="btn-list right">
                                <button type="button" className="btn bg white txt-black black" onClick={closePopup}>
                                    취소
                                </button>
                                <button type="button" className="btn bg black">
                                    등록
                                </button>
                            </div>
                        </PopUp>
                    )}
                </div>
                <div className="tag-wrap">
                    <em className="tag">
                        차단<button className="delete"></button>
                    </em>
                    <em className="tag">
                        상품문의<button className="delete"></button>
                    </em>
                    <em className="tag">
                        좋아요<button className="delete"></button>
                    </em>
                    {/* <p>등록된 금지어가 없습니다.</p> */}
                </div>
            </div>
        </div>
    );
}

export default ProhibitedWord;
