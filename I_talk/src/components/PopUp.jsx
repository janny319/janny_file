import '@/style/popup.scss';
import popClose from '@/assets/icon/ico_pop_close.svg';

function PopUp({ title, closePopup, alertClassName, children }) {
    return (
        <div className={`pop-wrap ${alertClassName}`}>
            <div className="dimd"></div>
            <div className="pop-up">
                <button className="btn-close" onClick={closePopup}>
                    <img src={popClose} alt="닫기" />
                </button>
                {title && (
                    <div className="pop-head">
                        <h3 className="pop-tit">{title}</h3>
                    </div>
                )}
                {/* popup 내용이 달라질수 있어서 children 요소로 수정 */}
                {children}
            </div>
        </div>
    );
}

export default PopUp;
