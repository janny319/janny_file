import React, { useState } from 'react';
import '@/style/dash-board.scss';
import BarGraph from "@/components/chart/BarGraph";

function ProcessStatus(props) {
    const inputData = {
        dataKey: "name",
        yLimit: [0, 100],
        values: [
            { name: '평균', '평균 처리율': 100 },
            { name: '01~02시', '시간별 처리율': 40 },
            { name: '02~03시', '시간별 처리율': 70 },
            { name: '03~04시', '시간별 처리율': 30 },
            { name: '04~05시', '시간별 처리율': 50 },
            { name: '05~06시', '시간별 처리율': 100 },
            { name: '06~07시', '시간별 처리율': 20 },
            { name: '07~08시', '시간별 처리율': 80 },
            { name: '09~10시', '시간별 처리율': 100 },
            { name: '10~11시', '시간별 처리율': 50 },
            { name: '11~12시', '시간별 처리율': 40 },
            { name: '12~13시', '시간별 처리율': 90 },
            { name: '13~14시', '시간별 처리율': 100 },
        ]
      };

    const inputLabels = [
        { key: "평균 처리율", color: "#7D22A9" },
        { key: "시간별 처리율", color: "#ffc737" },
    ];
    const [showReferenceLines1, setShowReferenceLines1] = useState(true);
    const referenceLines1 = [
        { y: 75, stroke: "#E94C09", label: "지연" },
        { y: 50, stroke: "#d51900", label: "위험" }
    ];
    const yTicks = [0, 25, 50, 75, 100];

    const barData2 = {
        dataKey: "name",
        yLimit: [0, 100],
        values: [
            { name: '평균', '요청 건수': 100, '처리 건수': 80 },
            { name: '01~02시', '요청 건수': 40, '처리 건수': 20 },
            { name: '02~03시', '요청 건수': 70, '처리 건수': 50 },
            { name: '03~04시', '요청 건수': 30, '처리 건수': 20 },
            { name: '04~05시', '요청 건수': 50, '처리 건수': 30 },
            { name: '05~06시', '요청 건수': 100, '처리 건수': 90 },
            { name: '06~07시', '요청 건수': 20, '처리 건수': 10 },
            { name: '07~08시', '요청 건수': 80, '처리 건수': 70 },
            { name: '09~10시', '요청 건수': 100, '처리 건수': 90 },
            { name: '10~11시', '요청 건수': 50, '처리 건수': 40 },
            { name: '11~12시', '요청 건수': 40, '처리 건수': 30 },
            { name: '12~13시', '요청 건수': 90, '처리 건수': 80 },
            { name: '13~14시', '요청 건수': 100, '처리 건수': 90 },
        ]
      };

    const barData2Labels = [
        { key: "요청 건수", color: "#ff710a" },
        { key: "처리 건수", color: "#ffc737" },
    ];
    const yTicks2 = [0, 25, 50, 75, 100];
    const [showReferenceLines2, setShowReferenceLines2] = useState(false);

    return (
        // 0229 status 클래스 cont-box 삭제
        <div className="mes-wrap">
            <div className="mes-tit status">
                {/* 240529 클래스 변경 */}
                <h4>처리 현황</h4>
                <div className="counselor-state">
                    <dl className="all">
                        <dt>평균 처리율</dt>
                        <dd>85.55%</dd>
                    </dl>
                    <ul className="detail">
                        <li>
                            <span>
                                <em>요청</em>2,312건
                            </span>
                        </li>
                        <li>
                            <span>
                                <em>대기</em>505건
                            </span>
                        </li>
                        <li>
                            <span>
                                <em>진행</em>20건
                            </span>
                        </li>
                        <li>
                            <span>
                                <em>종료</em>3,012
                            </span>
                        </li>
                    </ul>
                    <ul className="detail">
                        <li>
                            <span>
                                <em>1인당 평균 처리</em>2,312건
                            </span>
                        </li>
                        <li>
                            <span>
                                <em>시간당 평균 요청</em>2,304건
                            </span>
                        </li>
                        <li>
                            <span>
                                <em>시간당 평균 처리</em>520건
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="status-graph">
                <h4>평균 & 시간별 처리율</h4>
                <BarGraph
                    {...inputData}
                    labels={inputLabels}
                    yLimit={[0, "auto"]}
                    yTicks={yTicks}
                    legendVisible={true}
                    barSize={15}
                    stackId="stack"
                    referenceLines={showReferenceLines1 ? referenceLines1 : []}
                />
            </div>
            <div className="status-graph">
                <h4>시간별 요청 & 처리 건수</h4>
                <BarGraph
                    {...barData2}
                    labels={barData2Labels}
                    yLimit={[0, "auto"]}
                    yTicks={yTicks2}
                    legendVisible={true}
                    barSize={15}
                    referenceLines={showReferenceLines2 ? referenceLines2 : []}
                />
            </div>
        </div>
    );
}

export default ProcessStatus;
