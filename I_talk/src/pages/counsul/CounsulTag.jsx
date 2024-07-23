import React from 'react';

function CounsulTag({ title, tags }) {
    return (
        <div className="txt-box">
            <span className="detail-talk-tit">{title}</span>
            <div className="tag-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="talk-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CounsulTag;
