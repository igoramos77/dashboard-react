import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import ContentStatistics from '../../components/ContentStatistics';
import MessageBox from '../../components/MessageBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

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

  const totalExpenses = useMemo(() => {
    let total : number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const mouth = date.getMonth() + 1;

      if (mouth === mouthSelected && year === yearSelected ) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amout! Amout must be number.');
        }
      }
    });
    return total;
  },[mouthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total : number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const mouth = date.getMonth() + 1;

      if (mouth === mouthSelected && year === yearSelected ) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error('Invalid amout! Amout must be number.');
        }
      }
    });
    return total;
  },[mouthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  },[totalGains, totalExpenses]);

  const message = useMemo(() => {
    if(totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente minimizar gastos desnecessários.",
        icon: sadImg,
      }
    }
    else if(totalBalance === 0) {
      return {
        title: "Ufa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo mês, tente poupar o seu dinheiro.",
        icon: happyImg,
      }
    }

    else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva.",
        footerText: "Contiue assim. Considere investir o seu saldo.",
        icon: grinningImg,
      }
    }

  },[totalBalance]);


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
        <ContentStatistics labelText="saldo" background={ totalBalance <= 0 ? '#ff0400' : '#4e41f0' } value={totalBalance} subText="Atualizado com base nas entradas e saídas" icon="dolar" />
        <ContentStatistics labelText="entradas" background="#f29318" value={totalGains} subText="Atualizado com base nas entradas e saídas" icon="arrowUp" />
        <ContentStatistics labelText="saídas" background="#df514e" value={totalExpenses} subText="Atualizado com base nas entradas e saídas" icon="arrowDown" />
      </article>
      <div>
        <MessageBox title={message.title} description={message.description} footerText={message.footerText} icon={message.icon} />
      </div>
    </Container>
  );
}

export default Dashboard;
