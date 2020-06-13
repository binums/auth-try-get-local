import React from 'react';
import { GenericCard } from './Card.styled';

const Card = ({ children }) => {
  return <GenericCard>{children}</GenericCard>;
};

export default Card;
