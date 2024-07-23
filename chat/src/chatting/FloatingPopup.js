import React from 'react';
import './../popup.css';

function FloatingPopup({ isVisible, onClose }) {
  return (
    <div className={`floating-popup ${isVisible ? 'visible' : ''}`} style={{ top:"-1%" }}>
        <div className='dimd'></div>
        <div className="popup-content">
            <div className='btn-list'>
                <button>
                    <i className='camera'></i>
                    <span>사진촬영</span>
                </button>
                <button>
                    <i className='album'></i>
                    <span>앨범</span>
                </button>
                <button>
                    <i className='file'></i>
                    <span>파일 불러오기</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default FloatingPopup;