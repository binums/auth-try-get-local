import React from 'react';
import { Button } from 'baseui/button';
import { ReactComponentLike } from 'prop-types';

type ButtonEndEnhancerProps = {
  title: string;
  titleColor?: string;
  bgColor?: string;
  bgHover?: string;
  enhancer: ReactComponentLike;
};

const ButtonEndEnhancer = ({
  title,
  titleColor,
  bgColor,
  bgHover,
  enhancer,
}: ButtonEndEnhancerProps) => {
  return (
    <Button
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              color: titleColor,
              backgroundColor: bgColor,
            };
          },
        },
      }}
      endEnhancer={enhancer}
    >
      {title.toUpperCase()}
    </Button>
  );
};

ButtonEndEnhancer.defaultProps = {
  title: '',
  bgColor: 'transparent',
  bgHover: 'transparent',
  enhancer: null,
};

export default ButtonEndEnhancer;
