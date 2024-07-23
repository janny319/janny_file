import SelectBox from '@/components/SelectBox';
import React from 'react';

function TeamInfo() {
    const data1 = ['김수현', '김수현', '김수현'];
    const data2 = [
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
        {
            name: '김수현',
            team: '계약2팀',
        },
    ];

    const renderRowsAsign = () => {
        if (data1.length === 0) {
            return (
                <tr>
                    <td colSpan="1">
                        <p className="no-data">
                            <i className="no-team"></i>등록된 팀원이 없습니다.
                        </p>
                    </td>
                </tr>
            );
        }
    };
    return (
        <div className="team-con">
            <div className="team-tit">
                <strong>팀 정보</strong>
            </div>
            <div className="acc-wrap">
                <div className="info-textbox">
                    <span>
                        팀 이름<i className="ico-check"></i>
                    </span>
                    <input type="text" placeholder="팀 이름을 입력하세요."></input>
                </div>
                <div className="info-textbox">
                    <span>팀 ID</span>
                    <p>TM0000000000</p>
                    {/* 24.05.21 p 태그로 수정 */}
                </div>
                <div className="info-textbox">
                    <span>
                        센터<i className="ico-check"></i>
                    </span>
                    <SelectBox
                        // 24.05.20 account 클래스 수정
                        selectClassName={'account-team'}
                        title={'옵션 1'}
                        options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                    />
                </div>
                <div className="info-team">
                    <span>팀원</span>
                    <div className="asign-wrap">
                        <div className="asign-team">
                            <div className="tit-team">
                                <span>등록된 팀원</span>
                                <span className="txt">{data1.length}명</span>
                            </div>
                            <div className="grid-wrap">
                                <div className="grid-box">
                                    <div className="scroll-box">
                                        {/* 2024.06.07 col 추가 하면서 table 수정 */}
                                        <table className="table-basic">
                                            <colgroup>
                                                <col width="*" />
                                                <col width="40px" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>센터</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data1.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row}</td>
                                                        <td>
                                                            <i className="close"></i>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {renderRowsAsign()}
                                            </tbody>
                                        </table>
                                        {/* 2024.06.07 col 추가 하면서 table 수정 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="asign-btn"></button>
                        <div className="asign-team">
                            <div className="tit-team">
                                <span>추가 가능한 사용자</span>
                                <span className="txt">신규계약센터</span>
                            </div>
                            <div className="grid-wrap">
                                <div className="grid-box">
                                    <div className="scroll-box">
                                        <table className="table-basic">
                                            <colgroup>
                                                <col width="100px" />
                                                <col width="100px" />
                                                <col width="*" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>이름</th>
                                                    <th>팀</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data2.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>{row.name}</td>
                                                        <td>{row.team}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-list underline right">
                    <button type="button" className="underline-btn">
                        초기화
                    </button>
                    <button type="button" className="underline-btn">
                        팀삭제
                    </button>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black black">
                    취소
                </button>
                <button type="button" className="btn bg black">
                    저장
                </button>
            </div>
        </div>
    );
}

export default TeamInfo;
