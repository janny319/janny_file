import React, { useState } from 'react';

function TemplateApply({ closePopup }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('분류를 선택하세요.');
    const options = ['분류1', '분류2', '분류3', '분류4'];
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [isCategory, setIsCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('텍스트형');
    const category = ['텍스트형', '혼합형(이미지+ 텍스트 +링크)​'];
    const toggleCategory = () => {
        setIsCategory(!isCategory);
    };
    const handleCategoryClick = (option) => {
        setSelectedCategory(option);
        setIsCategory(false);
    };

    const [templateContent, setTemplateContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleTextareaChange = (event) => {
        setTemplateContent(event.target.value);
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setSelectedFile(event.target.files[0].name);
        }
    };

    const getCategoryContent = () => {
        switch (selectedCategory) {
            case '텍스트형':
                return (
                    <>
                        <span>템플릿 내용</span>
                        <textarea
                            style={{ height: '320px' }}
                            placeholder="텍스트형 내용을 입력하세요."
                            value={templateContent}
                            onChange={handleTextareaChange}
                        />
                        <div className="letter-num">
                            {templateContent.length}<em className="total">/ 1,000</em>
                        </div>
                    </>
                );
            case '혼합형(이미지+ 텍스트 +링크)​':
                return (
                    <>
                        <span>템플릿 내용</span>
                        <div style={{ width: "100%" }}>
                            <div className="filebox">
                                <input className="upload-name" value={selectedFile || ""} placeholder="2MB이하의 jpg, png 파일만 등록 가능합니다.​" readOnly />
                                <label htmlFor="file">파일찾기</label>
                                <input type="file" id="file" onChange={handleFileChange} />
                            </div>
                            <textarea
                                style={{ height: '320px' }}
                                placeholder="혼합형 내용을 입력하세요."
                                value={templateContent}
                                onChange={handleTextareaChange}
                            />
                            <div className="letter-num">
                                {templateContent.length}<em className="total">/ 1,000</em>
                            </div>
                            <div className="grid-box">
                                <table className="table-basic">
                                    <colgroup>
                                        <col width="220px" />
                                        <col width="*" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="align-left">버튼명</th>
                                            <th className="align-left">링크 URL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td className="table-btn">
                                                <div>
                                                    <input type="text" />
                                                    <button className="top-arrow"></button>
                                                    <button className="btm-arrow"></button>
                                                    <button className="btn-edit-del">삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td className="table-btn">
                                                <div>
                                                    <input type="text" />
                                                    <button className="top-arrow"></button>
                                                    <button className="btm-arrow"></button>
                                                    <button className="btn-edit-del">삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td className="table-btn">
                                                <div>
                                                    <input type="text" />
                                                    <button className="top-arrow"></button>
                                                    <button className="btm-arrow"></button>
                                                    <button className="btn-edit-del">삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td className="table-btn">
                                                <div>
                                                    <input type="text" />
                                                    <button className="top-arrow"></button>
                                                    <button className="btm-arrow"></button>
                                                    <button className="btn-edit-del">삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td className="table-btn">
                                                <div>
                                                    <input type="text" />
                                                    <button className="top-arrow"></button>
                                                    <button className="btm-arrow"></button>
                                                    <button className="btn-edit-del">삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <span>템플릿 내용</span>
                        <textarea
                            style={{ height: '320px' }}
                            placeholder="내용을 입력하세요."
                            value={templateContent}
                            onChange={handleTextareaChange}
                        />
                        <div className="letter-num">
                            {templateContent.length}<em className="total">/ 1,000</em>
                        </div>
                    </>
                );
        }
    };

    return (
        <div>
            <div className="pop-content">
                <div className="input-box">
                    <span>분류</span>
                    <div className="pop-drop-down">
                        <div className={`drop-down ${isOpen ? 'on' : ''}`}>
                            <button className="nomal" onClick={toggleDropdown}>
                                {selectedOption}
                            </button>
                            {isOpen && (
                                <ul className="list">
                                    {options.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="input-box">
                    <span>유형</span>
                    <div className="pop-drop-down">
                        <div className={`drop-down template ${isCategory ? 'on' : ''}`}>
                            <button className="nomal" onClick={toggleCategory}>
                                {selectedCategory}
                            </button>
                            {isCategory && (
                                <ul className="list">
                                    {category.map((option, index) => (
                                        <li key={index} onClick={() => handleCategoryClick(option)}>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="input-box column">
                    {getCategoryContent()}
                </div>
            </div>
            <div className="btn-list right">
                <button type="button" className="btn bg white txt-black" onClick={closePopup}>취소</button>
                <button type="button" className="btn bg black">등록</button>
            </div>
        </div>
    );
}

export default TemplateApply;
