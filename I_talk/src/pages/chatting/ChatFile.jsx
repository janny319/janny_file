import React, { useState } from 'react';
import '@/style/grid.scss';
import imgTBD from '@/assets/img/img_tbd.png';
import PreviewIMG from '@/components/PreviewIMG';

function ChatFile(){
    const data = [
        {
            fileName: '파일이름111',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름211',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름311',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름411',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름511',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름611',
            form: 'Pdf',
            volume: '1MB',
        },
        {
            fileName: '파일이름 711',
            form: 'Pdf',
            volume: '1MB',
        },
    ]
    const renderRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        <p className="no-data">주고받은 이미지가 없습니다.</p>
                    </td>
                </tr>
            );
        }
    };
    const [viewIMG, setViewIMG] = useState(false);
    const viewIMGOpen = () => {
        setViewIMG(true)
    }
    const closePopup = () => {
        setViewIMG(false);
    };


    return(
        <div className="chat-file">
            <div className="top-wrap">
                <h4>이미지</h4>
            </div>
            <div className="img-list">
                <ul>
                    <li>
                        <button onClick={viewIMGOpen}><img src={imgTBD} alt='예시이미지' /></button>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {/* 데이터가 없을떄 */}
                <div className="non-date" style={{display:"none"}}>
                    <p>주고받은 이미지가 없습니다.</p>
                </div>
                {viewIMG &&(
                    <PreviewIMG alertClassName={'size-popup'} closePopup={closePopup} />
                )}
            </div>
            <div className="top-wrap">
                <h4>파일</h4>
            </div>
            <div className="grid-box">
                <div className="scroll-box" style={{height:"221px"}}>
                    <table className="table-basic">
                        <colgroup>
                            <col width="*" />
                            <col width="110px" />
                            <col width="108px" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>파일명</th>
                                <th>파일형식</th>
                                <th>용량</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.fileName}</td>
                                    <td>{row.form}</td>
                                    <td>{row.volume}</td>
                                </tr>
                            ))}
                            {renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChatFile;