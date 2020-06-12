import React from 'react';
import { Button, KIND } from 'baseui/button';

type ButtonFullWidthProps = {
  title: string;
  kind?: any;
  type?: any;
};

const ButtonFullWidth = ({
  title,
  kind,
  type,
}: ButtonFullWidthProps) => {
  return (
    <Button
      kind={kind}
      type={type}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              width: '100%'
            };
          },
        },
      }}
    >
      {title.toUpperCase()}
    </Button>
  );
};

ButtonFullWidth.defaultProps = {
  title: '',
  kind: KIND.primary,
  type: '',
};

export default ButtonFullWidth;
