import Modal from '@/components/Modal';
import { useState } from 'react';

function PopupGuide(PopupGuide) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>Open Modal</button>
      {modal ? <Modal title={'얼럿입니다'} msg={123} onClose={() => setModal(false)} /> : null}
    </div>
  );
}

export default PopupGuide;
