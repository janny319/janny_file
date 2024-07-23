import { axios } from '@/api/axios';
import { getUserInfoApi } from '@/api/login';
import Header from '@/components/layout/Header';
import Lnb from '@/components/layout/Lnb';
import useAuth from '@/hooks/useAuth';
import { login } from '@/store/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Layout() {
    const { isLogin } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isLoginPage = ['/Login', '/password'].includes(pathname);
    // 2024.06.07 추가
    const isRootPath = pathname === '/';
    const wrapClassName = isLoginPage ? 'container login-wrap' : isRootPath ? 'container bg' : 'container';

    const getUserInfo = async (param) => {
        try {
            const res = await getUserInfoApi(param);
            if (res.data) {
                dispatch(
                    login({
                        userId: res.data.userId,
                        name: res.data.name,
                        tel: res.data.tel,
                        role: res.data.role,
                        grade: res.data.grade,
                        gradeName: res.data.gradeName,
                        centerName: res.data.centerName,
                        stateId: res.data.stateId,
                        menuRoleId: res.data.menuRoleId,
                        fileDownloadYn: res.data.fileDownloadYn,
                        routekey: '*.italk.sk-bundang.13',
                    })
                );
            }
        } catch (error) {
            dispatch(clearService());
            dispatch(logout());
            navigate('/');
        }
    };

    // useEffect(() => {
    //   axios.interceptors.response.use((response) => {
    //     if (
    //       response.config.url !== "/api/v1/user-info" &&
    //       response.config.url !== "/api/portal/removeSession" &&
    //       response.config.url !== "/api/portal/configs"
    //     ) {
    //       getUserInfo();
    //     }
    //     return response;
    //   });
    // }, []);

    // return isLogin ? (
    //   <div className="wrap">
    //     <Header />
    //     <div className={wrapClassName}>
    //       {!isLoginPage && <Lnb />}
    //       <Outlet />
    //     </div>
    //   </div>
    // ) : (
    //   <Navigate to={"/login"} />
    // );
    return (
        <div className="wrap">
            <Header />
            <div className={wrapClassName}>
                {!isLoginPage && <Lnb />}
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
