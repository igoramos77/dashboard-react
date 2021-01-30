import React from 'react';

import CountUp from 'react-countup';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight  } from './styles';

interface IPieChartBoxProps {
  data: {
    name: string;
    value: number;
    percent: number;
    background: string;
  }[];
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie data={data} dataKey="percent">
            {
              data.map((item, index) => <Cell key={index} fill={item.background} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
