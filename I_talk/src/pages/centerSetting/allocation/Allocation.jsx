import React, { useRef, useState } from 'react';
import TopSelect from '@/components/TopSelect';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import '@/style/statist.scss';
import { Link } from 'react-router-dom';

function Allocation() {
    const title = ['운영관리', '센터운영 설정', '상담 배분'];
    const subTitle = title[title.length - 1];
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);
    const [selectedButton, setSelectedButton] = useState(0);
    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

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
                            <Link to="/Allocation" className="tab-btn active">
                                <span>상담 배분</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/AdvancedSetting" className="tab-btn">
                                <span>고급 설정</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont-box allocation">
                <div className="category-name">
                    <strong>iComm 고객센터</strong>
                    <div className="btn-list underline right">
                        <button type="button" className="underline-btn">
                            초기화
                        </button>
                    </div>
                </div>
                <div className="option-wrap">
                    <button
                        type="button"
                        className={`option-btn ${selectedButton === 0 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(0)}
                    >
                        <div className="condition-tit">
                            <h4>진행 건 기준 균등 배분</h4>
                        </div>
                        <dl className="condition-info dot">
                            <dd>현재 기준, 진행 중인 상담 건수가 가장 적은 상담사에게 배분합니다.</dd>
                        </dl>
                        <dl className="condition-info dot">
                            <dd>모든 상담사가 동일한 조건일 때, 가장 오래전에 배분 받은 상담사에게 배분합니다.</dd>
                        </dl>
                    </button>
                    <button
                        type="button"
                        className={`option-btn ${selectedButton === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        <div className="condition-tit">
                            <h4>진행 건 기준 균등 배분</h4>
                        </div>
                        <dl className="condition-info dot">
                            <dd>현재 기준, 진행 중인 상담 건수가 가장 적은 상담사에게 배분합니다.</dd>
                        </dl>
                        <dl className="condition-info dot">
                            <dd>모든 상담사가 동일한 조건일 때, 가장 오래전에 배분 받은 상담사에게 배분합니다.</dd>
                        </dl>
                    </button>
                    <span className="add-info">
                        <i className="no-team"></i>
                        모든 상담사는 최대 상담건수 제한이 있으며, 이를 초과하는 경우 고객은 대기(미배분) 상태가 됩니다.
                    </span>
                </div>
                <div className="option-wrap">
                    <div type="button" className="option">
                        <div className="condition-tit">
                            <h4>동일한 이전 상담사 우선 배분</h4>
                            <div className="toggle-btn">
                                <label htmlFor="category-toggle-1" className="toggle-switch">
                                    <input type="checkbox" id="category-toggle-1" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                        <dl className="condition-info">
                            <dt>OFF :</dt>
                            <dd>이전 상담 이력과 관계없이 배분합니다.</dd>
                        </dl>
                        <dl className="condition-info">
                            <dt>ON :</dt>
                            <dd>이전 상담 이력에 따라 동일한 상담사를 우선 배분합니다.</dd>
                        </dl>
                    </div>
                    <div type="button" className="option">
                        <div className="condition-tit">
                            <h4>
                                상담사별 <em className="red">최대 상담건수 초과 허용여부</em>
                            </h4>
                            <div className="toggle-btn">
                                <label htmlFor="category-toggle-2" className="toggle-switch">
                                    <input type="checkbox" id="category-toggle-2" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                        <dl className="condition-info">
                            <dt>OFF :</dt>
                            <dd>이전 상담사의 최대 상담건수 초과 시, 임의의 상담사를 배분합니다.</dd>
                        </dl>
                        <dl className="condition-info">
                            <dt>ON :</dt>
                            <dd>
                                이전 상담사의 최대 상담건수를 <em className="red">초과하여도, 동일한 상담사를 배분</em>
                                합니다
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="btn-list right">
                    <button className="btn bg black">저장</button>
                </div>
            </div>
        </div>
    );
}

export default Allocation;
