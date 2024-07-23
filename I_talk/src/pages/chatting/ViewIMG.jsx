import imgTBD from '@/assets/img/img_tbd.png';

function ViewIMG({closePopup}) {
    return(
        <div className="view-img-pop">
            <img src={imgTBD} alt='예시이미지' />
        </div>
    )
}

export default ViewIMG;