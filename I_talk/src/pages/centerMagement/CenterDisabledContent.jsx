
function CenterDisabledContent({closePopup}) {
    return (
        <div>
            <div className='pop-content'>
                <div className='sub-tit'>
                    <strong>번호이동 센터를 비활성화 하시겠어요?</strong>
                    <p>비활성화 하시려면 센터 이름을 입력하세요.</p>
                </div>
                <div className='input-box colum'>
                    <span>센터 이름</span>
                    <input id="number" type="text" placeholder="비활성화할 센터의 이름을 입력하세요."></input>
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>취소</button>
                <button type="button" className="btn bg black">비활성화</button>
            </div>
        </div>
    );
}

export default CenterDisabledContent;
