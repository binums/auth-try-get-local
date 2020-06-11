import React from 'react';
import styles from './CardTitle.module.scss';

type CardTitleProps = {
  title: string;
};

const CardTitle = ({ title }: CardTitleProps) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default CardTitle;
