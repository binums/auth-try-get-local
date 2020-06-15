import React from 'react';
import { Title } from './CardTitle.styled';

interface Props {
  title: string;
}

const CardTitle: React.FC<Props> = ({ title }) => {
  return <Title>{title.toUpperCase()}</Title>;
};

export default CardTitle;
