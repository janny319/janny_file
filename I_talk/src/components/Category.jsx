import React from 'react';

function Category() {
    return (
        <div className="edit">
            <div className="edit-tit-wrap">
                <h4>카테고리 목록</h4>
                <div className="btn-list">
                    <button className="btn small line weight black txt" disabled>
                        순서 편집
                    </button>
                    <button className="btn small line weight black txt ico plus">카테고리 추가</button>
                </div>
            </div>
            <div className="edit-con">
                <ul className="edit-list-tit">
                    <button className="edit-plus"></button>
                    <li className="list-wrap">
                        <div className="edit-txt">
                            <input className="two-btn" type="text" readOnly={true} />
                            {/* 240604 className two-btn 추가 */}
                            <button className="btn-edit"></button>
                            <button className="btn-edit-plus"></button>
                        </div>
                        <ul>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-edit"></button>
                                </div>
                            </li>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-edit"></button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="edit-list-tit">
                    <button className="edit-plus"></button>
                    <li className="list-wrap">
                        <div className="edit-txt modify">
                            <div className="edit-input error">
                                <input type="text" readOnly={true} />
                            </div>
                            <span className="edit-check">최대 20자 입력 가능합니다.</span>
                            <span className="add-info">
                                <i className="no-team"></i>
                                하위 카테고리가 1개인 경우, 이 카테고리 이름은 고객에게 노출되지 않습니다.
                            </span>
                            <div className="btn-list right">
                                <button className="btn bg small white txt-black black">취소</button>
                                <button className="btn small bg black">저장</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="edit-list-tit">
                    <button className="edit-plus"></button>
                    <li className="list-wrap">
                        <div className="edit-txt modify">
                            <div className="edit-input error">
                                <input type="text" readOnly={true} />
                            </div>
                            <span className="edit-check">최대 20자 입력 가능합니다.</span>
                            <span className="add-info">
                                <i className="no-team"></i>
                                하위 카테고리가 1개인 경우, 이 카테고리 이름은 고객에게 노출되지 않습니다.
                            </span>
                            <div className="btn-list right">
                                <button className="btn bg small white txt-black black">취소</button>
                                <button className="btn small bg black" disabled={true}>
                                    저장
                                </button>
                            </div>
                        </div>

                        <ul>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-edit"></button>
                                </div>
                            </li>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-edit"></button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="edit-list-tit">
                    <button className="edit-plus"></button>
                    <li className="list-wrap">
                        <div className="edit-txt">
                            <input className="two-btn" type="text" readOnly={true} />
                            {/* 240604 className two-btn 추가 */}
                            <button className="btn-edit"></button>
                            <button className="btn-edit-plus"></button>
                        </div>
                        <ul>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-edit"></button>
                                </div>
                            </li>
                            <li className="edit-sub-list">
                                <div className="edit-txt on">
                                    <input type="text" readOnly={true} />
                                    <button className="btn-off">OFF </button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="edit-list-tit">
                    <button className="edit-minus"></button>
                    <li className="list-wrap">
                        <div className="edit-txt">
                            <input type="text" readOnly={true} />
                            <div className="btn-edit-arrow">
                                <button className="top-arrow" disabled></button>
                                <button className="btm-arrow" disabled></button>
                            </div>
                        </div>
                        <ul>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <div className="btn-edit-arrow">
                                        <button className="top-arrow" disabled></button>
                                        <button className="btm-arrow" disabled></button>
                                    </div>
                                </div>
                            </li>
                            <li className="edit-sub-list">
                                <div className="edit-txt">
                                    <input type="text" readOnly={true} />
                                    <div className="btn-edit-arrow">
                                        <button className="top-arrow"></button>
                                        <button className="btm-arrow"></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="btn-list both">
                <button className="underline-btn">초기화</button>
                <div className="btn-area">
                    <button className="btn bg white txt-black black">취소</button>
                    <button className="btn bg black">저장</button>
                </div>
            </div>
        </div>
    );
}

export default Category;
