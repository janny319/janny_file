import React from 'react';
import './../popup.css';

function Alert({ onConfirm, onCancel }) {
    return (
      <div className="alert-popup">
        <div className="alert-content">
          <p>대화를 종료하시겠습니까?</p>
          <div className='pop-btn-list'>
            <button className='btn white' onClick={onConfirm}>예</button>
            <button className='btn violet' onClick={onCancel}>아니요</button>
          </div>
        </div>
      </div>
    );
  }

export default Alert;