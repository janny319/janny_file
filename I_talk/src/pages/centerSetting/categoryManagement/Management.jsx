import React, { useRef, useState } from 'react';
import TopSelect from '@/components/TopSelect';
import '@/style/operating.scss'; //2024.05.23 scss 경로 변경
import '@/style/tab.scss';
import { Link } from 'react-router-dom';
import Category from '@/components/Category';

function Management() {
    const title = ['운영관리', '센터운영 설정', '카테고리 관리'];
    const subTitle = title[title.length - 1];
    // 각 드롭다운 메뉴에 대한 버튼 내용을 배열로 관리
    const dropdownButtonContents = [{ title: '센터 선택', option: 'iComm 고객센터' }];
    const dropdownContents = [['iComm 고객센터 1', 'iComm 고객센터 2', 'iComm 고객센터 3', 'iComm 고객센터 4']];
    const dropdownRefs = useRef(Array.from({ length: 1 }, () => React.createRef()));
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isDropdownActive, setIsDropdownActive] = useState([false, false, false, false]);
    const [selectedItem, setSelectedItem] = useState(['', '', '', '']);

    const [value, setValue] = useState('');
    const [isOverLimit, setIsOverLimit] = useState(false); // 추가된 상태
    const [state, setState] = useState(true);
    const [validationError, setValidationError] = useState(false); // 저장버튼 누를 경우 메신저 나오게 하는 조건문
    const onChangeValue = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50) {
            setValue(inputValue);
            setIsOverLimit(false);
        } else {
            setIsOverLimit(true);
        }
    };

    const toggleButton = () => {
        setState(!state);
    };

    const saveBtn = () => {
        if (!isOverLimit) {
            setValidationError(!validationError);
        }
    };
    const renderTime = () => {
        return (
            <div className="no-info">
                <p>목록에서 카테고리를 선택하세요.</p>
            </div>
        );
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
                            <Link to="/CategotyManage" className="tab-btn active">
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
                            <Link to="/AdvancedSetting" className="tab-btn">
                                <span>고급 설정</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont-box">
                <Category />
                <div className="detail">
                    <div className="category-name">
                        <span>선택</span>
                        <div className="navi">
                            <span>iComm 고객센터</span>
                            <strong>iComm 고객센터</strong>
                        </div>
                    </div>
                    <div className="cont">
                        <div className="use-whether">
                            <div className="info-textbox">
                                <div className="toggle-btn">
                                    <span>카테고리 사용 여부</span>
                                    <label htmlFor="category-toggle" className="toggle-switch">
                                        <input onClick={toggleButton} type="checkbox" id="category-toggle"></input>
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <span className="add-info">
                                    <i className="no-team"></i>최소 1개의 카테고리를 사용해야 합니다.
                                </span>
                            </div>
                            <div className="info-textbox">
                                <span>ID</span>
                                <p>CenterID</p>
                            </div>
                        </div>
                        <div className="category-info">
                            <div className="info-textbox">
                                <span>카테고리 설명</span>
                                <textarea
                                    onChange={onChangeValue}
                                    value={value}
                                    placeholder="차단사유를 입력하세요."
                                    className={isOverLimit ? 'error' : ''} // 조건에 따른 클래스 추가
                                />
                                {isOverLimit && <span className="error-txt">최대 50자 입력 가능합니다.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="btn-list right underline">
                        <button type="button" className="underline-btn">
                            초기화
                        </button>
                        <button type="button" disabled={state} className="underline-btn">
                            카테고리 삭제
                        </button>
                    </div>
                    <div className="btn-list right">
                        {validationError && <div className="validation-error">필수 정보를 모두 입력하세요.</div>}
                        <button className="btn bg black" disabled={isOverLimit} onClick={saveBtn}>
                            저장
                        </button>
                    </div>
                </div>
                {/* default 값 */}
                {/* {renderTime()} */}
            </div>
        </div>
    );
}

export default Management;
