import '@/style/tab.scss';

function Tab({ tabTitles, handleTabClick, activeTab, className }) {
    className = className || '';
    return (
        <div className={`tap-wrap ${className}`}>
            <ul className="tab-btn-wrap">
                {tabTitles?.map((tab, index) => (
                    <li key={index}>
                        <button
                            className={index === activeTab ? 'tab-btn active' : 'tab-btn'}
                            onClick={() => handleTabClick(index)}
                        >
                            <span>{tab.title}</span>
                            <em>{tab.number}</em>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tab;
