import { Cookies } from 'react-cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearService } from '@/store/service';
import { logout } from '@/store/user';
import { BEARER_PREFIX, LOGIN_NEXT_URL, TOKEN_NAME } from '@/constants/login';

const cookies = new Cookies();

export const clearSessionCookie = () => {
  cookies.remove('JSESSIONID');
};

export const setTokenLocalStorage = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const checkAuthToken = () => {
  const currentUrl = window.location.pathname;

  if (axios.defaults.headers.common['Authorization']) {
    return;
  }
  if (getTokenFromLocalStorage()) {
    // 토큰이 존재하고 현재 경로가 /main, /dialog가 아닐 때
    if (
      (!currentUrl.includes('/main') && !currentUrl.includes('/dialog')) ||
      currentUrl === '/main'
    ) {
      // window.location.href = '/';
      return;
    }
    setAuthToken(getTokenFromLocalStorage());
  }
};

export const setAuthToken = (token) => {
  if (token) {
    setTokenLocalStorage(token);
    axios.defaults.headers.common['Authorization'] = `${BEARER_PREFIX}${token}`;
  }
};

export const setAuthTokenFromResponseHeader = (header) => {
  if (header && header.headers['authorization']) {
    const token = header.headers['authorization'].replace(BEARER_PREFIX, '');
    setAuthToken(token);
  }
};

export const useLogout = () => {
  clearSessionCookie();
  localStorage.removeItem(TOKEN_NAME);
  const dispatch = useDispatch();
  dispatch(clearService());
  dispatch(logout());
};

// 새로 추가한 로그아웃 함수 (use를 사용하지 않아 함수 내에서 사용 가능)
export const logoutFunction = () => {
  clearSessionCookie();
  localStorage.removeItem(TOKEN_NAME);
  clearService();
  logout();
};

export const getLoginNextUrlOnLocalStorage = () => {
  return localStorage.getItem(LOGIN_NEXT_URL);
};
