import CounsulHistory from '@/pages/counsul/CounsulHistory';
import Layout from '@/pages/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from '@/store/store';
import { Provider } from 'react-redux';
import GuidePUB from '@/guide/guide'; //PUB guide 페이지
import GlobalModal from '@/components/common/GlobalModal';
import PasswordChange from '@/components/PasswordChange';
import Error from '@/pages/error';
import LoginPage from '@/pages/login';
import ToastNotiComponent from '@/components/common/ToastNotiComponent';
import ChatCounsul from '@/pages/chatting/ChatCounsul';
import BoardPage from '@/pages/notice/BoardPage';
import CenterManagement from '@/pages/centerMagement/CenterManagement';
import AccountUser from '@/pages/accountUser/AccountUser';
import AccountTeam from '@/pages/accountTeam/AccountTeam';
import AccountSetting from '@/pages/accountSetting/AccountSetting';
import Manage from '@/pages/centerSetting/categoryManagement/Management';
import TimeSetting from '@/pages/centerSetting/operating/TimeSetting';
import Condition from '@/pages/centerSetting/conditions/Condition';
import AdvancedSetting from '@/pages/centerSetting/advanced/AdvancedSetting';
import '@/style/global.scss';
import '@/style/reset.scss';
import Allocation from '@/pages/centerSetting/allocation/Allocation';
import CategorySetting from '@/pages/categorySetting/CategorySetting';
import DashBoard from '@/pages/dashBoard/DashBoard';
import Monitoring from '@/pages/monitoring/Monitoring';
import Statistics from '@/pages/statistics/Statistics';
import CounsulStatist from '@/pages/statistics/CounsulStatist';
import CategoryStatist from '@/pages/statistics/CategoryStatist';
import ChannelStatist from '@/pages/statistics/ChannelStatist';
import ProhibitedWord from '@/pages/prohibitedWord/ProhibitedWord';
import NoticeManagement from '@/pages/noticeManagement/NoticeManagement';
import NoticeAssign from '@/pages/noticeManagement/NoticeAssign';
import Announcement from '@/pages/noticeManagement/Announcement';
import Template from '@/pages/counsulTemplate/Template';
import Knowledge from '@/pages/knowledgeManage/Knowledge';
import KnowledgeDetail from '@/pages/knowledgeManage/KnowledgeDetail';
import NewKnowledge from '@/pages/knowledgeManage/NewKnowledge';
import TemplateAsign from '@/pages/counsulTemplate/TemplateAsign';
import TemplateMixed from '@/pages/counsulTemplate/TemplateMixed';
import TemplateDetail from '@/pages/counsulTemplate/TemplateDetail'
import TemplateDetailMixed from '@/pages/counsulTemplate/TemplateDetailMixed'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/DashBoard', element: <DashBoard /> },
            { path: '/CounsulHistory', element: <CounsulHistory /> },
            { path: '/BoardPage', element: <BoardPage /> },
            { path: '/password', element: <PasswordChange /> },
            { path: '/Chat', element: <ChatCounsul /> },
            { path: '/CenterManagement', element: <CenterManagement /> },
            { path: '/AccountUser', element: <AccountUser /> },
            { path: '/AccountTeam', element: <AccountTeam /> },
            { path: '/AccountSetting', element: <AccountSetting /> },
            { path: '/CategotyManage', element: <Manage /> },
            { path: '/TimeSetting', element: <TimeSetting /> },
            { path: '/Condition', element: <Condition /> },
            { path: '/AdvancedSetting', element: <AdvancedSetting /> },
            { path: '/Allocation', element: <Allocation /> },
            { path: '/CategorySetting', element: <CategorySetting /> },
            { path: '/Monitoring', element: <Monitoring /> },
            { path: '/Statistics', element: <Statistics /> },
            { path: '/CounsulStatist', element: <CounsulStatist /> },
            { path: '/CategoryStatist', element: <CategoryStatist /> },
            { path: '/ChannelStatist', element: <ChannelStatist /> },
            { path: '/ProhibitedWord', element: <ProhibitedWord /> },
            { path: '/NoticManagement', element: <NoticeManagement /> },
            { path: '/NoticeAssign', element: <NoticeAssign /> },
            { path: '/Announcement', element: <Announcement /> },
            { path: '/Template', element: <Template /> },
            { path: '/Knowledge', element: <Knowledge /> },
            { path: '/KnowledgeDetail', element: <KnowledgeDetail /> },
            { path: '/NewKnowledge', element: <NewKnowledge /> },
            { path: '/TemplateAsign', element: <TemplateAsign /> },
            { path: '/TemplateMixed', element: <TemplateMixed /> },
            { path: '/TemplateDetail', element: <TemplateDetail /> },
            { path: '/TemplateDetailMixed', element: <TemplateDetailMixed /> },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/*',
        element: <Error />,
    },
    {
        path: '/guide',
        element: <GuidePUB />,
    },
]);

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
                <GlobalModal />
                <ToastNotiComponent />
            </Provider>
        </>
    );
}

export default App;
