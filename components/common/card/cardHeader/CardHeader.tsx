import React from 'react';
import { Header } from './CardHeader.styled';

interface Props {
  children: any;
}

const CardHeader: React.FC<Props> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default CardHeader;
