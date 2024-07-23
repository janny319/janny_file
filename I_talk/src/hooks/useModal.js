import { clearModal, closeModal, openModal } from '@/store/modals';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const useModal = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.modals);

  const open = ({ content, type, header, className }) => {
    const id = nanoid();
    dispatch(openModal({ id, content, type, header, className }));
    return id;
  };

  const close = (id) => {
    dispatch(closeModal(id));
  };

  const clear = () => {
    dispatch(clearModal());
  };

  return {
    modals,
    open,
    clear,
    close,
  };
};

export default useModal;
