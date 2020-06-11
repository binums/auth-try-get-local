import React from 'react';
import styles from './CardHeader.module.scss';

type CardHeaderProps = {
  children: any;
  height: string;
};

const CardHeader = ({ children, height }: CardHeaderProps) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};

export default CardHeader;
