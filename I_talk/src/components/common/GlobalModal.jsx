import popClose from '@/assets/icon/ico_pop_close.svg';
import useModal from '@/hooks/useModal';
import '@/style/popup.scss';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const GlobalModal = () => {
  const { modals } = useSelector((state) => state.modals);
  const { close } = useModal();
  const dropdownRefs = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current && !dropdownRefs.current.contains(event.target)) {
        modals.length > 0 && close(modals[modals.length - 1]?.id);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRefs, modals]);

  return (
    modals?.length > 0 &&
    modals?.map((item, index) => {
      return (
        <div
          className={`pop-wrap ${item.className ?? ''}`}
          role="dialog"
          style={{ zIndex: 9000 + index }}
          key={index}
        >
          <div className="dimd"></div>
          <div className="pop-up" ref={dropdownRefs}>
            <button className="btn-close" onClick={() => close(item?.id)}>
              <img src={popClose} alt="닫기" />
            </button>
            {item?.header && (
              <div className="pop-head">
                <h3 className="pop-tit">{item?.header}</h3>
              </div>
            )}
            {/* popup 내용이 달라질수 있어서 children 요소로 수정 */}
            {item?.content}
          </div>
          {/* <div className="modal" ref={dropdownRefs}>
            <div className="modal-head">
              <h3 className="modal-tit">{item?.header}</h3>
              <button className="btn-close" onClick={() => close(item?.id)}>
                <img src={popClose} alt="닫기" />
              </button>
            </div>
            {item?.content}
          </div> */}
        </div>
      );
    })
  );
};

export default GlobalModal;
