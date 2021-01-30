import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuid_v4 } from "uuid";

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import listMonths from '../../utils/months';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { parseISO } from 'date-fns/esm';


interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [mouthSelected, setMouthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

  const  movimentType = match.params.type;

  const pageData = useMemo(() => {
    return movimentType === 'entry-balance' ?
    {
      title: 'Entradas',
      lineColor: '#4E41F0',
      data: gains
    }
    :
    {
      title: 'Saídas',
      lineColor: '#e44c4f',
      data: expenses
    }
  },[movimentType]);


  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    const { data } = pageData;

    data.forEach(item => {
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

  },[pageData]);

  const months = useMemo(() => {
    return listMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  },[]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prev) => [...prev, frequency]);
    }
  }

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

  useEffect(() => {
    const { data } = pageData;

    const filteredDate = data.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === mouthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    });

    const formatedDate = filteredDate.map(item => {
      return {
        id: uuid_v4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: format(parseISO(item.date), 'PPPP', { locale: ptBR }),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e',
      }
    })
    setData(formatedDate);
  },[mouthSelected, yearSelected, selectedFrequency, pageData]);

  return(
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput options={months} onChange={(e) => handleMothSelected(e.target.value)} defaultValue={mouthSelected} />
        <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <Filters>
        <button type="button"
        className={`tag-filter recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
        onClick={() => handleFrequencyClick('recorrente')}>Recorrentes</button>

        <button type="button"
        className={`tag-filter eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
        onClick={() => handleFrequencyClick('eventual')}>Eventuais</button>
      </Filters>

      <Content>
        {data.map((item, index) => (
          <HistoryFinanceCard key={item.id} tagColor={item.tagColor} title={item.description} subtitle={item.dateFormatted} amount={item.amountFormatted} />
        ))}
      </Content>
    </Container>
  )
}

export default List;
