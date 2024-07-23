import { ReactComponent as IcoChat } from '@/assets/icon/ico_lnb_chat.svg';
import { ReactComponent as IcoDashBoard } from '@/assets/icon/ico_lnb_dashboard.svg';
import { ReactComponent as IcoHistory } from '@/assets/icon/ico_lnb_history.svg';
import { ReactComponent as IcoMonitor } from '@/assets/icon/ico_lnb_monitor.svg';
import { ReactComponent as IcoOperate } from '@/assets/icon/ico_lnb_operate.svg';
import { ReactComponent as IcoStatistics } from '@/assets/icon/ico_lnb_statistics.svg';
import { ReactComponent as IcoTemplate } from '@/assets/icon/ico_lnb_template.svg';
import '@/style/lnb.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Lnb() {
    //1Depth click 활성화
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (index) => {
        console.log('menu click');
        setActiveButton(index);
        setSideBar(false);
    };
    //1Depth 메뉴
    const [oneDepth, setOneDepth] = useState('');
    //2Depth 메뉴가 있을때 sideBar 열림
    const [sideBar, setSideBar] = useState(false);

    const handleSideBar = (index) => {
        if (index === 4) {
            // index와 같은걸 클릭할 경우
            if (activeButton === index) {
                setSideBar(false);
                setActiveButton(null);
            } else {
                setActiveButton(index);
                setSideBar(true);
            }
        } else if (index === 6) {
            if (activeButton === index) {
                setSideBar(false);
                setActiveButton(null);
            } else {
                setActiveButton(index);
                setSideBar(true);
            }
        } else {
            setActiveButton(index);
            setSideBar(false);
        }
        setSubMenus((prevState) => ({
            ...prevState,
            operate: false,
            account: false, // 클래스 리셋
        }));
        setOneDepth(false);
    };

    //subMenu 하단 열고 닫힘
    const [subMenus, setSubMenus] = useState({
        operate: false,
        category: false,
        account: false,
    });

    // 클릭한 버튼과 메뉴를 저장하는 상태
    const [activeMenu, setActiveMenu] = useState(null);

    // const oneDepthClassName = oneDepth
    const handleToggle = (menu) => {
        setSubMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
        // 메뉴가 닫힐 때 clickedButton 상태 초기화
        if (subMenus[menu]) {
            setActiveMenu(null);
        }
    };

    // 1DepthMenu 클릭시 활성화
    const oneDepthMenuClick = (txt, menu) => {
        console.log('1depth', activeMenu);
        setOneDepth(txt);
        setActiveMenu(menu);

        // 다른 1Depth 메뉴를 클릭할 때 2Depth 메뉴 초기화
        setSubMenus((prevState) => ({
            operate: menu === 'operate' ? prevState.operate : false,
            category: menu === 'category' ? prevState.category : false,
            account: menu === 'account' ? prevState.account : false,
        }));

        if (!['operate', 'account'].includes(menu)) {
            console.log('센터운영 설정', '계정 관리');
            setSubMenus({
                operate: false,
                category: false,
                account: false,
            });
        }
    };

    //Link는 임의로 작성/수정해도 무방함.
    //현재 CounsulHistory 만 페이지가 있음.
    const firstMenus = [
        {
            icon: <IcoDashBoard />,
            text: '대시보드',
            link: '/DashBoard',
        },
        {
            icon: <IcoMonitor />,
            text: '모니터링',
            link: '/Monitoring',
        },
        {
            icon: <IcoChat />,
            text: '채팅상담',
            link: '/Chat',
        },
        {
            icon: <IcoHistory />,
            text: '상담이력',
            link: '/CounsulHistory',
        },
        {
            icon: <IcoStatistics />,
            text: '상담통계',
            link: '/CounsulHistory',
        },
        {
            icon: <IcoTemplate />,
            text: '지식관리',
            link: '/Knowledge',
        },
        {
            icon: <IcoOperate />,
            text: '운영관리',
        },
    ];

    const OperateMenus = [
        {
            text: '카테고리 관리',
            link: '/CategotyManage',
        },
        {
            text: '운영시간',
            link: '/TimeSetting',
        },
        {
            text: '상담조건/안내메시지',
            link: '/Condition',
        },
        {
            text: '상담 배분',
            link: '/Allocation',
        },
        {
            text: '고급 설정',
            link: '/AdvancedSetting',
        },
    ];

    const AccountMenus = [
        {
            text: '사용자',
            link: '/AccountUser',
        },
        {
            text: '팀',
            link: '/AccountTeam',
        },
        {
            text: '설정',
            link: '/AccountSetting',
        },
    ];

    return (
        <div className={sideBar ? 'lnb-box open' : 'lnb-box'}>
            <div className="lnb-icon">
                <ul className="fist-depth">
                    {firstMenus.map((button, index) => (
                        <li key={index}>
                            <Link
                                to={button.link}
                                className={activeButton === index ? 'active' : ''}
                                onClick={
                                    firstMenus[index].text === '상담통계'
                                        ? (e) => {
                                              e.preventDefault();
                                              handleSideBar(index);
                                          }
                                        : firstMenus[index].text === '운영관리'
                                        ? (e) => {
                                              e.preventDefault();
                                              handleSideBar(index);
                                          }
                                        : () => handleButtonClick(index)
                                }
                                // onClick={
                                //     index === firstMenus.length - 1
                                //         ? (e) => {
                                //               e.preventDefault();
                                //               handleSideBar();
                                //           }
                                //         : () => handleButtonClick(index)
                                // }
                            >
                                {button.icon}
                                <span>{button.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="side-bar">
                {activeButton === 4 ? (
                    <>
                        <h3>상담통계 </h3>
                        <ul className="firstDepth">
                            <li>
                                <Link
                                    className={oneDepth === '기간별 통계' ? 'menu-on' : null}
                                    to={'/Statistics'}
                                    onClick={() => oneDepthMenuClick('기간별 통계')}
                                >
                                    <span className="menu-text">기간별 통계</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '상담사별 통계' ? 'menu-on' : null}
                                    to={'/CounsulStatist'}
                                    onClick={() => oneDepthMenuClick('상담사별 통계')}
                                >
                                    <span className="menu-text">상담사별 통계</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '센터/카테고리별 통계' ? 'menu-on' : null}
                                    to={'/CategoryStatist'}
                                    onClick={() => oneDepthMenuClick('센터/카테고리별 통계')}
                                >
                                    <span className="menu-text">센터/카테고리별 통계</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '채널별 통계' ? 'menu-on' : null}
                                    to={'/ChannelStatist'}
                                    onClick={() => oneDepthMenuClick('채널별 통계')}
                                >
                                    <span className="menu-text">채널별 통계</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <h3>운영관리</h3>
                        <ul className="firstDepth">
                            <li>
                                <Link
                                    className={oneDepth === '센터 관리' ? 'menu-on' : null}
                                    to={'/CenterManagement'}
                                    onClick={() => oneDepthMenuClick('센터 관리')}
                                >
                                    <span className="menu-text">센터 관리</span>
                                </Link>
                            </li>
                            <li className={subMenus.operate ? 'menu-down active' : 'menu-down'}>
                                <button
                                    // className={activeMenu === 'operate' ? 'menu-on' : null}
                                    onClick={() => handleToggle('operate')}
                                >
                                    <span>센터운영 설정</span>
                                </button>
                                <ul className={subMenus.operate ? 'secondDepth open' : 'secondDepth'}>
                                    {OperateMenus.map((button, index) => (
                                        <li key={index}>
                                            <Link
                                                to={button.link}
                                                className={oneDepth === button.text ? 'on' : null}
                                                // onClick={() => twoDepthMenuClick(button.text, 'operate')}
                                                onClick={() => oneDepthMenuClick(button.text, 'operate')}
                                            >
                                                {button.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '카테고리 설정' ? 'menu-on' : null}
                                    to={'/CategorySetting'}
                                    onClick={() => oneDepthMenuClick('카테고리 설정')}
                                >
                                    <span className="menu-text">카테고리 설정</span>
                                </Link>
                            </li>
                            <li className={subMenus.account ? 'menu-down active' : 'menu-down'}>
                                <button
                                    // className={activeMenu === 'account' ? 'menu-on' : null}
                                    onClick={() => handleToggle('account')}
                                >
                                    <span>계정 관리</span>
                                </button>
                                <ul className={subMenus.account ? 'secondDepth open' : 'secondDepth'}>
                                    {AccountMenus.map((button, index) => (
                                        <li key={index}>
                                            <Link
                                                to={button.link}
                                                className={oneDepth === button.text ? 'on' : null}
                                                // onClick={() => twoDepthMenuClick(button.text, 'account')}
                                                onClick={() => oneDepthMenuClick(button.text, 'account')}
                                            >
                                                {button.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '상담 템플릿 관리' ? 'menu-on' : null}
                                    to={'/Template'}
                                    onClick={() => oneDepthMenuClick('상담 템플릿 관리')}
                                >
                                    <span className="menu-text">상담 템플릿 관리</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '금지어 관리' ? 'menu-on' : null}
                                    to={'/prohibitedWord'}
                                    onClick={() => oneDepthMenuClick('금지어 관리')}
                                >
                                    <span className="menu-text">금지어 관리</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={oneDepth === '공지사항 관리' ? 'menu-on' : null}
                                    to={'/NoticManagement'}
                                    onClick={() => oneDepthMenuClick('공지사항 관리')}
                                >
                                    <span className="menu-text">공지사항 관리</span>
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default Lnb;
