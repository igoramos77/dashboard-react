import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import { Container } from './styles';

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

interface ICardContentStatisticsProps {
  labelText: string;
  background: string;
  value: number;
  subText: string;
  icon: 'dolar' | 'arrowUp' | 'arrowDown';
}

const ContentStatistics: React.FC<ICardContentStatisticsProps> = ({
  labelText,
  background,
  value,
  subText,
  icon
}) => {

  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg
      case 'arrowDown':
        return arrowDownImg
      default:
        return undefined;
    }
  },[icon]);

  return(
    <Container background={background}>
      <label>{labelText}</label>
      <h3><CountUp prefix={'R$ '} end={value} separator="." decimal="," decimals={2} /></h3>
      <img src={iconSelected} alt={labelText} />
      <p>{subText}</p>
    </Container>
  );
}

export default ContentStatistics;
