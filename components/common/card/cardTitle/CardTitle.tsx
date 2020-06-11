import React from 'react';
import { Title } from './CardTitle.styled';

type CardTitleProps = {
  title: string;
};

const CardTitle = ({ title }: CardTitleProps) => {
  return <Title>{title}</Title>;
};

export default CardTitle;
