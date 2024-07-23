import React, { useState } from 'react';
import '@/style/operating.scss';
import '@/style/tab.scss';
import SearchBox from '@/pages/operate/notice/SearchBox';
import Pagination from '@/components/Pagination';
import Sorting from '@/components/Sorting';
import PopUp from '@/components/PopUp';

const data = [
    {
        center: '신규계약센터',
        team: '장기 저축급여 분할금여금 신청 안내',
        id: '신용 대출 상환은 어떻게 하나요?',
        person: 'Y',
        asign: '2024-02-02',
        modify: '2024-02-02',
        hits: '20',
    },
    {
        center: '신규계약센터',
        team: '장기 저축급여 분할금여금 신청 안내',
        id: '신용 대출 상환은 어떻게 하나요?',
        person: 'Y',
        asign: '2024-02-02',
        modify: '2024-02-02',
        hits: '20',
    },
    {
        center: '신규계약센터',
        team: '장기 저축급여 분할금여금 신청 안내',
        id: '신용 대출 상환은 어떻게 하나요?',
        person: 'Y',
        asign: '2024-02-02',
        modify: '2024-02-02',
        hits: '20',
    },
];

const popUpData = [
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
    // {
    //     group: '장기저축급여',
    //     option: '장기 저축급여 분할금여금 신청 안내',
    //     tit: '신용 대출 상환은 어떻게 하나요?',
    //     open: 'Y',
    //     know: 'Y',
    // },
];

function Knowledge() {
    const [open, setOpen] = useState(false);
    const preModal = () => {
        setOpen(true);
    };
    const closePopup = () => {
        setOpen(false);
    };
    const truncateString = (str, length) => {
        return str.length > length ? str.substr(0, length) + '...' : str;
    };
    // value 값 말줄임 하기 위한 변수
    const [values, setValues] = useState({
        fourBtn: truncateString('장기저축급여 일이삼사오육칠팔구십일이삼사오육칠팔구십', 14),
        twoBtn: truncateString('장기저축급여 일이삼사오육칠팔구십일이삼사오육칠팔구십', 16),
    });

    const shortingWord = (e) => {
        const { value, className } = e.target;
        let newValue = value;
        // 한글 기준
        if (className.includes('four-btn') && value.length > 14) {
            newValue = value.substr(0, 14) + '...';
            console.log('말줄임 - four-btn', newValue);
        } else if (className.includes('two-btn') && value.length > 16) {
            newValue = value.substr(0, 16) + '...';
            console.log('말줄임 - two-btn', newValue);
        }

        setValues((prevValues) => ({
            ...prevValues,
            [className.includes('four-btn') ? 'fourBtn' : 'twoBtn']: newValue,
        }));
    };

    // 2024.07.23 수정
    const [activeButton, setActiveButton] = useState({
        entryTime: 0,
        waitingTime: 0,
        progressTime: 0,
    });

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

    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="8">
                        <p className="no-data">조회된 데이터가 없습니다. </p>
                    </td>
                </tr>
            );
        }
    };

    const popUprenderRow = () => {
        if (popUpData.length === 0) {
            return (
                <tr>
                    <td colSpan="5 ">
                        <p className="no-data">파일을 업로드 하세요. </p>
                    </td>
                </tr>
            );
        }
    };

    return (
        <div className="content category">
            <div className="page-tit">
                <h3>지식관리</h3>
                <span className="navi">
                    <em>
                        <i className="home"></i>
                    </em>
                    <em>지식관리</em>
                </span>
            </div>
            <div className="cont-box">
                <div className="edit " style={{ height: '735px' }}>
                    <div className="edit-tit-wrap">
                        <h4>지식 분류</h4>
                        <div className="btn-list right">
                            <button className="btn small line weight black txt ico plus">그룹 추가</button>
                        </div>
                    </div>
                    <div className="edit-scroll">
                        <div className="edit-btn-wrap">
                            <button className="edit-all on">
                                <em className="edit-bar">전체</em>
                                <span className="know-num">1,000</span>
                            </button>
                            <button className="edit-all">
                                <em className="edit-star">자주 찾는 지식</em>
                                <span className="know-num">1,000</span>
                            </button>
                        </div>
                        <div className="edit-con">
                            <ul className="edit-list-tit">
                                <button className="edit-minus"></button>
                                <li className="list-wrap knowledge">
                                    <div className="edit-txt">
                                        <input
                                            className="four-btn"
                                            type="text"
                                            value={values.fourBtn}
                                            onChange={shortingWord}
                                            // readOnly={true}
                                        />
                                        <span className="know-num">1,000</span>
                                        <button className="btn-edit"></button>
                                        <button className="btn-edit-trash"></button>
                                        <button className="btn-edit-plus"></button>
                                    </div>
                                    <ul>
                                        <li className="edit-sub-list">
                                            <div className="edit-wrap">
                                                <div className="edit-txt">
                                                    <input
                                                        className="two-btn"
                                                        value={values.twoBtn}
                                                        onChange={shortingWord}
                                                        type="text"
                                                        readOnly={true}
                                                    />
                                                    <button className="btn-edit"></button>
                                                    <button className="btn-edit-trash"></button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="edit-sub-list">
                                            <div className="edit-wrap">
                                                <div className="edit-txt on">
                                                    <input className="two-btn" type="text" readOnly={true} />
                                                    <button className="btn-edit"></button>
                                                    <button className="btn-edit-trash"></button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="edit-sub-list">
                                            <div className="edit-wrap-modify">
                                                <div className="edit-txt modify">
                                                    <div className="edit-input error">
                                                        <input type="text" readOnly={true} />
                                                    </div>
                                                    <span className="edit-check">최대 20자 입력 가능합니다.</span>
                                                    <div className="btn-list right">
                                                        <button className="btn bg small white txt-black black">
                                                            취소
                                                        </button>
                                                        <button className="btn small bg black">저장</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="edit-sub-list">
                                            <div className="edit-wrap-modify">
                                                <div className="edit-txt modify">
                                                    <div className="edit-input">
                                                        <input type="text" readOnly={true} />
                                                    </div>
                                                    <div className="btn-list right">
                                                        <button className="btn bg small white txt-black black">
                                                            취소
                                                        </button>
                                                        <button className="btn small bg black">저장</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* <p className="no-template">등록된 템플릿 분류 그룹이 없습니다.</p> */}
                    </div>
                    <div className="fixed-info">
                        <span>선택 분류 정보</span>
                        <div>
                            <dl className="tit-info">
                                <dt>그룹</dt>
                                <dd>일이삼사오육칠팔구십일이삼사오육칠팔구십</dd>
                            </dl>
                            <dl className="sub-info">
                                <dt>코드 : </dt>
                                <dd>Group1234567890</dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="tit-info">
                                <dt>분류</dt>
                                <dd>신용 대출</dd>
                            </dl>
                            <dl className="sub-info">
                                <dt>코드 : </dt>
                                <dd>Group1234567890</dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="tit-info">
                                <dt>등록 지식</dt>
                                <dd>20,000건</dd>
                            </dl>
                            <dl className="sub-info">
                                <dt>공개 : </dt>
                                <dd>250,000건</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="detail-category knoledge">
                    <div className="sub-tit">
                        <h4>
                            지식목록<span>전체</span>
                        </h4>
                    </div>
                    <div className="knoledge-wrap">
                        <div className="knoledge-search">
                            <SearchBox />
                        </div>
                        <div className="btn-list right">
                            <button className="btn small ico gray down">전체 다운로드</button>
                            <button className="btn small line weight gray">선택 삭제</button>
                            <i className="ico-bar"></i>
                            <button className="btn small line weight black txt ico upload" onClick={preModal}>
                                엑셀 업로드
                            </button>
                            <button className="btn small line weight black txt ico plus">신규 등록</button>
                        </div>
                    </div>
                    {open && (
                        <PopUp title={'엑셀 업로드'} alertClassName={'know-popup'} closePopup={closePopup}>
                            <div className="exel-wrap">
                                <div className="exel-tit">
                                    <h4>엑셀 업로드 가이드</h4>
                                    <button className="btn small ico gray down">템플릿 다운로드</button>
                                </div>
                                <div className="exel-manual">
                                    <p>1. 템플릿을 다운로드 받으세요.</p>
                                    <p>2. 다운로드한 템플릿에 지식 정보를 작성 후 저장하세요.</p>
                                    <p>3. 아래의 [엑셀 업로드]을 클릭하여 저장한 지식을 업로드 하세요.</p>
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
                                        <div className="btn small line weight black txt ico upload">엑셀 업로드</div>
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
                                                        <col width="80px" />
                                                        <col width="110px" />
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th className="align-left">그룹</th>
                                                            <th>분류</th>
                                                            <th className="align-left">제목</th>
                                                            <th>공개여부</th>
                                                            <th>자주찾는지식</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {popUpData.map((row, index) => (
                                                            <tr key={index}>
                                                                <td className="align-left">{row.group}</td>
                                                                <td>{row.option}</td>
                                                                <td className="align-left">{row.tit}</td>
                                                                <td>{row.open}</td>
                                                                <td>{row.know}</td>
                                                            </tr>
                                                        ))}
                                                        {popUprenderRow()}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-list right">
                                        <div className="validation-error">파일 업로드 후 시도하세요.</div>
                                        <button className="btn bg white txt-black black" onClick={closePopup}>
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

                    <div className="grid-con">
                        <div className="grid-box">
                            <div className="scroll-box">
                                <table className="table-basic">
                                    <colgroup>
                                        <col width="60" />
                                        <col width="160px" />
                                        <col width="160px" />
                                        <col width="*" />
                                        <col width="80px" />
                                        <col width="112px" />
                                        <col width="112px" />
                                        <col width="112px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" />
                                            </th>
                                            <th>그룹</th>
                                            <th>분류</th>
                                            <th>제목</th>
                                            <th>공개여부</th>
                                            <th>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('entryTime')}
                                                    className={getButtonClass('entryTime')}
                                                >
                                                    등록<i></i>
                                                </button>
                                            </th>
                                            <th>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('waitingTime')}
                                                    className={getButtonClass('waitingTime')}
                                                >
                                                    수정<i></i>
                                                </button>
                                            </th>
                                            <th>
                                                {/* 2024.07.23 className 수정 */}
                                                <button
                                                    onClick={() => toggleActiveButton('progressTime')}
                                                    className={getButtonClass('progressTime')}
                                                >
                                                    조회수<i></i>
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
                                                <td>{row.center}</td>
                                                <td>{row.team}</td>
                                                <td>{row.id}</td>
                                                <td>{row.person}</td>
                                                <td>{row.asign}</td>
                                                <td>{row.modify}</td>
                                                <td>{row.hits}</td>
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
            </div>
        </div>
    );
}

export default Knowledge;
