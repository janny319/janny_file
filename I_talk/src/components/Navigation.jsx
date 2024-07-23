import React from 'react';

function Navigation({ title }) {
    const lastTitle = title[title.length - 1];
    return (
        <div className="page-tit">
            <h3>{lastTitle}</h3>
            <span className="navi">
                <em>
                    <i className="home"></i>
                </em>
                {title.map((element, index) => (
                    <em key={index}>{element}</em>
                ))}
            </span>
        </div>
    );
}

export default Navigation;
