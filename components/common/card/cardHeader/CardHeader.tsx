import React from 'react';
import { Header } from './CardHeader.styled';

type CardHeaderProps = {
  children: any;
  height: string;
};

const CardHeader = ({ children, height }: CardHeaderProps) => {
  return (
    <Header style={{height: height}}>
      {children}
    </Header>
  );
};

export default CardHeader;
