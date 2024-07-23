import React, { useState } from 'react';

function TopSelect({
    dropdownRefs,
    dropdownButtonContents,
    dropdownContents,
    selectedItem,
    setSelectedItem,
}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleMenu = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleSelectItem = (index, item) => {
        setSelectedItem((prevState) => {
            const newState = [...prevState];
            newState[index] = item;
            return newState;
        });
        toggleMenu(index);
    };

    return (
        <>
            {Array.from({ length: dropdownContents.length }, (_, index) => (
                <div
                    className={`drop-down ${openIndex === index ? 'on' : ''}`}
                    key={index}
                    ref={dropdownRefs.current[index]}
                >
                    <button className="big" onClick={() => toggleMenu(index)}>
                        <sub className="tit">{dropdownButtonContents[index].title}</sub>
                        <span className="cont">{selectedItem[index] || dropdownButtonContents[index].option}</span>
                    </button>
                    {openIndex === index && (
                        <ul className="list">
                            {dropdownContents[index].map((item, subIndex) => (
                                <li key={subIndex} onClick={() => handleSelectItem(index, item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
}

export default TopSelect;
