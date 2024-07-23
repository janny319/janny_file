import React, { useEffect, useState } from 'react';
import '@/style/login.scss';
import imgLogo from '@/assets/img/img_logo_top.svg';
import { getTokenFromLocalStorage, logoutFunction, setAuthToken, setTokenLocalStorage } from '@/utils/authUtil';
import { useCookies } from 'react-cookie';
import { getConfigInfoApi, postLoginApi } from '@/api/login';
import { useLocation, useNavigate } from 'react-router-dom';
import { INFO_ERROR_MSG, INIT_INFO, BEARER_PREFIX, LOGIN_STATE } from '@/constants/login';
import useAuth from '@/hooks/useAuth';

function LoginContainer() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLogin } = useAuth();

    const [isRemember, setIsRemember] = useState(false);
    const [configInfo, setConfigInfo] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
    const [info, setInfo] = useState(INIT_INFO);
    const [errorMsg, setErrorMsg] = useState(INFO_ERROR_MSG);

    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7);

    const searchParams = new URLSearchParams(location.search);
    const callBack = searchParams.get('callback');

    const inputIdValueChange = (e) => {
        const { value } = e.target;
        if (value) {
            setErrorMsg({ ...errorMsg, errorId: '' });
        }
        setInfo({
            ...info,
            id: value,
        });
    };

    const inputPwdValueChange = (e) => {
        const { value } = e.target;
        if (value) {
            errorMsg.errorPassword !== '<CapsLock> 이 켜져 있습니다.' &&
                setErrorMsg({ ...errorMsg, errorPassword: '' });
        }
        setInfo({
            ...info,
            password: value,
        });
    };

    const handleIdSave = (e) => {
        setIsRemember(e.target.checked);
    };

    const getConfigInfo = async () => {
        const res = await getConfigInfoApi();
        if (res.data) {
            setConfigInfo(res.data.config);
        }
    };

    const postLogin = async (param) => {
        if (isRemember) {
            setCookie('rememberUserId', info.id, {
                expires: expiresDate,
                path: '/', // 쿠키의 유효 경로 설정
            });
        } else {
            removeCookie('rememberUserId', { path: '/' });
        }
        setTokenLocalStorage('test');
        setAuthToken(getTokenFromLocalStorage());
        if (callBack) {
            window.location.href = callBack + '?token=' + getTokenFromLocalStorage();
        } else {
            navigate('/');
        }
        // try {
        //   const res = await postLoginApi(param);

        //   logoutFunction();

        //   let passChangeForcedYn = "Y";

        //   if (res.headers["state"] === LOGIN_STATE.DEACTIVATE) {
        //     setPopupAccountDisabled(true);
        //     navigate("/login/deactivate");
        //   } else if (res.headers["state"] === LOGIN_STATE.LOCK) {
        //     setErrorMsg({
        //       ...errorMsg,
        //       errorPassword: "계정이 잠금 처리 되었습니다. 관리자에 문의하세요.",
        //     });
        //   } else if (res.headers["state"] === LOGIN_STATE.IPERROR) {
        //     setErrorMsg({
        //       ...errorMsg,
        //       errorPassword: "접근 허용된 IP가 아닙니다.",
        //     });
        //   } else if (res.headers["state"] === LOGIN_STATE.UNAPPROVED) {
        //     setPopupWaitApproval(true);
        //     navigate("/login/unapproved", { state: { name: res.data.name } });
        //   } else if (
        //     res.headers["state"] === LOGIN_STATE.UPDATEPASSWORD ||
        //     res.headers["state"] === LOGIN_STATE.RESET
        //   ) {
        //     if (isRemember) {
        //       setCookie("rememberUserId", info.id, {
        //         expires: expiresDate,
        //         path: "/", // 쿠키의 유효 경로 설정
        //       });
        //     } else {
        //       removeCookie("rememberUserId", { path: "/" });
        //     }
        //     if (res.headers["state"] === LOGIN_STATE.UPDATEPASSWORD) {
        //       passChangeForcedYn = configInfo.passChangeForcedYn;
        //     }
        //     const dataToSend = {
        //       token: res.headers["authorization"].replace(BEARER_PREFIX, ""),
        //       id: info.id,
        //       pass: userPass,
        //       passChangeForcedYn: passChangeForcedYn,
        //       callBack: callBack,
        //     };
        //     navigate("/updatePassword", { state: dataToSend });
        //   } else if (res.headers["count"]) {
        //     setErrorMsg({
        //       ...INFO_ERROR_MSG,
        //       errorPassword:
        //         "비밀번호가 일치하지 않습니다. " + res.headers["count"],
        //     });
        //   } else {
        //     removeCookie("rememberUserId", { path: "/" });
        //     if (isRemember) {
        //       setCookie("rememberUserId", info.id, {
        //         expires: expiresDate,
        //         path: "/", // 쿠키의 유효 경로 설정
        //       });
        //     } else {
        //       removeCookie("rememberUserId", { path: "/" });
        //     }
        //     setTokenLocalStorage(
        //       res.headers["authorization"].replace(BEARER_PREFIX, "")
        //     );
        //     setAuthToken(getTokenFromLocalStorage());
        //     if (callBack) {
        //       window.location.href =
        //         callBack + "?token=" + getTokenFromLocalStorage();
        //     } else {
        //       navigate("/");
        //     }
        //   }
        // } catch (error) {
        //   setErrorMsg({
        //     ...INFO_ERROR_MSG,
        //     errorId: "아이디가 일치하지 않습니다.",
        //   });
        // }
    };

    const handleLogin = () => {
        const idRegex = /^[a-zA-Z0-9]+$/;

        if (info.id === '') {
            return setErrorMsg({
                ...INFO_ERROR_MSG,
                errorId: '아이디를 입력해주세요.',
            });
        } else if (!idRegex.test(info.id)) {
            return setErrorMsg({
                ...INFO_ERROR_MSG,
                errorId: '소문자와 숫자만 입력해주세요.',
            });
        }
        if (info.password === '') {
            return setErrorMsg({
                ...INFO_ERROR_MSG,
                errorPassword: '비밀번호를 입력해주세요.',
            });
        }

        const params = {
            username: info.id,
            password: info.password,
        };

        postLogin(params);
    };

    const handleEnterKey = (e) => {
        const isCapsLock = e.getModifierState('CapsLock');
        if (isCapsLock) {
            setErrorMsg({
                ...errorMsg,
                errorPassword: '<CapsLock> 이 켜져 있습니다.',
            });
        } else {
            setErrorMsg({ ...errorMsg, errorPassword: '' });
        }

        if (e.keyCode == 13) {
            handleLogin();
        }
    };

    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
            setInfo({
                ...info,
                id: cookies.rememberUserId,
            });

            setIsRemember(true);
        }
    }, []);

    useEffect(() => {
        getConfigInfo();
        // logoutFunction();
    }, []);

    useEffect(() => {
        isLogin && navigate('/');
    }, [isLogin]);

    return (
        // 2024.06.07 wrap , container login-bg 두개의 태그로 감쌈
        <div className="wrap">
            <div className="container login-bg">
                <div className="login">
                    <div className="logo">
                        <button className="logo-btn">
                            <img src={imgLogo} alt="I TALK" />
                        </button>
                    </div>
                    <h1 className="login-tit">채팅상담솔루션</h1>
                    <div className="login-box">
                        <div className={`login-option ${errorMsg.errorId ? 'error' : ''}`}>
                            <div className="login-wrap">
                                <label htmlFor="login-id">아이디</label>
                                <input
                                    type="text"
                                    value={info.id}
                                    onChange={inputIdValueChange}
                                    id="login-id"
                                    placeholder="아이디를 입력해 주세요."
                                    maxLength="16"
                                />
                            </div>
                            {errorMsg.errorId && <p className="error-info">{errorMsg.errorId}</p>}
                        </div>
                        <div className={`login-option ${errorMsg.errorPassword ? 'error' : ''}`}>
                            <div className="login-wrap">
                                <label htmlFor="login-pwd">비밀번호</label>
                                <input
                                    type="password"
                                    value={info.password}
                                    onChange={inputPwdValueChange}
                                    id="login-pwd"
                                    placeholder="비밀번호를 입력해 주세요."
                                    onKeyUp={handleEnterKey}
                                    maxLength="17"
                                />
                            </div>
                            {errorMsg.errorPassword && <p className="error-info">{errorMsg.errorPassword}</p>}
                        </div>
                        <div className="login-checkbox">
                            <label htmlFor="id-saved">
                                <input type="checkbox" id="id-saved" onChange={handleIdSave}></input>
                                아이디 저장
                                {/* 2024.06.07 아이디 저장하기 -> 저장 수정 */}
                            </label>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="login-btn" onClick={handleLogin}>
                                로그인
                            </button>
                        </div>
                    </div>
                    <div className="login-etc">
                        <span className="login-txt">아이디 또는 비밀번호를 분실한 경우 관리자에게 문의하세요.</span>
                        <div className="login-info">
                            <span className="login-num">
                                관리자 연락처 :<span className="num"> 031-534-3417</span>
                            </span>
                            <span className="login-mail">
                                관리자 이메일 :<span className="mail"> italkadmin@italk.com</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;
