import useModal from '@/hooks/useModal';

const TestModal = () => {
  const { open, close } = useModal();
  const handleBtn = () => {
    open({
      content: <TestModal />,
      header: 'header2',
      type: 'FullModal',
    });
  };
  return (
    <>
      <p className="modal-cont">
        ddfsadfsdfsdf
        <button className="btn bg black line" onClick={handleBtn} style={{ color: 'white' }}>
          중첩모달 테스트
        </button>
      </p>
    </>
  );
};

export default TestModal;
