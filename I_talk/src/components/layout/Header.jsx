import notice from "@/assets/icon/ico_notice.svg";
import profile from "@/assets/icon/ico_profile.svg";
import imgLogo from "@/assets/img/img_logo_top.svg";
import ChangeState from "@/components/layout/ChangeState";
import StateLayer from "@/components/layout/StateLayer";
import useModal from "@/hooks/useModal";
import BoardPopup from "@/pages/operate/notice/BoardPopup";
import "@/style/header.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const NewNoti = "newList";
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const counselState = [
    { className: "counsel", text: "상담중", code: "S" },
    { className: "counsel end", text: "종료", code: "E" },
    { className: "counsel rest", text: "휴식중", code: "H" },
    { className: "counsel eating", text: "식사중", code: "M" },
  ];

  const [status, setStatus] = useState(0); // 상담 상태의 기본값은 0
  const [stateLayer, setStateLayer] = useState(false);
  const [changeState, setChangeState] = useState(false);
  const { open } = useModal();

  const showModal = () => {
    open({
      content: <BoardPopup />,
      header: "공지사항",
      type: "FullModal",
    });
  };

  const handleChangeState = () => {
    setChangeState(!changeState);
    setStateLayer(false);
  };

  useEffect(() => {
    const findIndex = counselState.findIndex((item) => {
      item.code === user.stateId;
    });
    findIndex !== -1 && setStatus(findIndex);
  }, [user]);

  return (
    <div className="header-box">
      <div className="logo-box">
        <button className="logo" onClick={() => navigate("/")}>
          <img src={imgLogo} alt="I TALK" />
        </button>
      </div>
      <div className="user-info">
        <div className="notice">
          <button className="notice-view" onClick={showModal}>
            {/* 2024.07.22 NewNoti 값에 따라 빨간 점 표시 가능  */}
            <i className={NewNoti === "newList" ? "new" : null}>
              <img src={notice} alt="공지사항" />
            </i>
            <span>공지사항</span>
          </button>
        </div>
        {/* <div className="user-name"> */}
        <StateLayer stateLayer={stateLayer} setStateLayer={setStateLayer} />
        {/* </div> */}
        {/* <div className="state"> */}
        {/* <button
            className={counselState[status].className}
            onClick={() => handleChangeState()}
          >
            <span>{counselState[status].text}</span>
          </button> */}
        {/* {changeState && ( */}
        <ChangeState
          counselState={counselState}
          status={status}
          changeState={changeState}
          setChangeState={setChangeState}
        />
        {/* )} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
