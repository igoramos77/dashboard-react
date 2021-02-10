import React from 'react';

import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';

import CountUp from 'react-countup';

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrence from '../../utils/formatCurrency';

interface IBarChartProps {
  title: string;
  data: {
    name : string,
    amount: number,
    percent: number,
    background: string
  }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({title, data}) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
        <LegendContainer>
          {
            data.map((item, index) => (
              <Legend key={index} background={item.background}>
                <div> <CountUp suffix={'%'} start={0} end={item.percent} decimals={0} /></div>
                <span>{item.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
        </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor" >
              {
                data.map((indicator, index) => (
                  <Cell key={index} fill={indicator.background}  />
                ))
              }
            </Bar>
            <Tooltip cursor={{fill: 'none'}} formatter={(value:number) => formatCurrence(Number(value))} />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export default BarChartBox;
