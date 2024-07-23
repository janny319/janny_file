import React from 'react';

function GraphBox({ graphColor, graphOption, graphWidth, title, time }) {
  return (
    <div className={`graph-box ${graphColor}`}>
      <span className="graph-tit">{title}</span>
      <div className={`graph-${graphOption}`} style={{ width: graphWidth }}>
        <div className="graph-active" style={{ width: '100%' }}></div>
      </div>
      <span className="graph-time">{time}</span>
    </div>
  );
}

export default GraphBox;
