import userDefault from '@/assets/icon/ico_chat_user_default.svg';

function PriviousChat() {
    return(
        <div className='chat-cont-wrap'>
            {/* 이전 상담 화면 */}
            <div className='privious-info'>
                <ul className='time'>
                    <strong>이전 상담 정보</strong>
                    <li>
                        <em>상담사</em>
                        <span>홍길동(hihihihihi)</span>
                    </li>
                    <li>
                        <span>24-03-10 08:15:32</span>
                    </li>
                </ul>
                <div className='btn-list'>
                    <button className='prev-chat' disabled>이전 상담</button>
                    <span><em>1</em>/<em>10</em></span>
                    <button className='next-chat'>다음 상담</button>
                </div>
            </div>
            <div className='chat-cont'>
                <div className='date-division'>
                    <span >24-02-20 화</span>
                </div>
                <div className='customer-chat'>
                    <i className='customer-ico'><img src={userDefault} alt='user 아이콘' /></i>
                    <div className='speech'>
                        <p>상품 가입</p>
                        <em>10:00</em>
                    </div>
                </div>
                <div className='my-chat'>
                    <div className='speech'>
                        <p>1:1 상담을 문의하였습니다. 잠시 후 상담사를 연결해드리겠습니다.</p>
                        <em>10:00</em>
                    </div>
                </div>
                <div className='my-chat'>
                    <div className='speech'>
                        <p><i className='file-ico pdf'></i>채팅상담 매뉴얼.pdf</p>
                        <em>10:00</em>
                    </div>
                </div>
                <div className='my-chat'>
                    <div className='speech'>
                        <p>1:1 상담을 문의하였습니다. 잠시 후 상담사를 연결해드리겠습니다.</p>
                        <em>10:00</em>
                    </div>
                </div>
                <div className='my-chat'>
                    <div className='speech'>
                        <p>1:1 상담을 문의하였습니다. 잠시 후 상담사를 연결해드리겠습니다.</p>
                        <em>10:00</em>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriviousChat;