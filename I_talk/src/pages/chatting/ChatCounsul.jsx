import React, { useState } from 'react';
import Tab from '@/components/Tab';
import '@/style/chatting.scss';
import userDefault from '@/assets/icon/ico_chat_user_default.svg';
import PriviousChat from '@/pages/chatting/PriviousChat';
import ChatWindow from '@/pages/chatting/ChatWindow';
import Navigation from '@/components/Navigation';
import CounselInfo from '@/pages/chatting/CounserInfo';
import ChatTemplate from '@/pages/chatting/ChatTemplate';
import ChatFile from '@/pages/chatting/ChatFile';
import ChatKnowledge from '@/pages/chatting/ChatKnowledge';
import ChattingList from '@/pages/chatting/ChattingList';

function ChatCounsul() {
	const title = ['채팅상담'];
	//상담현황 tab관련
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
        setActiveTab(index);
    };
	const tabCounsulState = [
        { title: '대기', number: '00' },
        { title: '진행', number: '00' },
        { title: '보류', number: '00' },
        { title: '후처리', number: '00' },
        { title: '완료', number: '00' },
    ].map((tab, index) => ({ ...tab, index }));
	//3번영역 cont tab 관련
	const [activeInfoTab, setActiveInfoTab] = useState(0);
	const handleTabCounsulInfoClick = (index) => {
        setActiveInfoTab(index);
    };
	const tabCounsulInfo = [
        { title: '상담정보' },
        { title: '템플릿' },
        { title: '이미지 / 파일' },
        { title: '지식조회'},
    ].map((tab, index) => ({ ...tab, index }));
	//현재 채팅창/이전채팅창 노출
	const [chatView, setChatView] = useState('chatNow');
    const toggleChatView = () => {
        setChatView(chatView === 'chatNow' ? 'chatPrev' : 'chatNow');
    };

	return (
		<div className="content">
			<Navigation title={title} />
			<div className='chat-wrap'>
				<div className='counsul-state'>
					<h4>내 상담현황</h4>
					{/* 2024.05.31 className 추가 */}
					<Tab
						tabTitles={tabCounsulState}
						handleTabClick={handleTabClick}
						activeTab={activeTab}
						className={'vertical'}
					/>
					{/* 각 탭에 대한 내용 */}
					<div className='tab-cont'>
						{activeTab === 0 && (


							<ChattingList activeTab={activeTab} />
						)}
						{activeTab === 1 && (
							<ChattingList activeTab={activeTab} />
						)}
						{activeTab === 2 && (
							<ChattingList activeTab={activeTab}/>
						)}
						{activeTab === 3 && (
							<ChattingList activeTab={activeTab} />
						)}
						{activeTab === 4 && (
							<ChattingList activeTab={activeTab} />
						)}
					</div>
				</div>
				<div className='chat-box'>
					<div className='chat-box-wrap'>
						<div className='chat-head'>
							<div className='customer-info'>
								<div className='name'>
									<i><img src={userDefault} alt='user 아이콘' /></i>
									홍궁금
								</div>
								<ul className='time'>
									<li>
										<em>최초 요청</em>
										<span>24-03-10 08:12:22</span>
									</li>
									<li>
										<em>최초 응대</em>
										<span>24-03-10 08:15:32</span>
									</li>
									<li>
										<em>경과</em>
										<span>00:05</span>
									</li>
								</ul>
							</div>
							<button
								className={`btn small ico ${chatView === 'chatNow' ? 'right' : 'orange left'}`}
								onClick={toggleChatView}
							>
								{chatView === 'chatNow' ? '이전 상담 보기' : '현재 상담 보기'}
							</button>
						</div>
						{chatView === 'chatNow' && (
							<ChatWindow />
						)}
						{chatView === 'chatPrev' && (
							<PriviousChat />
						)}
					</div>
					{/* 대화방을 선택하지 않았을땤 */}
					<div className='non-date' style={{display:"none"}}>
						<p>내 상담 현황에서 대화 목록을 선택해 주세요.</p>
					</div>
				</div>

				<div className='board'>
					<Tab
						tabTitles={tabCounsulInfo}
						handleTabClick={handleTabCounsulInfoClick}
						activeTab={activeInfoTab}
						className={'title-only'}
					/>
					<div className='tab-cont'>
						{activeInfoTab === 0 && (
							<CounselInfo />
						)}
						{activeInfoTab === 1 && (
							<ChatTemplate />
						)}
						{activeInfoTab === 2 && (
							<ChatFile />
						)}
						{activeInfoTab === 3 && (
							<ChatKnowledge/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatCounsul;