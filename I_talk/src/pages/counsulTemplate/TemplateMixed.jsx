import React, { useState } from 'react';
import SelectBox from '@/components/SelectBox';

function TemplateMixed() {
    const [value, setValue] = useState(false);
    const onChange = () => {
        setValue(true);
    };
    return (
        <div className="content">
            <div className="page-tit">
                <h3>
                    상담 템플릿 관리<span className="sub-tit">등록</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>운영관리</em>
                    <em>상담 템플릿 관리</em>
                    <em>등록</em>
                </span>
            </div>
            <div className="noti-asign-wrap">
                <div className="noti-asign">
                    <div className="asign-wrap">
                        <div className="left-info">
                            <div className="info-textbox">
                                <span className="center-txt">분류</span>
                                <SelectBox
                                    selectClassName={'nomal asign'}
                                    title={'기본 카테고리'}
                                    options={['센터 선택 1', '센터 선택 2']}
                                />
                            </div>
                            <div className="info-textbox">
                                <span className="center-txt">유형​</span>
                                {/* 2024.06.10 title, options 수정 */}
                                <SelectBox
                                    selectClassName={'nomal asign'}
                                    title={'혼합형(이미지 + 텍스트 + 링크)'}
                                    options={['텍스트형', '혼합형(이미지 + 텍스트 + 링크)']}
                                />
                            </div>
                            <div className="info-textbox top">
                                <span className="center-txt">템플릿 내용</span>
                                <div className="box-wrap">
                                    <div className="info-textbox column">
                                        <div className="center-txt both">
                                            <span>이미지</span>
                                            <button className="btn small line weight gray">파일 첨부</button>
                                        </div>
                                        <div className="file-wrap">
                                            {/* 2024.06.10 placeholder 추가 */}
                                            <input
                                                type="text"
                                                onChange={onChange}
                                                placeholder="2MB이하의 jpg, png 파일만 등록 가능합니다."
                                            />
                                            {value && <button className="btn-edit-close"></button>}
                                        </div>
                                    </div>
                                    <div className="info-textbox column">
                                        <span className="center-txt">텍스트</span>
                                        <textarea className="con-txt" placeholder="내용을 입력하세요."></textarea>
                                        <span className="letter-num">
                                            0<em className="total">/ 1,000</em>
                                        </span>
                                    </div>
                                    <div className="info-textbox column">
                                        <div className="center-txt both">
                                            <span>링크</span>
                                            <button className="btn small line weight gray">링크 추가</button>
                                        </div>
                                        <div className="grid-box">
                                            <table className="table-basic">
                                                <colgroup>
                                                    <col width="220px" />
                                                    <col width="*" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th className="align-left">버튼명</th>
                                                        <th className="align-left">링크 URL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {/* 2024.06.10 placeholder 추가 */}
                                                            <input type="text" placeholder="최대 20자" />
                                                        </td>
                                                        <td className="table-btn">
                                                            <div>
                                                                {/* 2024.06.10 placeholder 추가 */}
                                                                <input
                                                                    type="text"
                                                                    placeholder="버튼 클릭 시, 연결되는 페이지 링크 입력​"
                                                                />
                                                                <button className="top-arrow"></button>
                                                                <button className="btm-arrow"></button>
                                                                <button className="btn-edit-del">삭제</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-info">
                            <p>미리보기</p>
                            <div className="pre-img">
                                <img alt="img test"></img>
                                <p>test</p>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                                <button className="pre-btn">바로가기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-list right">
                    <div className="noti-btn">
                        <button className="btn bg white txt-black black">취소</button>
                        <button className="btn bg  black">등록</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateMixed;
