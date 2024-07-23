import React, { useRef, useState, useEffect } from 'react';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import { Link } from 'react-router-dom';
import TopSelect from '@/components/TopSelect';

function AdvancedSetting() {
    //title부분
    const title = ['운영관리', '센터운영 설정', '고급설정'];
    const subTitle = title[title.length - 1];
    // DropDow 영역
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);

    return (
        <div className="content category">
            <div className="page-tit">
                <h3>
                    센터운영 설정 <span className="sub-tit">{subTitle}</span>
                </h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    {title.map((element, index) => (
                        <em key={index}>{element}</em>
                    ))}
                </span>
            </div>
            <div className="search-wrap">
                <TopSelect
                    dropdownRefs={dropdownRefs}
                    dropdownButtonContents={dropdownButtonContents}
                    dropdownContents={dropdownContents}
                    isOpen={isOpen}
                    isDropdownActive={isDropdownActive}
                    setIsDropdownActive={setIsDropdownActive}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setIsOpen={setIsOpen}
                />
                <div className="tap-wrap">
                    {/* 2024.05.23 링크연결 */}
                    <ul className="tab-btn-wrap">
                        <li>
                            <Link to="/CategotyManage" className="tab-btn">
                                <span>카테고리 관리</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/TimeSetting" className="tab-btn">
                                <span>운영시간</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Condition" className="tab-btn">
                                <span>상담조건/안내메시지</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Allocation" className="tab-btn">
                                <span>상담 배분</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/AdvancedSetting" className="tab-btn active">
                                <span>고급 설정</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont-box advanced">
                <div className="tit-area">
                    <h4>고급 설정</h4>
                    <button className="underline-btn">초기화</button>
                </div>
                <div className="option-wrap">
                    <div type="button" className="option">
                        <div className="condition-tit">
                            <h4>상담사 간 상담이력 조회 가능여부</h4>
                            <div className="toggle-btn">
                                <label htmlFor="category-toggle-2" className="toggle-switch">
                                    <input type="checkbox" id="category-toggle-2" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                        <dl className="condition-info">
                            <dt>OFF :</dt>
                            <dd>다른 상담사의 상담이력 조회가 불가능 합니다.</dd>
                        </dl>
                        <dl className="condition-info">
                            <dt>ON :</dt>
                            <dd>다른 상담사의 상담이력 조회가 가능 합니다.</dd>
                        </dl>
                    </div>
                </div>
                <div className="list-wrap">
                    <div className="tit-area colum">
                        <h4>상담 처리율 설정</h4>
                        <span>상담 처리율 설정</span>
                    </div>
                    <div className="grid-box">
                        <div className="scroll-box">
                            <table className="table-basic">
                                <colgroup>
                                    <col width="33%" />
                                    <col width="33%" />
                                    <col width="33%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>상태 구분</th>
                                        <th>상담 처리율</th>
                                        <th>색상 구분</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>정상</td>
                                        <td>
                                            <span className="processing">
                                                <input type="number" />
                                            </span>
                                            &nbsp;~ 100%
                                        </td>
                                        <td>
                                            <em className="normal"></em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>지연</td>
                                        <td>89% ~ 95%</td>
                                        <td>
                                            <em className="delay"></em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>위험</td>
                                        <td>
                                            0% ~{' '}
                                            <span className="processing">
                                                <input type="number" />
                                            </span>
                                        </td>
                                        <td>
                                            <em className="danger"></em>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="btn-list right">
                    <button className="btn bg black">저장</button>
                </div>
            </div>
        </div>
    );
}

export default AdvancedSetting;
