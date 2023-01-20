import { FC } from "react";
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data, data2 } from "./data";
import "./diagram.scss";

const Diagram: FC = () => {
  const gradientOffset = (): number => {
    const dataMax: number = Math.max(...data.map((i) => i.uv));
    const dataMin: number = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <div className="diagram">
      <div className="diagram__item-part1">
        <div className="item-part1-line">
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="item-part1-colum">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={400}
              height={300}
              data={data2}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={off} stopColor="green" stopOpacity={1} />
                  <stop offset={off} stopColor="red" stopOpacity={1} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="diagram__item-part2"></div>
    </div>
  );
};

export default Diagram;
