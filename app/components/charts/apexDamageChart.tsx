'use client'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  const playerStats = [
    {
      name: 'S16',
      avgDamage: 4000,
      Kills: 2400,
    },
    {
      name: 'S17',
      avgDamage: 3000,
      Kills: 1398,
    },
    {
      name: 'S18',
      avgDamage: 9800,
      Kills: 2000,
    },
    {
      name: 'S19',
      avgDamage: 3908,
      Kills: 2780,
    },
    {
      name: 'S20',
      avgDamage: 4800,
      Kills: 1890,
    },
    {
      name: 'S21',
      avgDamage: 3800,
      Kills: 2390,
    },
  ];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm" style={{color: "hsl(var(--card))"}}>
            avgDamage:
            <span className="ml-2">{payload[0].value}</span>
          </p>
          <p className="text-sm" style={{color: "hsl(var(--foreground))"}}>
            Kills:
            <span className="ml-2">{payload[1].value}</span>
          </p>
        </div>
      );
    }
};

export const ApexDamageChart = () => {
    return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={playerStats}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="avgDamage" fill="hsl(var(--card))" />
        <Bar dataKey="Kills" fill="hsl(var(--foreground))" />
      </BarChart>
    </ResponsiveContainer>
  );
}
