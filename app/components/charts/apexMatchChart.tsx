'use client'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  const matchStats = [
    {
      name: 'Match One',
      Damage: 150,
      Kills: 1,
    },
    {
      name: 'Match Two',
      Damage: 100,
      Kills: 0,
    },
    {
      name: 'Match Three',
      Damage: 585,
      Kills: 3,
    },
    {
      name: 'Match Four',
      Damage: 1508,
      Kills: 5,
    },
    {
      name: 'Match Five',
      Damage: 1736,
      Kills: 8,
    },
    {
      name: 'Match Six',
      Damage: 323,
      Kills: 1,
    },
  ];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm" style={{color: "hsl(var(--foreground))"}}>
            Kills in Match:
            <span className="ml-2">{payload[1].value}</span>
          </p>
          <p className="text-sm" style={{color: "hsl(var(--card))"}}>
            Damage in Match:
            <span className="ml-2">{payload[0].value}</span>
          </p>
          <p className="text-sm" style={{color: "hsl(var(--foreground))"}}>
            Damage per Kill: 
            <span className="ml-2">{payload[1].value === 0 ? "NaN" : (payload[0].value / payload[1].value).toFixed(2)}</span>
          </p>
        </div>
      );
    }
};

export const ApexMatchesChart = () => {
    return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={matchStats}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line dataKey="Damage" type="monotone" stroke="hsl(var(--card))" activeDot={{ r: 8 }} />
        <Line dataKey="Kills" type="monotone" stroke="hsl(var(--foreground))"/>
      </LineChart>
    </ResponsiveContainer>
  );
}