import React, { useState, useRef, useEffect } from 'react';
import './../style.css';
import FloatingPopup from './FloatingPopup';
import Alert from './Alert';
import imgTBD from './../images/img_tbd.png';
import imgTBDLong from './../images/img_tbd_long.png';

function ChatUI({ onEndChat }) {
  const [textareaHeight, setTextareaHeight] = useState(17);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isEndChatPopupVisible, setIsEndChatPopupVisible] = useState(false);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '19px'; //
      textarea.style.height = `${textarea.scrollHeight}px`;
      setTextareaHeight(textarea.scrollHeight);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${textareaHeight}px`;
    }
  }, [textareaHeight]);

  const togglePopup = () => {
    setIsPopupVisible(prevState => !prevState);
  };

  const toggleEndChatPopup = () => {
    setIsEndChatPopupVisible(prevState => !prevState);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    adjustTextareaHeight();
  };

  const handleSend = () => {
    setMessage('');
    setTextareaHeight(19); // Reset height to initial value
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = '19px'; // Set to initial height
    }
  };

  return (
    <div>
      <div className='chat-box'>
        <div className='chat-head'>
          <button className='chat-close' onClick={onEndChat}></button>
          <div className='chat-ico'></div>
          <div className='chat-info'>
            <h4>대화방 이름 두줄일 경우 대화방 이름 두줄일 경우대화 방 이름 두줄일 경우 대화방 이름 두줄일 경우</h4>
            <p className='connention'>
              <em>Online</em>
              <button className='chatting-end' onClick={toggleEndChatPopup}>대화종료</button>
            </p>
          </div>
        </div>
        <div className='chat-cont' style={{ flexBasis: `calc(100% - ${textareaHeight}px - 23px)` }}>
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              <button>더보기</button>
              <button disabled>버튼입니다</button>
              <em className='time'>10:01</em>
            </div>
            <ul className='btn-list'>
              <li><button>빠른응답</button></li>
              <li><button disabled>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
            </ul>
          </div>
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              <em className='time'>10:01</em>
            </div>
            <ul className='btn-list'>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
            </ul>
          </div>
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              <em className='time'>10:01</em>
            </div>
            <ul className='btn-list'>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
            </ul>
          </div>
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              <em className='time'>10:01</em>
            </div>
            <ul className='btn-list'>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
              <li><button>빠른응답</button></li>
            </ul>
          </div>
          <div className='customer-chat'>
            <div className='txt-box'>
              텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
              <em className='time'>10:01</em>
            </div>
          </div>
          <div className='customer-chat'>
            <div className='txt-box img'>
              <img src={imgTBD} alt='' />
            </div>
          </div>
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            {/* 템플릿 '가'  */}
            <div className='txt-box'>
              <section class="cb-section section_1">
                  <div class="cb-text text">Sample Title1 입니다.</div>
                  <em>134</em>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>

          {/* 템플릿 '나' wide  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box img'>
              <section class="cb-section section_1 wide">
                <img src={imgTBD} alt="예시 이미지" class="cb-image image1" />
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '나' square  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box img'>
              <section class="cb-section section_1 square">
                <img src={imgTBD} alt="예시 이미지" class="cb-image image1" />
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '나' original  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box img'>
              <section class="cb-section section_1 original">
                <img src={imgTBDLong} alt="예시 이미지" class="cb-image image1" />
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '다'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box img'>
              <section class="cb-section section_1 wide">
                <img src={imgTBD} alt="예시 이미지" class="cb-image image1" />
              </section>
              <section class="cb-section section_2">
                <div class="cb-text text1">Sample Text 입니다.</div>
              </section>
              <section class="cb-section section_3">
                <div class="cb-button"><button >버튼입니다</button></div>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '라'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              <section class="cb-section section_1">
                  <div class="cb-text title1">타이틀영역 최대 17자</div>
              </section>
              <section class="cb-section section_2">
                  <table>
                  <tbody class="cb-list">
                    <tr>
                      <td class="cb-text title2">인포뱅크</td>
                      <td class="cb-text title3">1234-5678-90</td>
                    </tr>
                    <tr>
                      <td class="cb-text title2">인포뱅크</td>
                      <td class="cb-text title3">1234-5678-90</td>
                    </tr>
                  </tbody>
                </table>
                <div class="cb-option"><button class="cb-button">더보기</button></div>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '마'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              <section class="cb-section section_1">
                <div class="cb-text text1">타이틀영역 최대 17자</div>
              </section>
              <section class="cb-section section_2">
                  <table>
                  <tbody class="cb-list">
                    <tr>
                      <td>
                        <span class="cb-text text2">선물받은 쿠폰</span>
                        <span class="cb-text text3">2024. 01. 01 ~ 2024.12.31</span>
                      </td>
                      <td class="cb-text text4">1장</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="cb-text text2">선물받은 쿠폰</span>
                        <span class="cb-text text3">2024. 01. 01 ~ 2024.12.31</span>
                      </td>
                      <td class="cb-text text4">1장</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '바'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>

              <em className='time'>10:01</em>
            </div>
          </div>
          {/* 템플릿 '사'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              <section class="cb-section section_1">
                  <div class="cb-text title1">타이틀영역 최대 17자</div>
              </section>
              <section class="cb-section section_2" >
                  <table>
                  <tbody class="cb-list">
                    <tr>
                        <td>
                            <div class="cb-text text">하나은행</div>
                            <div class="cb-text text2">1234-5678-90</div>
                        </td>
                        <td class="button"><button class="mini-btn">버튼명</button></td>
                    </tr>
                    <tr>
                      <td>
                          <div class="cb-text text">하나은행</div>
                          <div class="cb-text text2">1234-5678-90</div>
                      </td>
                      <td class="button"><button class="mini-btn">버튼명</button></td>
                  </tr>
                  </tbody>
                </table>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>

          {/* 템플릿 '자'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              <section class="cb-section section_1">
                <div class="cb-text">Sample Title 입니다.</div>
              </section>

              <section class="cb-section section_2">
                  <div class="cb-text">Sample Title 입니다.</div>
              </section>

              <section class="cb-section section_3">
                <div class="cb-button"><button >버튼입니다</button></div>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>

          {/* 템플릿 '차'  */}
          <div className='bot-chat'>
            <div className='profile'>
              <i className='icon'></i>
              <span>SKT 챗봇</span>
            </div>
            <div className='txt-box'>
              <section class="cb-section section_1">
                <div class="cb-text text">Sample Title1 입니다.</div>
              </section>
              <section class="cb-section section_2 img-sum">
                  <table>
                  <tbody class="cb-list">
                    <tr>
                      <td>
                        <div class="cb-image image"><img src={imgTBD} alt="예시 이미지" /></div>
                      </td>
                      <td>
                        <div class="cb-text text1">이미지 타이틀 최대13자</div>
                        <div class="cb-text text2">390,000원 ~</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="cb-image image"><img src={imgTBD} alt="예시 이미지" /></div>
                      </td>
                      <td>
                        <div class="cb-text text1">이미지 타이틀 최대13자</div>
                        <div class="cb-text text2">390,000원 ~</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="cb-option"><button class="cb-button">더보기</button></div>
              </section>
              <em className='time'>10:01</em>
            </div>
          </div>

        </div>
        <div className='chat-input'>
          <button onClick={togglePopup} className={`btn-popup ${isPopupVisible ? 'close' : ''}`}></button>
          <div className='input-wrap'>
            <textarea
              ref={textareaRef}
              placeholder='메시지를 입력해주세요.'
              value={message}
              onChange={handleInputChange}
              style={{ height: `${textareaHeight}px`}}
            ></textarea>
          </div>
          {message && (
            <button onClick={handleSend} className="send-button"></button>
          )}
          <FloatingPopup isVisible={isPopupVisible} onClose={togglePopup} />
        </div>
        {isEndChatPopupVisible && (
          <Alert
            onConfirm={() => {
              onEndChat();
              toggleEndChatPopup();
            }}
            onCancel={toggleEndChatPopup}
          />
        )}
      </div>
      <div className='btn-chatting' onClick={onEndChat}></div>
    </div>
  );
}

export default ChatUI;
