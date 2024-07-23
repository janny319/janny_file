import { postLogOutApi } from "@/api/login";
import profile from "@/assets/icon/ico_profile.svg";
import "@/style/popup.scss";
import { logoutFunction } from "@/utils/authUtil";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function StateLayer({ stateLayer, setStateLayer }) {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const datepickerRef = useRef(null);
  const handleLogout = () => {
    postLogOut({ id: user.userId });
  };
  const postLogOut = async (params) => {
    const searchParams = new URLSearchParams(params);
    const res = await postLogOutApi(searchParams);
    if (res.code === 200) {
      logoutFunction();
      navigate("/");
    }
  };

  const handleChangePwd = () => {
    navigate("/password");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        setStateLayer(false);
      }
    }
    if (stateLayer) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [stateLayer]);
  return (
    <div className="user-name" ref={datepickerRef}>
      <button onClick={() => setStateLayer(!stateLayer)}>
        <i>
          <img src={profile} alt="프로필 이미지" />
        </i>
        <span>
          <strong>{user.name}</strong>&#40;{user.userId}&#41;
        </span>
      </button>
      {stateLayer && (
        <div className="vertex-Layer">
          <h4>{user.gradeName}</h4>
          {/* 2024.06.07 텍스트 추가 상담현황 인포센터 */}
          <span className="station">
            상담현황<i className="ico-bar"></i>인포센터
          </span>
          {/* 2024.06.07 텍스트 수정 */}
          <div className="user-name">
            <i>
              <img src={profile} alt="프로필 이미지" />
            </i>
            <span>
              {/* 2024.06.07 텍스트 수정 */}
              <strong>
                {user.name}
                <em className="nim">님</em>
                <em>&#40;{user.userId}&#41;</em>
              </strong>
              {/* 2024.06.07 텍스트 수정 */}
            </span>
          </div>
          <div className="work-state">
            <span className="station">{user.centerName}</span>
            <span className="station">상담현황</span>
            {/* 2024.06.07 텍스트 추가 상담현황 */}
            <div className="count">
              <dl>
                {/* 2024.06.07 text 수정 */}
                <dt>배분된 상담 건</dt>
                <dd>
                  <em>n</em>건
                </dd>
              </dl>
              <dl>
                {/* 2024.06.07 text 수정 */}
                <dt>완료한 상담 건</dt>
                <dd>
                  <em>n</em>건
                </dd>
              </dl>
            </div>
          </div>
          <div className="btn-wrap">
            <button className="btn line black small" onClick={handleChangePwd}>
              비밀번호 변경
            </button>
            <button className="btn bg black small" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StateLayer;
