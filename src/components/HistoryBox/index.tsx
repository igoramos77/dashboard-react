import React from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

import formatCurrence from '../../utils/formatCurrency';

import { Container, TitleContainer, LegendContainer, Legend } from './styles';

interface IHistoryBoxProps {
  data: {
    month: string;
    amoutEntry: number;
    amoutOutput: number;
  }[],
  lineColorAmoutEntry: string;
  lineColorAmoutOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({data, lineColorAmoutEntry, lineColorAmoutOutput}) => (
    <Container>
      <TitleContainer>
        <h2>Histórico de Saldo</h2>
        <LegendContainer>
        <Legend background={lineColorAmoutEntry}>
            <div>
            </div>
            <span>Entradas</span>
          </Legend>
          <Legend background={lineColorAmoutOutput}>
            <div>
            </div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </TitleContainer>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece"  />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip formatter={(value:number) => formatCurrence(Number(value))} />
          <Line type="monotone" dataKey="amoutEntry" name="Entradas" stroke={lineColorAmoutEntry} strokeWidth={5} dot={{r: 5 }} activeDot={{r:8}} />
          <Line type="monotone" dataKey="amoutOutput" name="Saídas" stroke={lineColorAmoutOutput} strokeWidth={5} dot={{r: 5 }} activeDot={{r:8}} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )

export default HistoryBox;
