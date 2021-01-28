import React from 'react';

import CountUp from 'react-countup';

//import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight  } from './styles';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    background: string;
  }[];
}

const PieChart: React.FC<IPieChartProps> = ({ data }) => (
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
     {/*  <ResponsiveContainer>
        <PieChart>
          <Pie data={[{ amout: 30, percent: 95 }]} labelLine={false} dataKey="percent">
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);

export default PieChart;
