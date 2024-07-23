import React, { useState } from 'react';
import Count from '@/components/Count';
import SelectBox from '@/components/SelectBox';

function Registration() {
    // Dropdown menu state
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('카테고리를 선택하세요.');
    const options = ['카테고리1', '카테고리2', '카테고리3', '카테고리4'];
    // Input and validation state
    const [value, setValue] = useState(''); // input value 값(id만 넣어놈)
    const [isValid, setIsValid] = useState(null); // 아이디 중복검사 할 경우 메시지 나오게 하는 조건문
    const [errorMessage, setErrorMessage] = useState(''); // 중복검사시 나오는 에러메시지
    const [isDuplicateChecked, setIsDuplicateChecked] = useState(false); // 중복검사 버튼을 누를경우와 누르지 않을경우
    const [requiredFields, setRequiredFields] = useState({
        id: '',
        name: '',
        phone: '',
    }); // 아이디, 이름, 휴대폰 번호 값
    const [validationError, setValidationError] = useState(''); // 저장버튼 누를 경우 메신저 나오게 하는 조건문

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const onChangeValue = (e) => {
        setValue(e.target.value);
        setIsDuplicateChecked(false); // 중복검사시 초기화
    };

    const onChangeRequiredField = (e) => {
        setRequiredFields({
            ...requiredFields,
            [e.target.name]: e.target.value,
        });
    };

    const duplicateClick = () => {
        const regex = /^[a-z0-9]{5,15}$/;
        if (!regex.test(value)) {
            setIsValid(false);
            setErrorMessage('아이디는 5자 이상 15자 이하여야 합니다.');
        } else {
            if (value === 'test123') {
                setIsValid(false);
                setErrorMessage('이미 사용중인 아이디입니다.');
            } else {
                setIsValid(true);
                setErrorMessage('');
            }
        }
        setIsDuplicateChecked(true);
    };

    const saveClick = () => {
        if (!isDuplicateChecked) {
            setIsValid(false);
            setErrorMessage('아이디 중복검사를 진행해주세요.');
            return;
        }

        if (!requiredFields.id || !requiredFields.name || !requiredFields.phone) {
            setValidationError('필수 정보를 모두 입력하세요.');
            return;
        }
        setIsDuplicateChecked(true);
    };

    return (
        <>
            <div className="pop-content">
                <div className="sub-tit">
                    <strong>관리자 권한으로 신규 사용자를 등록합니다.</strong>
                    <p> 신규 사용자 비밀번호는 [계정관리 &gt; 설정] 에서 설정한 초기 비밀번호에 따릅니다.</p>
                </div>
                <div className="input-box">
                    <span>
                        아이디<i className="ico-check"></i>
                    </span>
                    <input
                        type="text"
                        name="id"
                        onChange={(e) => {
                            onChangeValue(e);
                            onChangeRequiredField(e);
                        }}
                        placeholder="5~15자의 영문(소문자), 숫자 입력 가능"
                    />
                    <button type="button" onClick={duplicateClick} className="btn bg white txt-black small">
                        중복검사
                    </button>
                </div>
                {isValid === true && <span className="check-txt">사용 가능</span>}
                {isValid === false && <span className="check-txt error">{errorMessage}</span>}
                <div className="input-box">
                    <span>
                        이름<i className="ico-check"></i>
                    </span>
                    <input type="text" name="name" onChange={onChangeRequiredField} placeholder="이름을 입력하세요." />
                </div>
                {/* 240604 위치 변경 */}
                <div className="input-box">
                    <span>
                        권한<i className="ico-check"></i>
                    </span>
                    {/* 240523 마크업 수정 */}
                    <div className="radio-btn">
                        <label htmlFor="counsul">
                            <input id="counsul" type="radio" name="authority" />
                            상담사
                        </label>
                    </div>
                    <div className="radio-btn">
                        <label htmlFor="manager">
                            <input id="manager" type="radio" name="authority" />
                            매니저
                        </label>
                    </div>
                    <div className="radio-btn">
                        <label htmlFor="admin">
                            <input id="admin" type="radio" name="authority" />
                            관리자
                        </label>
                    </div>
                </div>
                <div className="input-box">
                    <span>
                        휴대폰번호<i className="ico-check"></i>
                    </span>
                    <input
                        type="number"
                        name="phone"
                        onChange={onChangeRequiredField}
                        placeholder="숫자만 입력하세요."
                    />
                </div>

                {/* 240523 마크업 수정 */}
                <div className="input-box">
                    <span>
                        센터<i className="ico-check"></i>
                    </span>
                    {/* 24.05.20 SelectBox 컴포넌트 수정 */}
                    <SelectBox selectClassName={'account'} title={'90일'} options={['90일', '60일', '30일']} />
                </div>

                <div className="input-box">
                    <span>최대 상담수</span>
                    {/* 24.05.20 Count 컴포넌트 수정 */}
                    <Count />
                </div>
            </div>
            <div className="btn-list right">
                {validationError && <div className="validation-error">{validationError}</div>}
                <button type="button" className="btn bg white txt-black black">
                    취소
                </button>
                <button type="button" onClick={saveClick} className="btn bg black">
                    저장
                </button>
            </div>
        </>
    );
}

export default Registration;
