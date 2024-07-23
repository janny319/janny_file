import React, { useState } from 'react';
import '@/style/notice_popup.scss';
import SelectBox from '@/components/SelectBox';
import SearchBox from '@/pages/notice/SearchBox';
import Pagination from '@/components/Pagination';
import BoardHeader from '@/pages/notice/BoardHeader';
import BoardContent from '@/pages/notice/BoardContent';
import Tab from '@/components/Tab';

function BoardPopup() {
    const tabTitles = [{ title: '전체공지' }, { title: '센터공지' }];
    const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭을 관리하는 상태

    const handleSearch = (searchTerm) => {
        console.log('검색어:', searchTerm);
        // 여기에서 검색 기능을 수행하면 됩니다.
    };
    // 탭 버튼을 클릭했을 때 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="common-notice">
            <Tab className={'common'} tabTitles={tabTitles} handleTabClick={handleTabClick} activeTab={activeTab} />

            <div className="tab-cont" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                <div className="tab-con-tit">
                    <SelectBox
                        // 24.05.20 className 추가
                        selectClassName={'common-select-box'}
                        title={'옵션 1'}
                        options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                    />
                    <SearchBox onSearch={handleSearch} />
                </div>
                <div>
                    <table className="table-basic table-board">
                        <BoardHeader
                            width={['110', '318', '110', '110', '110']}
                            title={['번호', '제목', '작성자', '조회수', '등록일']}
                        />
                        <BoardContent
                            activeTab={activeTab}
                            data={['10', '[공지] 서버 작업으로 인한 시스템 점검', '김관리', 'N', 'YYYY-MM-DD']}
                        />
                        {/* data 가 없을 경우 화면도 보여주기용으로 샘플로 추가함 */}
                        <BoardContent activeTab={activeTab} data={[]} />
                    </table>
                    {/* <NoDataContent /> */}
                    <div className="paging-box">
                        <Pagination />
                    </div>
                </div>
            </div>
            <div className="tab-cont" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                <div className="tab-con-tit">
                    <SelectBox
                        selectClassName={'common-select-box'}
                        title={'옵션 1'}
                        options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
                    />

                    <SearchBox onSearch={handleSearch} />
                </div>
                <div>
                    <table className="table-basic table-board">
                        <BoardHeader
                            width={['60', '90', '200', '136', '136', '136']}
                            title={['번호', '센터명', '제목', '작성자', '조회수', '등록일']}
                        />
                        <BoardContent
                            activeTab={activeTab}
                            data={[
                                '10',
                                '김관리',
                                '[공지] 서버 작업으로 인한 시스템 점검',
                                '김관리',
                                'N',
                                'YYYY-MM-DD',
                            ]}
                        />
                    </table>
                    <div className="paging-box">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardPopup;
