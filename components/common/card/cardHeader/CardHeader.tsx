import React from 'react';
import { Header } from './CardHeader.styled';

type CardHeaderProps = {
  children: any;
};

const CardHeader = ({ children }: CardHeaderProps) => {
  return <Header>{children}</Header>;
};

export default CardHeader;
