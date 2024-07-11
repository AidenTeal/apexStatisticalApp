'use client'

import {
    AreaChart,
    Area,
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
      Wins: 15,
      Games: 100,
    },
    {
      name: 'S17',
      Wins: 20,
      Games: 200,
    },
    {
      name: 'S18',
      Wins: 50,
      Games: 150,
    },
    {
      name: 'S19',
      Wins: 15,
      Games: 60,
    },
    {
      name: 'S20',
      Wins: 2,
      Games: 30,
    },
    {
      name: 'S21',
      Wins: 25,
      Games: 120,
    },
  ];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm" style={{color: "hsl(var(--foreground))"}}>
            Games Per Season:
            <span className="ml-2">{payload[1].value}</span>
          </p>
          <p className="text-sm" style={{color: "hsl(var(--card))"}}>
            Wins Per Season:
            <span className="ml-2">{payload[0].value}</span>
          </p>
          <p className="text-sm" style={{color: "hsl(var(--foreground))"}}>
            Wins %: 
            <span className="ml-2">{(payload[0].value / payload[1].value * 100).toFixed(2)}%</span>
          </p>
        </div>
      );
    }
};

export const ApexWinsChart = () => {
    return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
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
        <Area dataKey="Wins" fill="hsl(var(--card))" stroke="white" />
        <Area dataKey="Games" fill="hsl(var(--foreground))" stroke="white"/>
      </AreaChart>
    </ResponsiveContainer>
  );
}