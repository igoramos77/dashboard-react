import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import ContentStatistics from '../../components/ContentStatistics';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listMonths from '../../utils/months';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [mouthSelected, setMouthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


  const years = useMemo(() => {
    let uniqueYears: number[] = [];


    [... expenses, ... gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

      return uniqueYears.map(year => {
        return {
          value: year,
          label: year
        }
      });

  },[]);

  const months = useMemo(() => {
    return listMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  },[]);


  const handleMothSelected = (mouth: string) => {
    try {
      const parseMouth = Number(mouth);
      setMouthSelected(parseMouth);
    }
    catch (error) {
      throw new Error ('Invalid mouth value! Is accept 0 - 24.');
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    }
    catch (error) {
      throw new Error ('Invalid year value! Is accept only numbers.');
    }
  }

  return(
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={months} onChange={(e) => handleMothSelected(e.target.value)} defaultValue={mouthSelected} />
        <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>
      <article>
        <ContentStatistics labelText="saldo" background="#4e41f0" value={150.00} subText="Atualizado com base nas entradas e saídas" icon="dolar" />
        <ContentStatistics labelText="entradas" background="#f29318" value={5000.00} subText="Atualizado com base nas entradas e saídas" icon="arrowUp" />
        <ContentStatistics labelText="saídas" background="#df514e" value={4850.00} subText="Atualizado com base nas entradas e saídas" icon="arrowDown" />
      </article>
    </Container>
  );
}

export default Dashboard;
