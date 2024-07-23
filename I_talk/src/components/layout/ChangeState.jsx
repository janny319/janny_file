import React, { useEffect, useRef, useState } from "react";
import "@/style/popup.scss";

function ChangeState({ counselState, status, changeState, setChangeState }) {
  const [consult, setConsult] = useState();
  const datepickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        setChangeState(false);
      }
    }
    if (changeState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [changeState]);

  return (
    <div className="state" ref={datepickerRef}>
      <button
        className={counselState[status].className}
        onClick={() => setChangeState(!changeState)}
      >
        <span>{counselState[status].text}</span>
      </button>
      {changeState && (
        <div className="vertex-Layer">
          <h3>상담상태 변경</h3>
          {consult !== "start" ? (
            <div className="state-wrap">
              <button className="btn state start">상담시작</button>
            </div>
          ) : (
            <div className="state-wrap">
              <button className="btn state meal">식사중</button>
              <button className="btn state rest">휴식중</button>
              <button className="btn state end">상담종료</button>
            </div>
          )}
          <p className="state-info">상담을 시작합니다.</p>
          <div className="btn-wrap right-area">
            <button
              className="btn bg txt-black white small"
              onClick={() => {
                setChangeState(false);
              }}
            >
              취소
            </button>
            <button className="btn bg black small">확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangeState;
