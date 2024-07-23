import React, { useState, useEffect, useRef } from 'react';
import userDefault from '@/assets/icon/ico_chat_user_default.svg';
import imgTBD from '@/assets/img/img_tbd.png';
import PopUp from '@/components/PopUp';
import UserBlock from "@/pages/chatting/UserBlock"
import EscalationPop from '@/pages/chatting/EscalationPop';
import ChatEnd from '@/pages/chatting/ChatEnd';

function ChatWindow(){
    //채팅 입력창
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const textareaRef = useRef(null);

    const handleFocus = () => {
        if (!isDisabled) {
            setIsFocused(true);
            if (inputValue === '') {
                setInputValue('');
            }
        }
    };
    const handleBlur = () => {
        if (!isDisabled) {
            setIsFocused(false);
            if (inputValue.length > 0) {
                setIsFocused(true);
            }
        }
    };
    const handleChange = (event) => {
        if (!isDisabled) {
            setInputValue(event.target.value);
            adjustTextareaHeight();
        }
    };
    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = '';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    const adjustChatContHeight = () => {
        const chatCont = document.querySelector('.chat-cont');
        const chatInput = document.querySelector('.chat-input');
        if (chatCont && chatInput) {
            chatCont.style.height = `calc(100% - ${chatInput.scrollHeight}px)`;
        }
    };
    useEffect(() => {
        adjustTextareaHeight(); // Adjust height on initial render
    }, []);
    //차단된 고객일때 useState값'isBlockUser'
    //이관요청 고객일때 useState값'isEscalation'
    const [isBlockUser, setBlockUser] = useState('');
    const [isEscalation, setEscalation] = useState('');
    const handleBlockUser = () => {
        setBlockUser('isBlockUser')
        setEscalation('')
    };
    const handleUnblock = () => {
        setBlockUser('')
        setEscalation('')
    };
    const handleEscalation = () => {
        setEscalation('isEscalation')
    };
    //popup
    const [userBlock, setUserBlock] = useState(false);
    const [userEscalation, setUserEscalation] = useState(false);
    const [chatEnd, setChatEnd] = useState(false);
    const userBlockOpen = () => {
        setUserBlock(true);
    };
    const userEscalationOpen = () => {
        setUserEscalation(true);
    }
    const chatEndPopOpen = () => {
        setChatEnd(true)
    }
    const closePopup = () => {
        setUserBlock(false);
        setUserEscalation(false);
        setChatEnd(false)
    };

    return(
        <div className="chat-cont-wrap">
            {isBlockUser && <p className='bock-msg'>차단된 고객의 대화방입니다.</p>}
            {/* 현재 채팅화면 */}
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
                        <div><img src={imgTBD} alt='예시이미지' /></div>
                        <em>10:00</em>
                    </div>
                </div>
                {isBlockUser && <p className='chat-state'>고객차단으로 대화가 종료되었습니다.</p> }
                {isEscalation && <p className='chat-state'>고객님 요청으로 상담원을 변경합니다.</p> }
            </div>
            {/* disabled 추가시 textarea readonly로 값 변경 해주세요. */}
            <div className={`chat-input ${isFocused ? 'active' : 'inactive'} ${isDisabled ? 'disabled' : ''} ${isBlockUser ? "block-user" : ""}`} >
                <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={isDisabled}
                    placeholder='이곳을 클릭하여 상담을 시작해 주세요.'
                    rows={1}
                />
                <div className='upload-wrap'>
                    <div className='upload-img'>
                        <img src={imgTBD} alt='예시이미지' />
                        <button className='img-delete'></button>
                    </div>
                    <div className='upload-img'>
                        <img src={imgTBD} alt='예시이미지' />
                        <button className='img-delete'></button>
                    </div>
                </div>
                <button className='send'></button>
            </div>
            {isBlockUser ? (
                <div className='btn-area'>
                    <div className='align-left'>
                    </div>
                    <div className='alignt-right'>
                        <button className='btn bg white txt-black' onClick={handleUnblock}>차단해제</button>
                    </div>
                </div>
            ) : (
                <div className='btn-area'>
                    <div className='align-left'>
                        <button className='file-upload'></button>
                    </div>
                    <div className='alignt-right'>
                    <button className='btn bg white txt-red' onClick={userBlockOpen}>차단</button>
                        <button className='btn bg white txt-black' onClick={userEscalationOpen}>이관</button>
                        <button className='btn bg white txt-black'>종료보류</button>
                        <button className='btn bg black' onClick={chatEndPopOpen}>상담종료</button>
                    </div>
                </div>
            )}
            {userEscalation &&(
                <PopUp title={'상담 이관'} alertClassName={'size-popup'} closePopup={closePopup}>
                    <EscalationPop closePopup={closePopup} setEscalation={isEscalation} />
                </PopUp>
            )}
            {userBlock &&(
                <PopUp title={'고객 차단'} alertClassName={'size-popup'} closePopup={closePopup}>
                    <UserBlock closePopup={closePopup} setBlockUser={isBlockUser} />
                </PopUp>
            )}
            {chatEnd &&(
                <PopUp title={'상담 종료'} alertClassName={'size-popup'} closePopup={closePopup}>
                    <ChatEnd closePopup={closePopup} />
                </PopUp>
            )}
        </div>

    )
}

export default ChatWindow;