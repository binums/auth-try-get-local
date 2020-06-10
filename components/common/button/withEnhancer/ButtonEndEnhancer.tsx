import React from 'react';
import { Button } from 'baseui/button';
import { ReactComponentLike } from 'prop-types';

type ButtonEndEnhancerProps = {
  title: string;
  titleColor?: string;
  bgColor?: string;
  enhancer: ReactComponentLike;
};

const ButtonEndEnhancer = ({
  title,
  titleColor,
  bgColor,
  enhancer,
}: ButtonEndEnhancerProps) => {
  return (
    <Button
      $style={{ backgroundColor: bgColor, color: titleColor }}
      endEnhancer={enhancer}
    >
      {title.toUpperCase()}
    </Button>
  );
};

ButtonEndEnhancer.defaultProps = {
  title: '',
  bgColor: 'transparent',
  enhancer: null,
};

export default ButtonEndEnhancer;
