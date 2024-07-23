import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const btnBackPageHandler = () => {
    navigate(-1);
  };

  const btnHomeHandler = () => {
    navigate('/');
  };

  const btns = [
    { label: '이전 페이지', className: 'secondary', onClick: btnBackPageHandler },
    { label: '홈으로 이동', className: 'primary', onClick: btnHomeHandler },
  ];

  return (
    <div className="error">
      <div className="text-area">
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <p>
          페이지의 주소가 잘못 입력되었거나 현재 사용할 수 없는 페이지입니다.
          <br />
          입력한 주소를 다시 확인해주세요.
        </p>
      </div>
      <div className="btn-area">
        {btns.map((item) => {
          return (
            <button onClick={item.onClick} className={item.className}>
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Error;
