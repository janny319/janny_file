import React from 'react';
import GraphBox from '@/pages/counsul/GraphBox';

function CounselGraph() {
    return (
        <div className="graph-wrap">
            {/* 고객인입 */}
            <GraphBox
                graphColor={'customer'}
                graphOption={'customer'}
                graphWidth={'33.33%'}
                title={'고객인입'}
                time={'00:02:20'}
            />

            {/* 상담시작 */}
            <GraphBox
                graphColor={'start'}
                graphOption={'start'}
                title={'상담시작'}
                graphWidth={'33.33%'}
                time={'00:02:20'}
            />

            {/* 상담종료 */}
            <GraphBox graphColor={'close'} graphOption={'close'} title={'상담종료'} time={'00:02:20'} />

            {/* 상담완료 */}
            <GraphBox graphColor={'completion'} graphOption={'completion'} title={'완료'} time={'00:02:20'} />
        </div>
    );
}

export default CounselGraph;
