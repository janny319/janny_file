import React, { useState } from 'react';
import '@/style/login.scss';
import { useNavigate } from 'react-router-dom';

function PasswordChange() {
  // new password 담은 변수
  const navigate = useNavigate();
  const [pwd, setPwd] = useState({
    current: '', // info.password 값 가지고 와야함 - 임시로 넣어놓음
    newValue: '',
    checkedValue: '',
  });

  // error 담은 변수
  const [pwdErrorMsg, setPwdErrorMsg] = useState({
    current: '',
    newValue: '',
    checkedValue: '',
  });

  const className = document.getElementsByClassName('login-option');

  // 새 비밀번호 값 변경시 동작하는 함수
  const newPwdChange = (e) => {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()\-_=+`~[\]{}|;:'",.<>/?]{8,16}$/;
    const { value } = e.target;
    setPwd({ ...pwd, newValue: value });
    if (!passwordRegex.test(pwd.newValue)) {
      console.log('비밀번호 형식이 불일치 할 경우', pwdErrorMsg);
      className[1].classList.add('error');
      setPwdErrorMsg({
        ...pwdErrorMsg,
        newValue: '8~16자의 소문자, 숫자, 특수문자를 사용하세요.',
      });
    } else {
      className[1].classList.remove('error');
      setPwdErrorMsg({ ...pwdErrorMsg, newValue: '' });
    }
    console.log('[newPwdChange]', pwd);
  };

  // 새 비밀번호 확인 하기 위해 값 입력시 동작하는 함수
  const checkedPwd = (e) => {
    // 현재 비밀번호간에 일치하지 않을 경우
    if (pwd.current) {
      console.log('현재 비밀번호간에 일지 않지 않을 경우');
      className[0].classList.add('error');
      setPwdErrorMsg({
        ...pwdErrorMsg,
        current: '비밀번호가 일치하지 않습니다',
      });
    }
    // 비밀번호 형식이 불일치 할 경우

    // 새 비밀번호 확인 조건이 안 맞을 경우
    if (e.target.value !== pwd.newValue) {
      console.log('새 비밀번호 확인 조건이 안 맞을 경우');
      className[2].classList.add('error');
      setPwdErrorMsg({
        ...pwdErrorMsg,
        checkedValue: '비밀번호가 일치하지 않습니다',
      });
    }
  };

  return (
    <div className="login">
      <h1 className="login-tit">비밀번호 변경</h1>
      <span className="login-inquiry">비밀번호를 변경하여 개인정보를 보호하세요.</span>

      <div className="login-box">
        <div className="login-option">
          <div className="login-wrap">
            <label htmlFor="current-pwd">현재 비밀번호</label>
            <input
              id="current-pwd"
              type="password"
              placeholder="현재 비밀번호를 입력하세요."
              maxLength="16"
            />
          </div>
          <p className="error-info">{pwd.current}</p>
        </div>

        <div className="login-option">
          <div className="login-wrap">
            <label htmlFor="new-pwd">새 비밀번호</label>
            <input
              id="new-pwd"
              value={pwd.newValue}
              onChange={newPwdChange}
              type="password"
              placeholder="새 비밀번호를 입력하세요."
              maxLength="17"
            />
          </div>
          <p className="error-info">{pwdErrorMsg.newValue}</p>
        </div>

        <div className="login-option">
          <div className="login-wrap">
            <label htmlFor="pwd-checked">새 비밀번호 확인</label>
            <input
              id="pwd-checked"
              value={pwd.checkedValue}
              onChange={(e) => setPwd({ ...pwd, checkedValue: e.target.value })}
              type="password"
              placeholder="새 비밀번호를 입력하세요."
              maxLength="17"
            />
          </div>
          <p className="error-info">{pwdErrorMsg.checkedValue}</p>
        </div>
        <div className="btn-wrap">
          <button type="button" className="login-btn btn-white" onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="button" className="login-btn" onClick={checkedPwd}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordChange;
