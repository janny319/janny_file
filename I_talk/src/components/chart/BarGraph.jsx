import React, { useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        {payload.map((data, index) => (
          <p key={index} className="data">{`${data.name}: ${data.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const BarGraph = ({
  title,
  dataKey,
  oxLabel,
  oyLabel,
  values,
  yLimit,
  labels,
  yTicks,
  legendVisible,
  barSize,
  stacked,
  stackId,
  referenceLines,
}) => {
  const [barProps, setBarProps] = useState(
    labels.reduce(
      (a, { key }) => {
        a[key] = false;
        return a;
      },
      { hover: null }
    )
  );

  const handleLegendMouseEnter = (e) => {
    if (!barProps[e.dataKey]) {
      setBarProps({ ...barProps, hover: e.dataKey });
    }
  };

  const handleLegendMouseLeave = (e) => {
    setBarProps({ ...barProps, hover: null });
  };

  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
      hover: null,
    });
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const stackOffset = stacked ? "expand" : "none"
  return (
    <div>
      <ResponsiveContainer width="100%" height={194}>
        <BarChart
          barSize={barSize}
          data={values}
          stackOffset={stackOffset}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey}>
            <Label value={oxLabel} position="insideBottomRight" />
          </XAxis>
          <YAxis
            type="number"
            domain={yLimit}
            tickFormatter={formatNumber}
            ticks={yTicks}
          >
            <Label value={oyLabel} position="insideLeft" angle={-90} />
          </YAxis>
          <Tooltip
            cursor={{fill: 'transparent'}}
            separator={": "}
            content={<CustomTooltip />}
          />
          <Legend
            onClick={selectBar}
            onMouseOver={handleLegendMouseEnter}
            onMouseOut={handleLegendMouseLeave}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ display: legendVisible ? 'block' : 'none' }}
          />
          {referenceLines && referenceLines.map((line, index) => (
            <ReferenceLine
              key={index}
              y={line.y}
              stroke={line.stroke}
              label={{ value: line.label, position: 'insideLeft', fill: line.stroke, dy: -10 }}
            />
          ))}
          {labels.map((label, index) => (
            <Bar
              key={index}
              dataKey={label.key}
              fill={label.color}
              stackId={stackId}
              hide={barProps[label.key] === true}
            />
          ))}

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
