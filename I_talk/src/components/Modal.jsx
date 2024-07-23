import '@/style/popup.scss';
import popClose from '@/assets/icon/ico_pop_close.svg';

const Modal = ({ title, msg, onClose }) => {
  return (
    <div className="pop-wrap">
      <div className="dimd"></div>
      <div className="modal">
        <div className="modal-head">
          <h3 className="modal-tit">{title}</h3>
          <button className="btn-close" onClick={onClose}>
            <img src={popClose} alt="닫기" />
          </button>
        </div>
        <p className="modal-cont">{msg}</p>
      </div>
    </div>
  );
};

export default Modal;
