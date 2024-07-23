import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer, Sector } from "recharts";

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

const PieGraph = ({ title, dataKey, values, labels, height }) => {
  const [hiddenKeys, setHiddenKeys] = useState([]);

  const handleLegendClick = (data) => {
    const { value } = data;
    if (hiddenKeys.includes(value)) {
      setHiddenKeys(hiddenKeys.filter((key) => key !== value));
    } else {
      setHiddenKeys([...hiddenKeys, value]);
    }
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 3}
        outerRadius={outerRadius + 3}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  };

  const COLORS = ['#7d22a9', '#ffc737', '#ff710a', '#de275e', '#56d3fb', '#2972e9', '#49cd6e'];

  const filteredValues = values.filter(entry => !hiddenKeys.includes(entry.name));

  return (
    <div>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            onClick={handleLegendClick}
            payload={values.map((entry, index) => ({
              id: entry.name,
              type: "circle",
              value: entry.name,
              color: hiddenKeys.includes(entry.name) ? '#cccccc' : COLORS[index % COLORS.length],
            }))}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
          />
          <Pie
            data={filteredValues}
            dataKey={dataKey}
            cx="50%"
            cy="50%"
            paddingAngle={1}
            innerRadius={38}
            outerRadius={53}
            fill="#8884d8"
            activeShape={renderActiveShape}
          >
            {filteredValues.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
