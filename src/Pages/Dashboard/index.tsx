import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import ContentStatistics from '../../components/ContentStatistics';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

import { Container, ContentStatisticsGraphs } from './styles';

const Dashboard: React.FC = () => {
  const [mouthSelected, setMouthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


  const years = useMemo(() => {
    let uniqueYears: number[] = [];


    [...expenses, ...gains].forEach(item => {
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

  const relationsExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.toFixed(1)),
        background: "#e44c4e",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        background: "#f7931b",
      }
    ];

    return data;

  },[totalGains, totalExpenses]);

  const histotyData = useMemo(() => {
    return listMonths.map((_, month) => {

      let amoutEntry = 0;

      gains.forEach(element => {
        const date = new Date(element.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amoutEntry += Number(element.amount);
          } catch (error) {
            throw new Error('amoutEntry is invalid. Amout entre must be valid number.');
          }
        }
      });

      let amoutOutput = 0;

      expenses.forEach(element => {
        const date = new Date(element.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amoutOutput += Number(element.amount);
          } catch (error) {
            throw new Error('amoutOutput is invalid. Amout entre must be valid number.');
          }
        }
      });

      return {
        monthNumber: month,
        month: listMonths[month].substr(0, 3),
        amoutEntry,
        amoutOutput,
      }
    }).filter(item => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear);
    });
  }, [yearSelected]);


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
        <ContentStatisticsGraphs>
          <MessageBox title={message.title} description={message.description} footerText={message.footerText} icon={message.icon} />
          <PieChartBox data={relationsExpensesVersusGains}></PieChartBox>
        </ContentStatisticsGraphs>
        <HistoryBox data={histotyData} lineColorAmoutEntry="#f29318" lineColorAmoutOutput="#ff0400" />
    </Container>
  );
}

export default Dashboard;
