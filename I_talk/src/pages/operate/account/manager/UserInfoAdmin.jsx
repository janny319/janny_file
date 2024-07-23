import React, { useState } from 'react';
import SelectBox from '@/components/SelectBox';
import Count from '@/components/Count';

function UserInfoAdmin() {
  return (
    <div>
      <div className="pop-content">
        <div className="underline-wrap">
          <button type="button" className="underline-btn">
            계정 삭제
          </button>
          <button type="button" className="underline-btn">
            비밀번호 초기화
          </button>
        </div>
        <hr />
        <div className="input-box">
          <span>이름</span>
          <p>아이롬 PC</p>
        </div>
        <div className="input-box">
          <span>아이디</span>
          <input type="text" name="id" defaultValue="고양이" />
        </div>

        <div className="input-box">
          <span>권한</span>

          <div className="radio-box">
            <div className="radio-btn">
              <input id="counsul" type="radio" name="authority" />
              <label htmlFor="counsul">상담사</label>
            </div>
            <div className="radio-btn">
              <input id="manager" type="radio" name="authority" />
              <label htmlFor="manager">매니저</label>
            </div>
          </div>
        </div>
        <div className="input-box">
          <span>휴대폰 번호</span>
          <input type="text" name="id" defaultValue="00000000000" />
        </div>
        <div className="input-box">
          <span>센터</span>
          <SelectBox
            selectClassName={'account'}
            title={'옵션 1'}
            options={['센터 선택 1', '센터 선택 2', '센터 선택 3', '센터 선택 4']}
          />
        </div>
        <div className="input-box">
          <span>팀</span>
          <p className="info">[계정관리&gt;팀&gt;팀 정보] 에서 팀원을 등록하세요.</p>
        </div>
        <div className="input-box num-box">
          <span>최대 상담수</span>
          <Count />
          {/* <button className="btn line black small" onClick={minusClick}>
                        <i className="ico-minus">
                            <img src={minusBtn} alt="minus icon" />
                        </i>
                    </button>
                    <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} readOnly />
                    <button className="btn line black small" onClick={plusClick}>
                        <i>
                            <img src={plusBtn} alt="plus icon" />
                        </i>
                    </button> */}
        </div>
        <div className="input-box">
          <span>등록일</span>
          <p>2024-01-02</p>
        </div>
        <div className="input-box both-box">
          <span>계정상태</span>
          <p>잠금</p>
          <button type="button" className="underline-btn">
            계정 잠금 삭제
          </button>
        </div>
      </div>
      <div className="btn-list right">
        <button type="button" className="btn line black">
          취소
        </button>
        <button type="button" className="btn bg black">
          저장
        </button>
      </div>
    </div>
  );
}

export default UserInfoAdmin;
