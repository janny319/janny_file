import { TOKEN_NAME } from '@/constants/login';
import { logout } from '@/store/user';
import { useDispatch } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem(TOKEN_NAME);
  const isLogin = Boolean(token);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_NAME);
    dispatch(logout());
  };

  return {
    isLogin,
    handleLogout,
  };
};

export default useAuth;
