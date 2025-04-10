import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { Info } from "lucide-react";

const data = [
  { month: "Apr", value: 37000 },
  { month: "May", value: 47000 },
  { month: "Jun", value: 40000 },
  { month: "Jul", value: 89600 },
  { month: "Aug", value: 60000 },
  { month: "Sep", value: 45000 },
  { month: "Oct", value: 55000 },
];

interface CustomTooltipProps {
  active: boolean;
  payload: { value: number }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const percent = ((value - 20000) / (100000 - 20000)) * 100;
    const diffFromMid = percent - 50;
    const isAbove = diffFromMid >= 0;
    const diffDisplay = Math.abs(diffFromMid).toFixed(1);

    return (
      <div className="bg-[#1c1c1e] text-white p-4 rounded-xl shadow-lg border border-neutral-700">
        <div className="text-xl font-semibold">
          ${(value / 1000).toFixed(2)}k
        </div>
        <div className="flex items-center space-x-2 text-sm text-neutral-400">
          <span className={`text-${isAbove ? "green" : "red"}-500`}>
            {isAbove ? "▲" : "▼"} {diffDisplay}% {isAbove ? "above" : "below"}{" "}
            target
          </span>
          <Info size={14} />
        </div>
      </div>
    );
  }
  return null;
};

const CustomGraph = () => {
  return (
    <div className="bg-grey-900 border border-grey-1000 p-6 pt-[102px] rounded-[6px] shadow-lg relative h-[90.3%]">
      <div className="absolute top-[34px] right-[50px] bg-[#1c1c1e] text-white rounded-xl shadow-lg text-sm">
        <select
          id="unsatisfied-demand"
          className="bg-[#1c1c1e] text-white border border-neutral-700 rounded px-2 py-1 w-[204px] h-[34px]"
        >
          <option>Unsatisfied Demand %</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={310}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical fillOpacity={0.1} />
          <XAxis
            dataKey="month"
            stroke="#aaa"
            tickSize={10}
            tick={({ x, y, payload }) => {
              const isNow = payload.value === "May";

              return (
                <g transform={`translate(${x},${y + 10})`}>
                  <text
                    x={0}
                    y={0}
                    dy={16}
                    textAnchor="middle"
                    fill="#ccc"
                    className="text-sm"
                  >
                    {payload.value}
                  </text>
                  {isNow && (
                    <text
                      x={0}
                      y={26}
                      dy={16}
                      textAnchor="middle"
                      fill="#888"
                      className="text-xs"
                    >
                      Now
                    </text>
                  )}
                </g>
              );
            }}
          />
          <YAxis
            stroke="#aaa"
            tick={{ fill: "#ccc" }}
            domain={[20000, 100000]}
            tickFormatter={(value) => `$${value / 1000}K`}
          />
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} />}
            cursor={{ stroke: "#C8E972", strokeDasharray: "4 4" }}
          />
          <ReferenceLine x="Jul" strokeDasharray="4 4" />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#C8E972"
            strokeWidth={2.5}
            dot={{ stroke: "#C8E972", strokeWidth: 2, r: 5, fill: "#0f0f0f" }}
            activeDot={{
              r: 8,
              stroke: "#C8E972",
              strokeWidth: 2,
              fill: "#C8E972",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomGraph;
