import React, { useState } from 'react';
import '@/style/operating.scss';
import '@/style/tab.scss';
import Tab from '@/components/Tab';
import SelectBox from '@/components/SelectBox';
import Pagination from '@/components/Pagination';
import Sorting from '@/components/Sorting';
import PopUp from '@/components/PopUp';

const popUpData = [
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
    {
        group: '장기저축급여',
        option: '장기 저축급여 분할금여금 신청 안내',
        tit: '신용 대출 상환은 어떻게 하나요?',
        open: 'Y',
        know: 'Y',
    },
];

function Template() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [open, setOpen] = useState(false);
    const [upload, setUpload] = useState(false);
    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
    });

    const uploadModal = () => {
        setUpload(true);
    };
    const closeupLoad = () => {
        setUpload(false);
    };

    {/* 2024.07.23 수정 */}
    const toggleActiveButton = (buttonName) => {
        setActiveButton((prevState) => ({
            ...prevState,
            [buttonName]: (prevState[buttonName] + 1) % 3,
        }));
    };

    {/* 2024.07.23 추가 */}
    const getButtonClass = (buttonName) => {
        switch (activeButton[buttonName]) {
            case 1:
                return 'order-filter up';
            case 2:
                return 'order-filter down';
            default:
                return 'order-filter default';
        }
    };

    const popUprenderRow = () => {
        if (popUpData.length === 0) {
            return (
                <tr>
                    <td colSpan="3">
                        <p className="no-data">파일을 업로드 하세요. </p>
                    </td>
                </tr>
            );
        }
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const preModal = () => {
        setOpen(true);
    };
    const closePopup = () => {
        setOpen(false);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const tabCounsulState = [{ title: '공유 템플릿' }, { title: '개인 템플릿' }].map((tab, index) => ({
        ...tab,
        index,
    }));

    const tabTitles = [
        { title: '전체', number: '20' },
        { title: '기본형', number: '15' },
        { title: '혼합형', number: '5' },
    ].map((tab, index) => ({ ...tab, index }));

    const data = [
        {
            center: '신규계약센터',
            team: '장기 저축급여 분할금여금 신청 안내',
            id: '신용 대출 상환은 어떻게 하나요?​ 일이삼사오육칠팔구십 신용 대출 상환은 어떻게 하나요?​ 일이삼사오육칠팔구십 ',
            person: '홍매니저(ABCDEFG12345)',
            asign: '2024-02-02',
        },
        {
            center: '신규계약센터',
            team: '장기 저축급여 분할금여금 신청 안내',
            id: '신용 대출 상환은 어떻게 하나요?​ 일이삼사오육칠팔구십 신용 대출 상환은 어떻게 하나요?​ 일이삼사오육칠팔구십 ',
            person: '홍매니저(ABCDEFG12345)',
            asign: '2024-02-02',
        },
    ];

    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">주고받은 이미지가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };

    const showModal = () => {
        setModal(true);
    };

    //첫번째 tab관련
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        console.log('tab', index);
        setActiveTab(index);
    };
    // 두 번째 Tab 관련
    const [activeTab2, setActiveTab2] = useState(0);
    const handleTabClick2 = (index) => {
        console.log('tab2', index);
        setActiveTab2(index);
    };

    // 2024.07.22 input 닫기 버튼 실행시 필요한 동작 추가
    const [text, setText] = useState('');
    const searchValue = (e) => {
        const { value } = e.target;

        setText(value);
    };
    const clearText = () => {
        setText('');
    };

    return (
        <div className="content category">
            <div className="page-tit">
                <h3>상담 템플릿 관리</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>운영관리</em>
                    <em>상담 템플릿 관리</em>
                </span>
            </div>
            <div className="cont-box">
                <div className="edit">
                    <div className="edit-tit-wrap template">
                        <div className="template-wrap">
                            <h4>템플릿 분류</h4>
                            <div className="btn-list right">
                                <button className="btn small line weight black txt ico plus">그룹 추가</button>
                            </div>
                        </div>
                        <p>분류 그룹은 최대 20개까지 추가 가능합니다.</p>
                    </div>
                    <div className="edit-scroll">
                        <div className="edit-con">
                            <ul className="edit-list-tit">
                                <li className="list-wrap template-txt">
                                    <div className="edit-txt modify">
                                        <div className="edit-input ">
                                            <input type="text" readOnly={true} />
                                        </div>
                                        <span className="edit-check">최대 20자 입력 가능합니다.</span>
                                        <div className="btn-list right">
                                            <div className="validation-error">이미 등록된 분류명입니다.</div>
                                            <button className="btn bg small white txt-black black">취소</button>
                                            <button className="btn small bg black">저장</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <ul className="edit-list-tit">
                                <li className="list-wrap template-txt">
                                    <div className="edit-txt">
                                        <input type="text" className="two-btn" readOnly={true} />
                                        <button className="btn-edit"></button>
                                        <button className="btn-edit-trash"></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <p className="no-template">등록된 템플릿 분류 그룹이 없습니다.</p> */}
                    </div>
                </div>
                <div className="detail-category">
                    <div className="tab-wrap">
                        <div className="tab-tit-wrap">
                            <Tab tabTitles={tabCounsulState} handleTabClick={handleTabClick} activeTab={activeTab} />
                        </div>
                        <div className="tab-cont">
                            {activeTab === 0 && (
                                <>
                                    <div className="category-time">
                                        <div className="search-wrap search-template">
                                            <div className="info-textbox">
                                                <span>분류</span>
                                                {/* 2024.06.10 title, options 수정 */}
                                                <SelectBox
                                                    selectClassName={'template-sel'}
                                                    title={'전체'}
                                                    options={['전체', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                                                />
                                            </div>
                                            <i className="ico-bar"></i>
                                            <div className="info-textbox">
                                                <span>검색조건</span>
                                                {/* 2024.06.10 selectClassName 추가 title, options 수정 */}
                                                <SelectBox
                                                    selectClassName={'template-condi'}
                                                    title={'작성자'}
                                                    options={['작성자', '내용']}
                                                />
                                            </div>
                                            <i className="ico-bar"></i>
                                            <div
                                                className={`border-box search-input ${isInputFocused ? 'active' : ''}`}
                                            >
                                                {/* 2024.07.22 value,onChange 값 close-btn 추가 */}
                                                <input
                                                    type="text"
                                                    value={text}
                                                    onChange={searchValue}
                                                    placeholder="검색어를 입력하세요."
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                />
                                                {text && <button className="close-btn" onClick={clearText}></button>}
                                            </div>
                                            <i className="ico-bar"></i>
                                            <button className="btn bg black">조회</button>
                                        </div>
                                        <div className="btn-list">
                                            <button
                                                className="btn small line weight black txt ico upload"
                                                onClick={uploadModal}
                                            >
                                                엑셀 업로드
                                            </button>
                                            <button className="btn small line weight black txt ico plus">
                                                템플릿 등록
                                            </button>
                                        </div>
                                        {upload && (
                                            <PopUp
                                                title={'엑셀 업로드'}
                                                alertClassName={'know-popup'}
                                                closePopup={closeupLoad}
                                            >
                                                <div className="exel-wrap">
                                                    <div className="exel-tit">
                                                        <h4>엑셀 업로드 가이드</h4>
                                                        <button className="btn small ico gray down">
                                                            템플릿 다운로드
                                                        </button>
                                                    </div>
                                                    <div className="exel-manual">
                                                        <p>1. 템플릿을 다운로드 받으세요.</p>
                                                        <p>2. 다운로드한 템플릿에 지식 정보를 작성 후 저장하세요.</p>
                                                        <p>
                                                            3. 아래의 [엑셀 업로드]을 클릭하여 저장한 지식을 업로드
                                                            하세요.
                                                        </p>
                                                    </div>
                                                    <div className="exel-result">
                                                        <div className="result-tit">
                                                            <div className="result-tit-wrap">
                                                                <h4>엑셀 업로드 결과</h4>
                                                                <i className="ico-bar"></i>
                                                                <dl>
                                                                    <dt>파일명 :</dt>
                                                                    <dd className="file-name">
                                                                        일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
                                                                    </dd>
                                                                    <dd>.xlsx</dd>
                                                                    <button className="btn-edit-close"></button>
                                                                </dl>
                                                                <i className="ico-bar"></i>
                                                                <dl>
                                                                    <dt>성공 :</dt>
                                                                    <dd className="result-num">576</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="btn small line weight black txt ico upload">
                                                                엑셀 업로드
                                                            </div>
                                                        </div>
                                                        <p className="info">저장을 클릭하면 일괄 등록됩니다.</p>
                                                        <div className="grid-con">
                                                            <div className="grid-box">
                                                                <div className="scroll-box">
                                                                    <table className="table-basic">
                                                                        <colgroup>
                                                                            <col width="140px" />
                                                                            <col width="140px" />
                                                                            <col width="*" />
                                                                        </colgroup>
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="align-left">그룹</th>
                                                                                <th className="align-left">유형</th>
                                                                                <th className="align-left">내용</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {popUpData.map((row, index) => (
                                                                                <tr key={index}>
                                                                                    <td className="align-left">
                                                                                        {row.group}
                                                                                    </td>
                                                                                    <td className="align-left">
                                                                                        {row.option}
                                                                                    </td>
                                                                                    <td className="align-left">
                                                                                        {row.tit}
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                            {popUprenderRow()}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-list right">
                                                            <div className="validation-error">
                                                                파일 업로드 후 시도하세요.
                                                            </div>
                                                            <button
                                                                className="btn bg white txt-black black"
                                                                onClick={closePopup}
                                                            >
                                                                취소
                                                            </button>
                                                            <button className="btn bg black">저장</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* 업로드 표시 */}
                                                <div className="exel-upload">
                                                    <p>업로드 중</p>
                                                    <div className="upload-bar"></div>
                                                </div>
                                                {/* 업로드 표시 */}
                                            </PopUp>
                                        )}
                                    </div>
                                    <div className="template-tab">
                                        <Tab
                                            className={'common'}
                                            tabTitles={tabTitles}
                                            handleTabClick={handleTabClick2}
                                            activeTab={activeTab2}
                                        />
                                        {activeTab2 === 0 && (
                                            <div className="tab-cont">
                                                <div className="btn-list right">
                                                    <button className="btn small line weight  gray">선택 삭제</button>
                                                    <button className="btn small line weight  gray" onClick={preModal}>
                                                        선택 이동
                                                    </button>
                                                </div>
                                                {open && (
                                                    <PopUp
                                                        title={'템플릿 이동'}
                                                        alertClassName={'size-popup'}
                                                        closePopup={closePopup}
                                                    >
                                                        <div className="pop-content">
                                                            <div className="sub-tit">
                                                                <p className="tem-info">
                                                                    20개의 템플릿을 다음 분류로 변경합니다.
                                                                </p>
                                                            </div>
                                                            <div className="input-box">
                                                                <span className="group-name">분류 그룹명</span>
                                                                <SelectBox
                                                                    selectClassName={'account'}
                                                                    title={'분류 그룹을 선택하세요.'}
                                                                    options={['그룹', '그룹', '그룹']}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="btn-list right">
                                                            <button
                                                                type="button"
                                                                className="btn bg white txt-black black"
                                                                onClick={closePopup}
                                                            >
                                                                취소
                                                            </button>
                                                            <button type="button" className="btn bg black">
                                                                저장
                                                            </button>
                                                        </div>
                                                    </PopUp>
                                                )}
                                                <div className="grid-con">
                                                    <div className="grid-box">
                                                        <div className="scroll-box">
                                                            <table className="table-basic">
                                                                <colgroup>
                                                                    <col width="60" />
                                                                    <col width="160px" />
                                                                    <col width="160px" />
                                                                    <col width="404px" />
                                                                    <col width="*" />
                                                                    <col width="*" />
                                                                </colgroup>
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <input type="checkbox" />
                                                                        </th>
                                                                        <th className="align-left">분류</th>
                                                                        <th className="align-left">유형</th>
                                                                        <th className="align-left">내용</th>
                                                                        <th>작성자(ID)</th>
                                                                        <th>
                                                                            {/* 2024.07.23 className 수정 */}
                                                                            <button
                                                                                onClick={() => toggleActiveButton('entryTime')}
                                                                                className={getButtonClass('entryTime')}
                                                                            >
                                                                                등록일<i></i>
                                                                            </button>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {data.map((row, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <input type="checkbox" />
                                                                            </td>
                                                                            <td className="align-left">{row.center}</td>
                                                                            <td className="align-left">{row.team}</td>
                                                                            <td className="align-left">{row.id}</td>
                                                                            <td>{row.person}</td>
                                                                            <td>{row.asign}</td>
                                                                        </tr>
                                                                    ))}
                                                                    {renderRows()}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="paging-wrap">
                                                    <Sorting />
                                                    <Pagination />
                                                </div>
                                            </div>
                                        )}
                                        {activeTab2 === 1 && <div></div>}
                                    </div>
                                </>
                            )}
                            {activeTab === 1 && (
                                <>
                                    <div className="category-time">
                                        <div className="search-wrap search-template">
                                            <div className="info-textbox">
                                                <span>분류</span>
                                                <SelectBox
                                                    selectClassName={'template-sel'}
                                                    title={'전체'}
                                                    options={[
                                                        '센터 선택 1',
                                                        '센터 선택 2',
                                                        '센터 선택 3',
                                                        '센터 선택 4',
                                                    ]}
                                                />
                                            </div>
                                            <i className="ico-bar"></i>
                                            <div className="info-textbox">
                                                <span>검색조건</span>
                                                <SelectBox
                                                    // selectClassName={'account-team'}
                                                    title={'작성자'}
                                                    options={[
                                                        '센터 선택 1',
                                                        '센터 선택 2',
                                                        '센터 선택 3',
                                                        '센터 선택 4',
                                                    ]}
                                                />
                                            </div>
                                            <i className="ico-bar"></i>
                                            <div
                                                className={`border-box search-input ${isInputFocused ? 'active' : ''}`}
                                            >
                                                {/* 2024.07.22 value,onChange 값 close-btn 추가 */}
                                                <input
                                                    type="text"
                                                    value={text}
                                                    onChange={searchValue}
                                                    placeholder="검색어를 입력하세요."
                                                    onFocus={handleInputFocus}
                                                    onBlur={handleInputBlur}
                                                />
                                                {text && <button className="close-btn" onClick={clearText}></button>}
                                            </div>
                                            <i className="ico-bar"></i>
                                            <button className="btn bg black">조회</button>
                                        </div>
                                        <div className="btn-list">
                                            <button className="btn small line weight black txt ico plus">
                                                엑셀 업로드
                                            </button>
                                            <button className="btn small line weight black txt ico plus">
                                                템플릿 등록
                                            </button>
                                        </div>
                                    </div>
                                    <div className="template-tab">
                                        <Tab
                                            className={'common'}
                                            tabTitles={tabTitles}
                                            handleTabClick={handleTabClick2}
                                            activeTab={activeTab2}
                                        />
                                        {activeTab2 === 0 && (
                                            <div className="tab-cont">
                                                <div className="btn-list right">
                                                    <button className="btn small line weight  gray">선택 삭제</button>
                                                    <button className="btn small line weight  gray ">선택 이동</button>
                                                </div>
                                                <div className="grid-con">
                                                    <div className="grid-box">
                                                        <div className="scroll-box">
                                                            <table className="table-basic">
                                                                <colgroup>
                                                                    <col width="60" />
                                                                    <col width="160px" />
                                                                    <col width="160px" />
                                                                    <col width="404px" />
                                                                    <col width="*" />
                                                                    <col width="*" />
                                                                </colgroup>
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <input type="checkbox" />
                                                                        </th>
                                                                        <th className="align-left">분류</th>
                                                                        <th className="align-left">유형</th>
                                                                        <th className="align-left">내용</th>
                                                                        <th>작성자(ID)</th>
                                                                        <th>
                                                                            {/* 2024.07.23 className 수정 */}
                                                                            <button
                                                                                onClick={() =>toggleActiveButton('entryTime')}
                                                                                className={getButtonClass('entryTime')}
                                                                            >
                                                                                등록일<i></i>
                                                                            </button>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {data.map((row, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <input type="checkbox" />
                                                                            </td>
                                                                            <td className="align-left">{row.center}</td>
                                                                            <td className="align-left">{row.team}</td>
                                                                            <td className="align-left">{row.id}</td>
                                                                            <td>{row.person}</td>
                                                                            <td>{row.asign}</td>
                                                                        </tr>
                                                                    ))}
                                                                    {renderRows()}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="paging-wrap">
                                                    <Sorting />
                                                    <Pagination />
                                                </div>
                                            </div>
                                        )}
                                        {activeTab2 === 1 && <div></div>}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;
