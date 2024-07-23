import React, { useState } from 'react';

function CounselInfo() {
    //textarea 관련
    const [inputTextarea, setInputTextarea] = useState('');
    const [isTextareaFocused, setTextareaFocused] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const handleTextareaChange = (event) => {
        setInputTextarea(event.target.value);
    };
    const clearTextarea = () => {
        setInputTextarea('');
        setShowButton(false);
    };
    const handleTextareaFocused = () => {
        setTextareaFocused(true);
    };
    const handleTextareaBlur = () => {
        setTextareaFocused(false);
        if (inputTextarea.length > 0) {
            setShowButton(true);
            setTextareaFocused(false);
        } else {
            setShowButton(false);
        }
    };
    return(
        <div>
            <div className='counsul-info'>
                <h4>고객정보</h4>
                <div className='value-wrap'>
                    <dl className='value-box'>
                        <dt>식별번호</dt>
                        <dd>HJY166156 <button className='txt-copy'></button></dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>이름</dt>
                        <dd>김궁금</dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>아이디</dt>
                        <dd>leebabo</dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>전화번호</dt>
                        <dd>010-2323-3232</dd>
                    </dl>
                </div>
                <h4>상담방 정보</h4>
                <div className='value-wrap'>
                    <dl className='value-box'>
                        <dt>방번호</dt>
                        <dd>329ASG536AR</dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>문의 채널</dt>
                        <dd>Web채널</dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>센터</dt>
                        <dd>회원가입 센터</dd>
                    </dl>
                    <dl className='value-box'>
                        <dt>카테고리</dt>
                        <dd>신규고객 상담</dd>
                    </dl>
                </div>
                <h4>상담 메모</h4>
                <div className={`txt-wrap ${isTextareaFocused && 'focused' || showButton && 'none'}`}>
                    <textarea
                        placeholder='상담 시 필요한 메모를 입력하세요.'
                        id="textarea"
                        value={inputTextarea}
                        onChange={handleTextareaChange}
                        onFocus={handleTextareaFocused}
                        onBlur={handleTextareaBlur}
                    ></textarea>
                    {showButton && (
                        <button className="delete" onClick={clearTextarea}></button>
                    )}
                </div>
            </div>
            <div className='non-date' style={{display:"none"}}>
                <p>대화방을 선택하면 고객정보/상담정보/이전상담 이력 등을 확인할 수 있습니다.</p>
            </div>
        </div>
    )
}

export default CounselInfo;