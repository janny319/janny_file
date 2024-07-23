import '@/style/popup.scss';
import imgTBD from '@/assets/img/img_tbd.png';

function PreviewIMG({ alertClassName, closePopup }) {
    return (
        <div className={`pop-wrap ${alertClassName}`}>
            <div className="dimd"></div>
            <div className="pop-up">
                <div className="view-img-pop">
                    <button className='img-pop-close' onClick={closePopup}></button>
                    <img src={imgTBD} alt='예시이미지' />
                </div>
            </div>
        </div>
    );
}

export default PreviewIMG;
